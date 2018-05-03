import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import EducationPortrait from '../containers/EducationPortrait'

import homeBanner from '../assets/images/home-banner.jpeg';
import whiteMask from '../assets/images/white_mask.png';
import '../css/AboutUs.css';
import '../css/EducationPage.css';

import mena from '../assets/images/mena.jpg';
import mistur from '../assets/images/mistur.jpg';
import graenviska from '../assets/images/graenviska.jpg';

import mammaveitbest from '../assets/images/mammaveitbest.jpg';
import matarbur from '../assets/images/matarbur.jpg';
import heilsuhusid from '../assets/images/heilsuhusid.jpg';

import tehusid from '../assets/images/tehusid.jpg';
import lauga from '../assets/images/lauga.jpg';
import baendur from '../assets/images/baendur.jpg';

import kolaportid from '../assets/images/kolaportid.jpg';
import klaran from '../assets/images/klaran.jpg';
import sostrene from '../assets/images/sostrene.jpg';

import org from '../assets/images/org.jpg';
import hagkaup from '../assets/images/hagkaup.jpg';
import bonus from '../assets/images/bonus.jpg';

import kronan from '../assets/images/kronan.jpg';
import gamur from '../assets/images/gamur.jpg';

import $ from 'jquery';
import Waypoint from 'react-waypoint';






 class DropDownNr04 extends Component {
    
      render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <EducationPortrait image={mena} name={"MENA"} text={"<p><strong>Mena</strong> býður upp á snyrtivörur og hreingerningarvörur ásamt ýmsu fyrir eldhúsið.</p>"} />                    
                    <EducationPortrait image={mistur} name={"MISTUR"} text={"​<p><strong>Mistur</strong> býður upp á fjölnotavörur fyrir fólk á ferðinni, í eldhúsið og baðherbergið, ásamt snyrtivörum.</p>"} />
                    <EducationPortrait image={graenviska} name={"GRÆN VISKA"} text={"<p><strong>Græn viska</strong> býður upp á vörur fyrir heimilið ásamt snyrtivörum.</p>"} />
                </div>  	
            </div>

            <div className="container">
                <div className="row">
                    <EducationPortrait image={mammaveitbest} name={"MAMMA VEIT BEST"} text={"<p><strong>Mamma veit best</strong> er heilsubúð með alls konar lífrænar vörur, fæðubótarefni og snyrtivörur.</p>"} />                    
                    <EducationPortrait image={matarbur} name={"MATARBÚR KAJU"} text={"​<p>Hægt er að versla áfyllanlegar vörur í <strong>Matarbúri Kaju</strong> sem er staðsett á Akranesi.</p>"} />
                    <EducationPortrait image={heilsuhusid} name={"HEILSUHÚSIÐ"} text={"<p>Það er margt hægt að finna hjá <strong>Heilsuhúsinu</strong> og eru þau með góða vefverslun.</p>"} />
                </div>  	
            </div>

            <div className="container">    
                <div className="row"> 
                    <EducationPortrait image={tehusid} name={"KRYDD & TEHÚSIÐ"} text={"<p>Hjá <strong>Krydd og tehúsinu</strong> er hægt að kaupa áfyllingar af tei og kryddi.</p>"} />                    
                    <EducationPortrait image={lauga} name={"FRÚ LAUGA"} text={"​<p><strong>Frú Lauga</strong> býður upp á ýmislegt sem hægt er að fylla á, eins og t.d. olíur.</p>"} />
                    <EducationPortrait image={baendur} name={"BÆNDUR Í BÆNUM"} text={"<p><strong>Lífrænn bændamarkaður</strong>. Hægt er að kaupa umbúðalausar gúrkur og sömuleiðis er betra fyrir umhverfið að versla frá sínu nánasta umhverfi.</p>"} />
                </div>  	
            </div>  

            <div className="container">    
                <div className="row"> 
                    <EducationPortrait image={kolaportid} name={"KOLAPORTIÐ"} text={"<p>Í<strong> Kolaportinu</strong> er hægt er að kaupa kartöflur í lausu hjá þeim. Þar er einnig hægt að kaupa notuð föt og aðrar nytjavörur</p>"} />                    
                    <EducationPortrait image={klaran} name={"KLARAN"} text={"​<p>Verslunin <strong>Klaran</strong> býður upp á ýmsar umhverfisvænar vörur.</p>"} />
                    <EducationPortrait image={sostrene} name={"SOSTRENE GRENE"} text={"<p>Verslunin<strong> Sostrene Grene</strong> býður upp á te í umbúðalausu.</p>"} />
                </div>  	
            </div>  

            <div className="container">
                <div className="row">
                    <EducationPortrait image={org} name={"ORG Í KRINGLUNNI"} text={"<p>Verslunin <strong>ORG</strong> er með bæði föt og vörur úr umhverfisvænum efnum.</p>"} />                    
                    <EducationPortrait image={hagkaup} name={"HAGKAUP"} text={"​<p>Sonett hreinsivörurnar fást í <strong>Hagkaup</strong> eru vegan og brotna 100% niður í náttúrunni.</p>"} />
                    <EducationPortrait image={bonus} name={"BÓNUS"} text={"<p>Ecover hreinsivörur, Natracare dömubindi, Gunry umhverfisvænar handsápur og uppþvottalög. <strong>Bónus</strong> selur einnig fjölnota poka og pappírspoka undir vörurnar þínar.</p>"} />   
                </div>  	
            </div>          
        
            <div className="container linkStyle">
                <div className="row">
                    <EducationPortrait image={kronan} name={"KRÓNAN"} text={"<p><strong>Í verslunum Krónunnar</strong> er boðið upp á þroskað grænmeti, ávexti, útlitsgallaðar vörur og vörur á síðasta söludegi á lækkuðu verði í stað þess að vörum sé fargað.</p>"} />                    
                    <EducationPortrait image={gamur} name={"GAMUR"} text={'<p>Þú getur keypt þér <a href="https://www.gamur.is/vorur-og-%C3%BEjonusta/matussi-moltutunna-310l/" target="_blank">moltutunnu</a> hjá Íslenska Gámafélaginu </p>'} />   
                </div>  	
            </div> 

        </div>
        );
      }
    }

    export default DropDownNr04;