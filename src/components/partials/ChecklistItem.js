import React, { Component } from 'react';
import $ from 'jquery';


class ChecklistItem extends Component {
  constructor(props) {
    super(props);

    this.onItemClick = this.onItemClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
 
    $(document).ready(function() {   
      $(".checklist_tip").mouseover(function() {
        $(this).find(".fa-question").css("color", "#fff");
        $(this).css('background-color', '#249084');
      }); 

      $(".checklist_tip").mouseleave(function() {
        $(this).find(".fa-question").css("color", "#249084");
        $(this).css('background-color', '#fff');
      });
    });
  }

  onItemClick() {
    this.props.count();
    this.props.onToggle(this.props.checklist.checklistID);
  }

  handleClick() {
    const { checklist } = this.props;
    $('.photoChecklist').toggleClass('active');
    $("#backside").html (`${checklist.checklistTip}`)
  }

  render() {
    const { checklist } = this.props;
    return (
      <div className='label_wrap'>
        <label className='my-checklist' id="checkbox">
            <input type='checkbox' id="checklist_box" onClick={this.onItemClick} type='checkbox' checked={checklist.value } />
            <span>{checklist.checklistItem}</span>
            <button onClick={this.handleClick}  className="checklist_tip c_tip q1" >
              <i className="fas fa-question"></i>
              <div className="tooltip">Smelltu á mig til að fá nánari útskýringar</div>
            </button>
        </label>
      </div>
    );
  }
}

export default ChecklistItem;
