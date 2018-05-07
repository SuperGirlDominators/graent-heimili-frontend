import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import EducationPortrait from '../EducationPortrait';

import '../../css/AboutUs.css';
import '../../css/EducationPage.css';

import hreinsivokvi from '../../assets/images/hreinsivokvi.jpg';
import glerudi from '../../assets/images/glerudi.jpg';
import klosetthreinsir from '../../assets/images/klosetthreinsir.jpg';


import $ from 'jquery';
import Waypoint from 'react-waypoint';






 class DropDownNr02 extends Component {
    
      render() {
        return (
            <div>
            <div className="container linkStyle">
                <div className="row">
                    <EducationPortrait image={hreinsivokvi} name={"HREINSIVÖKVI"} text={'<p><strong>Uppskrift að hreinsivökva</strong> sem er stórkostlegur til að ná fitu af hvaða yfirborði sem er. Þessi svínvirkar í örbylgjuofninn sem hefur ekki verið þrifinn lengi!</p><p>2/3 hluti vatn<br /> 1/3 hluti edik<br /> 3 tsk matarsódi<br /> 4 tsk sápa<br /> 8-10 dropar ilmolía að eigin vali<br /> 1 spreybrúsi<br /></p><p> Blandið öllu saman í spreybrúsa og byrjið að þrífa!</p> <p><strong><a href="http://frettanetid.is/" target="_blank">frettanetid.is</a></strong></p>'} />                    
                    <EducationPortrait image={glerudi} name={"GLERÚÐI"} text={'<p>Í apótekum fæst spritt sem flestir nota til sótthreinsunar. En spritt hentar líka einkar vel til þrifa. <strong>Búðu til glerúða</strong> sem er örugglega sá besti sem þú hefur prófað.</p><p> 1 bolli spritt<br /> 1 bolli vatn<br /> 1 teskeið borðedik.<br /></p><p> Hristið saman og notið á gler, spegla og krómaða fleti. Virkar líka einkar vel á keramik flísar.</p> <p><strong><a href="http://hreint.is/" target="_blank">hreint.is</a></strong></p>'} />
                    <EducationPortrait image={klosetthreinsir} name={"KLÓSETTHREINSIR"} text={'<p>Hægt er, á auðveldan hátt, að <strong>búa til klósetthreinsi</strong> sem ekki aðeins hreinsar klósettskálina vel heldur ilmar einnig frábærlega.</p><p> Blanda skal saman:<br /> ½ bolla af matarsóda<br /> ½ bolla af ediki<br /> 6 dropum af lavender olíu</p><p> Hella í klósettskálina og skrúbba eins og vanalega.</p><p><strong> Ath.</strong> að ekki er hægt að geyma þessa blöndu heldur þarf að nota hana strax.</p><p><strong><a href="http://nlfi.is/" target="_blank">nlfi.is</a></strong></p>'} />
                </div>  	
            </div>
        </div>
        );
      }
    }

    export default DropDownNr02;