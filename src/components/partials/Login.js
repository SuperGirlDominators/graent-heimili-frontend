import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import '../../css/Home.css';
import * as actions from '../../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import $ from 'jquery';

class Login extends Component {
  state = {
    navigate: false
  }

  constructor() {
   super();

   this.handleClick = this.handleClick.bind(this);
   this.handleUserLoginResponse = this.handleUserLoginResponse.bind(this);
   this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
   this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
   this.handleLogout = this.handleLogout.bind(this);
 }

  componentDidMount() {
    $(document).ready(function() {     
      $('.button-two').hover(function(){   
        $('.button-one').removeClass('focus');  
        $('.button-two').addClass('focus');  
        $("#choice").html("Ekki með aðgang?");
        $("#choice_1").html("Skráðu þig inn á eftir");      
      });

      $('.button-one').hover(function(){   
        $('.button-two').removeClass('focus');  
        $('.button-one').addClass('focus');    
        $("#choice").html("EÐA");
        $("#choice_1").html("Skelltu þér þá yfir í nýskráningu!");   
      });
    }); 
  }

  /**
   * @param {string} url The session login endpoint.
   * @param {string} idToken The ID token to post to backend.
   * @param {?string} csrfToken The CSRF token to send to backend.
   * @return {jQuery.jqXHR<string>} A jQuery promise that resolves on completion.
   */
  /*postIdTokenToSessionLogin(url, idToken, csrfToken) {
    const headers = new Headers({
      "Content-Type": "application/json",
      'Accept':'application/json'}
    );
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: idToken, 
        // csrfToken: csrfToken
      }),
      headers,
      credentials: 'include', // Don't forget to specify this if you need cookies
    }).then(response => {
      console.log('user created',response)
    })
    .catch( err => {
      console.log("The error is ", err)
    });
  };*/

  componentWillMount(){
    // Initialize Firebase
    if (firebase.apps.length === 0) {
      var config = {
        apiKey: "AIzaSyCq230hArWBikQ5VF7rSii0qX3xW7cAx20",
        authDomain: "graent-heimili.firebaseapp.com",
        databaseURL: "https://graent-heimili.firebaseio.com",
        projectId: "graent-heimili",
        storageBucket: "graent-heimili.appspot.com",
        messagingSenderId: "533761094837"
      };
      firebase.initializeApp(config);
    }
  }

  handleUserLoginResponse(result) {
    this.props.actions.sessionLogin(result);
  }

  handleFacebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    // provider.addScope('profile');
    // provider.addScope('email');
    const context = this;
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        context.handleUserLoginResponse(result);
        this.setState({navigate:true})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const context = this;
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        context.handleUserLoginResponse(result);
        this.setState({navigate:true})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleTwitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        this.handleUserLoginResponse(result);
        this.setState({navigate:true})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/questions');
  }

  handleLogout() {
    /*firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });*/
    fetch("http://localhost:3003/api/logout", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        'Accept':'application/json'
      }),
      credentials: 'include', // Don't forget to specify this if you need cookies
    }).then(response => {
      console.log(response);
      this.props.history.push('/');
    })
    .catch(err => {
      console.log("The error is ", err)
    });
  }

  render() {
  
    const { navigate } = this.state
    if (navigate) {
      return <Redirect to={this.props.destination} push={true} />
    }
    return (
      <div id="login_popup" className="login_overlay">
        <div className="login_popup">
          <a className="close" href="/">&times;</a>
          <div className="content">
            <div className="login_type_selection">
              <p>
                <a className="login_type button-one focus" id="new_login" title="New Login">Nýskráning</a>
                <a className="login_type button-two"  id="login" title="Login">Innskráning</a>
              </p>
              <p>Skráðu þig í gegnum samfélagsmiðla</p>
              <p>Til þess að fá aðgang að tékklistanum þínum þá þarftu að vera innskráður</p>
            </div>
            <div id="login_options">
              <div className="user_login">
                <button className="social-button" id="facebook-connect" onClick={this.handleFacebookLogin}>
                  Skráðu þig inn með Facebook
                </button>
                <button className="social-button" id="google-connect" onClick={this.handleGoogleLogin}>
                  Skráðu þig inn með Google
                </button>
                <button className="social-button" id="twitter-connect" onClick={this.handleTwitterLogin}>
                  Skráðu þig inn með Twitter
                </button>
              </div>
            </div>
            <p className="choice" id="choice">EÐA</p>
            <a id="skip_login" onClick={() => this.setState({ navigate: true })}>
              <p className="choice_1" id="choice_1">Skráðu þig inn á eftir</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
