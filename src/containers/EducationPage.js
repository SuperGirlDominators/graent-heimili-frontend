import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import EducationPortrait from '../containers/EducationPortrait'
import homeBanner from '../assets/images/home-banner.jpeg';
//import whiteMask from '../assets/images/white_mask.png';
//import '../css/AboutUs.css';
import '../css/EducationPage.css';

import pappi from '../assets/images/pappi.jpg';
import plast from '../assets/images/plast.jpg';
import flöskur from '../assets/images/floskurOgDosir.jpg';

import molta from '../assets/images/molta.jpg';
import malmur from '../assets/images/malmur.jpg';
import kertavax from '../assets/images/kertavax.jpg';

import ljosaperur from '../assets/images/ljosaperur.jpg';
import rafhlodur from '../assets/images/rafhlodur.jpg';
import gler from '../assets/images/gler.jpg';

import DropDownNr01 from '../components/EducDropDownNr01.js';
import DropDownNr02 from '../components/EducDropDownNr02.js';
import DropDownNr03 from '../components/EducDropDownNr03.js';
import DropDownNr04 from '../components/EducDropDownNr04.js';
import DropDownNr05 from '../components/EducDropDownNr05.js';

import $ from 'jquery';
import Waypoint from 'react-waypoint';
import { ENETRESET } from 'constants';




export default class Education extends Component {
    constructor(props) {
        super(props);
        this.page = undefined;
      }
 
   
      
    componentDidMount() {
        window.addEventListener("scroll", this._handleWaypointEnter);
        document.body.id= "abouteducation";
    }
    _handleWaypointEnter() {
        console.log("scrolling")
        $('.dropdown2').animate({'opacity':'1'},500);
        $('.education').animate({'opacity':'0'},500);
        $('.education2').animate({'opacity':'1'},500);
        $('.scroll-downs').animate({'opacity':'0'},500);
        $('.educationSubtext').animate({'opacity':'0'},500);
        $('.luminance-target-education').animate({'opacity':'0'},500);
    }

    selectPage = ( pageNumber ) => {
        this.page = pageNumber;

        const TabText = document.querySelector('#tab' + pageNumber).textContent;
        document.querySelector('.dropbtn').textContent = TabText;
    }

    activePage = () => {
        switch( this.page ) {
            case 1:
                return <DropDownNr01 />;
            case 2:
                return <DropDownNr02 />;
            case 3:
                return <DropDownNr03 />;
            case 4:
                return <DropDownNr04 />;
            case 5:
                return <DropDownNr05 />;
            default:
                '';
        }
    }

   

    render() {
        return (
            <div id="abouteducation">
            <div className="container">
              <div className="row">
                  <div className="luminance-mask">
                      <img className="target luminance-target-education" src={homeBanner} alt="Masked Banner"/>
                  </div>
              </div>
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="education">Fræðsluefni<br /> og fróðleikur</div>
                            <div className="educationSubtext">Hér fyrir neðan finnur þú allskonar fræðsluefni um flokkun<br /> og hvað verður um hana, uppskriftir af hreinsiefnum og<br /> snyrtivörum, hvar þú getur nálgast umhverfisvænar vörur og<br /> margt fleira sem mun hjálpa</div>
                            <div className="education2">Veldu fræðsluefni</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 dropdown2">
                            <button className="dropbtn">Ekkert valið</button>
                        <div className="dropdown2-content">
                            <a onClick={() => this.selectPage(1)} id="tab1" href="#">Hvað verður um efnið sem þú flokkar?</a>
                            <a onClick={() => this.selectPage(2)} id="tab2" href="#">Uppskriftir að hreinsiefnum</a>
                            <a onClick={() => this.selectPage(3)} id="tab3" href="#">Uppskriftir að snyrtivörum</a>
                            <a onClick={() => this.selectPage(4)} id="tab4" href="#">Hvar þú getur keypt sniðugar umhverfisvænar vörur</a>
                            <a onClick={() => this.selectPage(5)} id="tab5" href="#">Mikilvægar og góðar upplýsingar</a>
                        </div>
                        </div>
                    </div>    
                    <div className="educPageStyle">
                        {this.activePage()}
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


