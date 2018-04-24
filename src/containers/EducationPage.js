import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import AboutPortrait from './AboutPortrait';
import homeBanner from '../assets/images/home-banner.jpeg';
import whiteMask from '../assets/images/white_mask.png';
import '../css/AboutUs.css';
import '../css/EducationPage.css';
import $ from 'jquery';
import Waypoint from 'react-waypoint';
export default class Education extends Component {
    
componentDidMount() {
    window.addEventListener("scroll", this._handleWaypointEnter);   
}
 _handleWaypointEnter() {
     console.log("scrolling")
     $('.dropdown2').animate({'opacity':'1'},500);
 }
  render() {
    return (
        <div id="aboutpage">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="education">Fræðsluefni<br /> og fróðleikur</div>
                    <div className="educationSubtext">Hér fyrir neðan finnur þú allskonar fræðsluefni um flokkun<br /> og hvað verður um hana, uppskriftir af hreinsiefnum og<br /> snyrtivörum, hvar þú getur nálgast umhverfisvænar vörur og<br /> margt fleira sem mun hjálpa</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 dropdown2">
                    <button className="dropbtn">Ekkert valið</button>
                <div className="dropdown2-content">
                    <a href="#">Hvað verður um efnið sem þú flokkar?</a>
                    <a href="CleaningRecipes.js">Uppskriftir að hreinsiefnum</a>
                    <a href="#">Uppskriftir að snyrtivörum</a>
                    <a href="#">Hvar þú getur keypt sniðugar umhverfisvænar vörur</a>
                    <a href="#">Mikilvægar og góðar upplýsingar</a>
                </div>
                </div>
            </div>
        <div className="scroll-downs">
            <div className="mousey">
                <div className="scroller"></div>
            </div>
        </div>
        </div>
    </div>
    );
  }
}
