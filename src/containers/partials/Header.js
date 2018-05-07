import React, { Component } from 'react';
import '../../css/Headers.css';
import { NavLink } from 'react-router-dom';
import logoGreen from '../../assets/images/Logo_graent.png';
import logoWhite from '../../assets/images/LOGO_2.png';
import firebase from 'firebase';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
      open: '',
      scrolled: false
    };
    this.onStatusClick = this.onStatusClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  onStatusClick() {
    var toggle = this.state.active === 'active' ? '' : 'active';
    var toggle2 = this.state.open === 'open' ? '' : 'open';
    this.setState({active: toggle, open: toggle2 });
    this.props.toggleMenu();
  }

  handleScroll() {
    if (window.pageYOffset === 0) {
      this.setState({ ...this.state, scrolled: false });
    } else {
      this.setState({ ...this.state, scrolled: true });
    }
  }

  handleLogout() {
    const context = this;
    /* firebase.auth().signOut().then(function() {
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
      context.props.history.push('/');
    })
    .catch(err => {
      console.log("The error is ", err)
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const scrolled = this.state.scrolled ? 'shrink' : '';
    const logo = this.state.scrolled ? logoGreen : logoWhite;
    return (
      <div>
        <header className={scrolled}>
          <div className="container">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-left">
                <div className="logo ">
                  <a href="/">
                    <img src={logo} alt="logo"></img>
                  </a>
                </div>
              </div>

              <ul className="nav navbar-right">
                <div className="burger_menu">
                  <div className={`button_container ${this.state.active}`} id="toggle" onClick={this.onStatusClick}>
                    <span className="top"></span>
                    <span className="middle"></span>
                    <span className="bottom"></span>
                  </div>

                  <div className={`overlay ${this.state.open}`} id="overlay">
                    <nav className="overlay-menu">
                      <ul>
                        <li>
                          <span className = "underline--style">
                            <NavLink to="/about-game">Um listann</NavLink>
                          </span>
                        </li>
                        <li>
                          <span className = "underline--style">
                            <NavLink to="/about-us">Um okkur</NavLink>
                          </span>
                        </li>
                        <li>
                          <span className = "underline--style"><NavLink to="/education">Fræðsluefni</NavLink>
                          </span>
                        </li>
                        <li>
                          <span className = "underline--style">
                            <NavLink to="/companies">Styrktaraðilar</NavLink>
                          </span>
                        </li>
                        <li id="login">
                          <span className = "underline--style">
                            <NavLink to="/#login_popup">Innskráning</NavLink>
                          </span>
                        </li>
                        <li id="logout">
                          <span className = "underline--style"><a onClick={this.handleLogout}>Útskráning</a></span>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
          </div>
        </header>
      </div>
    );
  }
}



export default Header;
