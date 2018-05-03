import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class EducationPortraitInfo extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            dropDownOpen: false
       }

       this.toggleDropDown = this.toggleDropDown.bind(this);
    }

    toggleDropDown() {
        this.setState({dropDownOpen: !this.state.dropDownOpen})
    }

    render() {
        const { image, name, text, link } = this.props;
        const dropDownClass = this.state.dropDownOpen ? "dropdown active" : "dropdown";
        const dropArrowClass = this.state.dropDownOpen ? "fa fa-caret-down" : "fa fa-caret-up";

        return (
            <div className="col-md-9" style={{ paddingRight: 0, paddingBottom: 15 }}>
                <div className="gluggi" style={{ background: 'white'}}>
                    <img className="AboutImage" src={image} alt={name}/>
                    <div className={dropDownClass}>
                        <div  className="kassi">
                            <div onClick={this.toggleDropDown} style={{ boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.2)", height: 45, paddingTop: 6}}>{name}<i className={dropArrowClass}></i></div>
                            <div className="dropdown-content" style={{ position: 'initial', background: 'none'}}>
                                <p className="about-text">{text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
