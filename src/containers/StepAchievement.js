import React, { Component } from 'react';
import '../css/StepAchievement.css';
import BannerImage from '.././assets/images/confetti_image.png';
import $ from 'jquery';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'



class StepAchievement extends Component {
  constructor(props) {
    super(props);
  
    this.getNextStep = this.getNextStep.bind(this);
  }

  componentWillMount(){
    document.body.id= "achievement";
  }

  componentDidMount() {
    $(document).ready(function($) {
      var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 992) {
          $('.bar').removeClass('finished');
          $(".step_champion").addClass("champ");
        } else if (ww >= 992) {
          $('.bar').addClass('');
        };
      };
      $(window).resize(function(){
        alterClass();
      });
      //Fire it when the page first loads:
      alterClass();
    });
  }
 
  getNextStep() {
    this.props.history.push('/checklist');
  }

  render() {
    const styles = {
      backgroundImage: 'url('+BannerImage+')',
      backgroundSize: 'contain'
    };
    const basicClasses = ['bar stepone step_champion ','bar steptwo ','bar stepthree ','bar stepfour ','bar stepfive '];
    const classes = basicClasses.map((className, i) => {
      if(i===this.props.current_step-1){
        className=className + " finished";
      }
      if(i<this.props.current_step){
        className = className + " complete_step_" + ["one","two","three","four","five"][i];
      }
      return className;
    });

    if(this.props.current_step === 5){
      $('.next_step').hide();
    }
    return (
      <div id="banner_popup" className="banner_overlay">
        <div className="banner_popup col-lg-12 col-md-12 col-sm-12" style={styles} >
          <a className="close" href="/checklist#login_popup">&times;</a>

          <h3>Þú kláraðir SKREF {this.props.current_step} af 5 </h3>

          <h1>Vá hvað þú ert frábær!</h1>
          <div id="wrapper" className="col-sm-12">
          
            <div className={classes[4]}>
              <span className="bar_number five"></span>
            </div>
           
           
            <div className={classes[3]}>
              <span className="bar_number four"></span>
            </div>
           
            
            <div className={classes[2]}>
              <span className="bar_number three"></span>
            </div>
           
            
            <div className={classes[1]}>
              <span className="bar_number two"></span>
            </div>
            
            <div className={classes[0]}>
              <span className="bar_number one"></span>
            </div>
    
            <div className="hl"></div>
          </div>
          <div className="btn_selection">
            <div className="mb_selection">
              <button className="share btn-lg"><i className="fas fa-share-alt"></i>Deila áfram</button>
              <button className="challenge btn-lg"><i className="fas fa-user-plus"></i>Skora á aðra</button>
            </div>
            
            <button className="next_step btn-lg" onClick={this.getNextStep}>Næsta Skref</button>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    checklist_steps: state.checklist_steps.checklist_steps,
    userchecklist: state.userchecklist.userchecklist,
    current_step: state.current_step.current_step
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
    setCurrentStep: step =>  dispatch(actions.CurrentStep(step) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepAchievement);

