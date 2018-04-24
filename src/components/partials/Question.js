import React, { Component } from 'react';

class Question extends Component {

  render() {
    const { totalQuestions, question } = this.props;
    let { currentQuestion } = this.props;
    currentQuestion = currentQuestion + 1;
    return (
      <div className="col-md-4">
          <p>
              SPURNING {currentQuestion}/{totalQuestions}
          </p>
          <h1>
              {question && question.question}{/*&&=  if statement equivalent*/}
          </h1>
          <div className="educaationalInfo">
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
