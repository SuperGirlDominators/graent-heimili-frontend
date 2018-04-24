import React, { Component } from 'react';
import '../css/StepAchievement.css';
import BannerImage from '.././assets/images/confetti_image.png';
import SuccessChar from '.././assets/images/success_chr.png';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'



class StepAchievement extends Component {
  constructor(props) {
    super(props);
  
    this.getNextStep = this.getNextStep.bind(this);
   
  }

  getNextStep() {
    this.props.history.push('/checklist');
  }

  render() {
    const styles = {
      backgroundImage: 'url('+BannerImage+')',
      backgroundSize: 'contain'
    };
    const basicClasses = ['bar stepone ','bar steptwo ','bar stepthree ','bar stepfour ','bar stepfive '];
    const classes = basicClasses.map((className, i) => {
      if(i===this.props.current_step-1){
        className=className + " finished";
      }
      if(i<this.props.current_step){
        className = className + " complete_step_" + ["one","two","three","four","five"][i];
      }
      console.log(i, className, this.props.current_step);
      return className;
    });
    console.log(classes);
    return (
      <div id="banner_popup" className="banner_overlay">
        <div className="banner_popup" style={styles} >
          <a className="close" href="/checklist#login_popup">&times;</a>

          <h3>Þú kláraðir SKREF {this.props.current_step} af 5 </h3>

          <h1>Vá hvað þú ert frábær!</h1>
          <div id="wrapper">
          
            <div className={classes[4]}>
              <span class="bar_number five">5</span>
            </div>
           
           
            <div className={classes[3]}>
              <span class="bar_number four">4</span>
            </div>
           
            
            <div className={classes[2]}>
              <span class="bar_number three">3</span>
            </div>
           
            
            <div className={classes[1]}>
              <span class="bar_number two">2</span>
            </div>
            
            <div className={classes[0]}>
              <span class="bar_number one">1</span>
            </div>
    
            <div class="hl"></div>
          </div>
          <div class="btn_selection">
            <button class="share btn-lg"><i className="fas fa-share-alt"></i>Deila áfram</button>
            <button class="challenge btn-lg"><i className="fas fa-user-plus"></i>Skora á aðra</button>
            <button class="next_step btn-lg" onClick={this.getNextStep}>Næsta Skref</button>
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

