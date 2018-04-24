import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../css/Question.css';
import '../css/Home.css';
import Login from './partials/Login';
import whiteMask from '../assets/images/white_mask.png';
import Question from './partials/Question';
import Checklist from './Checklist';
import Choice from './partials/Choice';
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
    document.body.id= "homepage";
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
    const url = "https://api.heroku.com/apps/graent-heimili-backend/userchoices";
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
      this.props.profileData.user ? this.props.history.push('/checklist') : false;
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
    let { choices } = this.props;
    choices = choices.filter(choice => choice.questionID === this.state.currentQuestion+1);
    // console.log(choices.some(choice => choice.value));
    const isAChoiceSelected = choices.some(choice => choice.value);
    return (
      <div>
        <div className="row start-button">
          <Login destination="/checklist"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="white_curved_mask">
              <img className="target white_curved_mask" src={whiteMask} alt="Masked banner"/>
            </div>
          </div>
        </div>
        <div className="container centerVerticalQuestions">
          <div className="row">
            <Question
              currentQuestion={this.state.currentQuestion}
              totalQuestions={questions.length}
              question={questions[this.state.currentQuestion]}
            />

            <div className="col-md-8 positionToRight">
              {
                choices.map((choice, i) =>
                  <Choice key={i} choice={choice} onToggle={this.props.actions.toggleChoice}/>
                )
              }
            </div>
          </div>
        </div>
          { isAChoiceSelected &&
            <a className="play-button-outer" href={(this.state.currentQuestion === this.props.questions.length-1 ) && (!this.state.login) ? "#login_popup": "#" } style={{ display: "block" }} id="next_question" onClick={this.getNextQuestion}>
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
