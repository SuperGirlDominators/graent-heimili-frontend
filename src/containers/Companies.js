import React, { Component } from 'react';
import CompaniesPortrait from './CompaniesPortrait';
import sorpa from '../assets/images/sorpa_logo.jpg';
import umhverfisstofnun from '../assets/images/umhverfisstofnun.jpg';
import endurvinnslan from '../assets/images/endurvinnslan.jpg';
import reykjavik from '../assets/images/reykjavik.jpg';
import '../css/AboutUs.css';

export default class Companies extends Component {
  render() {
    return (
        <div id="aboutpage">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="umOkkur">Samstarfsaðilar</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <CompaniesPortrait image={sorpa} name={"Sorpa"} fullName={"Sorpa"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum elit turpis, vitae maximus ex fringilla et. Aliquam erat volutpat. Donec ut elit sed elit efficitur cursus. Sed euismod, elit nec rutrum scelerisque, ligula sapien tincidunt nisi, et dictum tellus nisl et velit. Proin dictum eros lobortis odio vulputate, non condimentum urna ultrices."}/>                    
                    <CompaniesPortrait image={umhverfisstofnun} name={"Umhverfisstofnun"} fullName={"Umhverfisstofnun"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum elit turpis, vitae maximus ex fringilla et. Aliquam erat volutpat. Donec ut elit sed elit efficitur cursus. Sed euismod, elit nec rutrum scelerisque, ligula sapien tincidunt nisi, et dictum tellus nisl et velit. Proin dictum eros lobortis odio vulputate, non condimentum urna ultrices."}/>
                    <CompaniesPortrait image={endurvinnslan} name={"Endurvinnslan"} fullName={"Endurvinnslan"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum elit turpis, vitae maximus ex fringilla et. Aliquam erat volutpat. Donec ut elit sed elit efficitur cursus. Sed euismod, elit nec rutrum scelerisque, ligula sapien tincidunt nisi, et dictum tellus nisl et velit. Proin dictum eros lobortis odio vulputate, non condimentum urna ultrices."}/>
                    <CompaniesPortrait image={reykjavik} name={"Reykjavík"} fullName={"Reykjavík"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum elit turpis, vitae maximus ex fringilla et. Aliquam erat volutpat. Donec ut elit sed elit efficitur cursus. Sed euismod, elit nec rutrum scelerisque, ligula sapien tincidunt nisi, et dictum tellus nisl et velit. Proin dictum eros lobortis odio vulputate, non condimentum urna ultrices."}/>
                </div>  	
            </div>
        </div>
    );
  }
}
