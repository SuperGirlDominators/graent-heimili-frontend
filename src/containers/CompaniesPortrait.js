import React, { Component } from 'react';

export default class CompaniesPortrait extends Component {

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
        const { image, name, fullName, text} = this.props;
        const dropDownClass = this.state.dropDownOpen ? "dropdown active" : "dropdown";
        const dropArrowClass = this.state.dropDownOpen ? "fa fa-caret-down" : "fa fa-caret-up";

        return (
            <div className="col-md-3 col-xs-8" style={{ paddingRight: 0, paddingLeft: 15 }}>
                <div className="gluggi" style={{ background: 'white'}}>
                    <img className="AboutImage" src={image} alt={name}/>
                    <div className={dropDownClass}>
                        <div  className="kassi">
                            <div onClick={this.toggleDropDown} style={{ boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.2)", height: 45, paddingTop: 6}}>{name}<i className={dropArrowClass}></i></div>
                            <div className="dropdown-content" style={{ position: 'initial', background: 'none'}}>
                                <span className="fullname">{fullName}</span>
                                <p className="about-text">{text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
