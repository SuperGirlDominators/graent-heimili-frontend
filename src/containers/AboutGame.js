import React, { Component } from 'react';
import '../css/AboutGame.css';
import Login from '../components/partials/Login';
import homeBanner from '../assets/images/home-banner.jpeg';
import StepOneImage from '../assets/images/stepOne.png';
import StepTwoImage from '../assets/images/stepTwo.png';
import StepThreeImage from '../assets/images/stepThree.png';

class AboutGame extends Component {
  componentWillMount(){
    document.body.id= "aboutgame";
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
              <div className="luminance-mask">
                  <img className="target luminance-target" src={homeBanner} alt="Masked Banner"/>
              </div>
          </div>
        </div>


        <div className="container centerVertical">

          <div className="row">
            <div className="col-md-12">
              <h1 className="headline">
                Um listann
              </h1>
              <h2 className="subHeadline">
                  Við hjálpum þér að gera heimilið þitt umhverfisvænt<br/> í þremur skemmtilegum skrefum!
              </h2>
            </div>
          </div>
          <div className="row steps">
              <div className="col-xs-3 col-md-3">
                  <div id="pointerLightGreen">
                      <p className="steps_Headline">Skref 1</p>
                  </div>
              </div>
              <div className="col-xs-6 col-md-6">
                  <div id="pointerDarkGreen"></div>
                  <p className="steps_subtext">Þú svarar nokkrum auðveldum<br/>spurningum um heimilið</p>
              </div>
              <div className="col-xs-3 col-md-3">
                  <div id="pointerWhite">
                      <img className="imageOne" src={StepOneImage} alt="icon"/>
                  </div>
              </div>
          </div>
          <div className="row steps">
              <div className="col-xs-3 col-md-3">
                  <div id="pointerLightGreen">
                      <p className="steps_Headline">Skref 2</p>
                  </div>
              </div>
              <div className="col-xs-6 col-md-6">
                  <div id="pointerDarkGreen"></div>
                  <p className="steps_subtext">Við útbúum flottan tékklista<br/>fyrir þig út frá svörunum þínum</p>
              </div>
              <div className="col-xs-3 col-md-3">
                  <div id="pointerWhite">
                      <img className="imageTwo" src={StepTwoImage} alt="icon"/>
                  </div>
              </div>
          </div>
          <div className="row steps">
              <div className="col-xs-3 col-md-3">
                  <div id="pointerLightGreen">
                      <p className="steps_Headline">Skref 3</p>
                  </div>
              </div>
              <div className="col-xs-6 col-md-6">
                  <div id="pointerDarkGreen"></div>
                  <p className="steps_subtext">Þú fylgir listanum sem hjálpar þér að gera heimilið umhverfisvænna!</p>
              </div>
              <div className="col-xs-3 col-md-3">
                  <div id="pointerWhite">
                      <img className="imageThree" src={StepThreeImage} alt="icon"/>
                  </div>
              </div>
          </div>
          <div className="row start-button">
              <div className="col-7 col-md-6">
                  <div>
                       <a className="next_button btn-lg" href="#login_popup">Byrjaðu núna</a>
                  </div>
                  <Login destination="/questions" />
              </div>
          </div>
        </div>

      </div>
    );
  }
}



export default AboutGame;
