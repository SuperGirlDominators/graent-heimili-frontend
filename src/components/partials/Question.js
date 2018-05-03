import React, { Component } from 'react';

class Question extends Component {

  render() {
    const { totalQuestions, question } = this.props;
    let { currentQuestion } = this.props;
    currentQuestion = currentQuestion + 1;
    return (
      <div className="col-md-4">
          <p className="question_step">
              Spurning {currentQuestion} af {totalQuestions}
          </p>
          <div className="quiz_progress">
                    <div className={"hl questionone " + (currentQuestion >= 1 ? 'complete ' : 'not_complete')}></div>
                    <div className={"hl questiontwo " + (currentQuestion >= 2 ? 'complete' : 'not_complete')}></div>
                    <div className={"hl questionthree " + (currentQuestion >= 3 ? 'complete' : 'not_complete')}></div>
                    <div className={"hl questionfour " + (currentQuestion >= 4 ? 'complete' : 'not_complete')}></div>
                </div>
          <h1 className="question_name">
              {question && question.question}{/*&&=  if statement equivalent*/}
          </h1>
          <div className="quiz_tip">
              <h2>
                   Vissir þú...
              </h2>
              <h3>
                {question && question.questionTip}
              </h3>
          </div>
      </div>
    );
  }
}

export default Question;
