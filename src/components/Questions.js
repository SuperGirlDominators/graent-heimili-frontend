import React, { Component } from 'react';
import '../css/Question.css';
import '../css/Home.css';
import Login from './partials/Login';
import Question from './partials/Question';
import Choice from './partials/Choice';
import $ from 'jquery';
import * as actions from '../actions/actions';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Questions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      login:false
    };
    this.getNextQuestion = this.getNextQuestion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postChecklist = this.postChecklist.bind(this);
  }

  componentDidMount(){
    this.props.actions.getQuestions();
    this.props.actions.getChoices();
    this.props.actions.getChecklist();
  }

  componentWillMount(){
    document.body.id= "quiz_page";
    $(document).ready(function(){
      $('.view_more').click(function(){
        $('.label_wrap').css("transform","translate(0,-480px)");
        $('.view_up').css("display","block");
        $(this).hide();
        console.log('i updated')
      });

      $('.view_up').click(function(){
        $('.label_wrap').css("transform","translate(0,0)");
        $('.view_more').css("display","block");
        $(this).hide();
      });
    });
  }

  getNextQuestion() {
    const currQuest = { currentQuestion: this.state.currentQuestion + 1 };

    if(currQuest.currentQuestion === this.props.questions.length) {
      this.handleSubmit();
    } 
    else {
      this.setState(currQuest);
    }
  }

  handleSubmit() {
    if(firebase.auth().currentUser) {
      // console.log(firebase.auth().currentUser)
      this.setState({login:true}); 
    }
    this.props.actions.postChoices(this.props.choices);
    const choicesValue = this.props.choices;
    const unSelectedChoices = choicesValue.filter((choice)=> {
      if(choice.value) {
        return false;
      } else {
        return true;
      }
    });
    this.postChecklist(unSelectedChoices);
  }

  postChecklist(unSelectedChoices) {
    const data = {};
    data.unSelectedChoices = unSelectedChoices;
    // console.log(this.props.profileData.user.uid)
    data.userID = this.props.profileData.user ? this.props.profileData.user.uid : null;
    const url = "http://localhost:8080/api/userchoices";
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Accept','application/json');
    fetch(url, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(data),
    })
    .then(response =>
      response.json()
    )
    .then(response => {
      // this.props.history.push('/loader')
    })
    .then(response => {
      if (this.props.profileData.user) {
        this.props.history.push('/loader')
    } else {
        return false;
    }
      // this.props.profileData.user ? this.props.history.push('/loader') : false;

      // this.props.profileData.user ? this.props.history.push('/checklist') : false;
    })
    .catch( err => {
      console.log("The error is ", err);
      // receiveChecklist([]);
    });
  }

  onClick(e) {
  let  clickedItems= [];
    // e.target.value;
    let clickedItem = e.target.value;
    // console.log(e.target.value);
    clickedItems.push(clickedItem);
  }

  

  render() {
    const { questions } = this.props;
    console.log(questions)
    let { choices } = this.props;
    choices = choices.filter(choice => choice.questionID === this.state.currentQuestion+1);
    const isAChoiceSelected = choices.some(choice => choice.value);
    console.log(this.state.currentQuestion);

   const bannerImages = [
      {
        type: "Image_one",
        image: require("../assets/images/bottles.jpg")
      },
      {
        type: "Image_two",
        image: require("../assets/images/cleaning.jpg")
      },
      {
        type: "Image_three",
        image: require("../assets/images/hygiene.jpg")
      },
      {
        type: "Image_four",
        image: require("../assets/images/environment.jpg")
      },
    ];

    return (
      <div>
        <div className="row start-button">
          <Login destination="/loader"/>
        </div>
        <div className="container">
          <div className="row">
          <div className="luminance-mask">
               <img className="target luminance-target" src={bannerImages[this.state.currentQuestion].image} alt="banner mask"></img>
             </div>
          </div>
        </div>
        <div className="container choice_content">
          <div className="row">
            <Question
              currentQuestion={this.state.currentQuestion}
              totalQuestions={questions.length}
              question={questions[this.state.currentQuestion]}
            />
            <button className="view_up"><i className="up"></i></button>
            <div className="col-md-8 choice_selection">
              {
                choices.map((choice, i) =>
                  <Choice key={i} choice={choice} onToggle={this.props.actions.toggleChoice}/>
                )
              }
            </div>
            <button className="view_more"><i className="down"></i></button>

              <div className="mb_quiz_tip">
            <Question
              question={questions[this.state.currentQuestion]}
            />
          </div>
          </div>

        

        </div>
          { isAChoiceSelected &&
            <a className="play-button-outer" href={(this.state.currentQuestion === this.props.questions.length-1 ) && (!this.state.login) ? "#login_popup": "# " } style={{ display: "block" }} id="next_question" onClick={this.getNextQuestion}>
              <div className="play-button">
                <p className="button_text">áfram</p>
              </div>
            </a>
          }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions.questions,
    choices: state.choices.choices,
    checklist: state.checklist.checklist,
    profileData: state.user.profileData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
