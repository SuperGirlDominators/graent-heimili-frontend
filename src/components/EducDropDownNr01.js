import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import EducationPortrait from '../containers/EducationPortrait';

import homeBanner from '../assets/images/home-banner.jpeg';
import whiteMask from '../assets/images/white_mask.png';
import '../css/AboutUs.css';
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

import $ from 'jquery';
import Waypoint from 'react-waypoint';




 class DropDownNr01 extends Component {
    
      render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <EducationPortrait image={pappi} name={"PAPPI"} text={"<p>Efnið er flokkað vélrænt í móttöku- og flokkunarstöð <strong>SORPU</strong> í Gufunesi til að aðskilja bylgjupappa frá sléttum pappa og pappír. Efnið er pressað og baggað og síðan flutt til Svíþjóðar til frekari flokkunar og endurvinnslu.</p><p>Úr endurunnum <strong>pappír og pappa</strong> er t.d. framleiddur salernispappír, eldhúspappír, dagblaðapappír og karton sem notað er til að búa til nýjar umbúðir. Úr endurunnum bylgjupappa er framleiddur nýr bylgjupappi.</p>"}/>                     
                    <EducationPortrait image={plast} name={"PLAST"} text={"<p>Efnið er pressað og baggað í móttöku- og flokkunarstöð <strong>SORPU</strong> og síðan flutt til Svíþjóðar til frekari flokkunar og endurvinnslu​​ eða orkuvinnslu.</p> "} />
                    <EducationPortrait image={flöskur} name={"FLÖSKUR OG DÓSIR"} text={"<p>Endurvinnslan hf. tekur við <strong>skilagjaldsskyldum umbúðum</strong> sem berast til <strong>SORPU</strong> og baggar áldósir og plastumbúðir í pressum. Umbúðirnar eru svo fluttar erlendis til endurvinnslu.</p><p>Framleiðsla úr endurunnum <strong>áldósum</strong> eru t.d. nýjar áldósir og úr gömlu plastflöskunum er framleidd polyester ull – efni sem nýtist í fataiðnaði, teppaframleiðslu o.fl. Flísföt eru þekktasta afurðin.</p><p> <strong>Glerflöskur</strong> eru muldar og nýtast sem undirstöðuefni í landmótun á urðunarstað <strong>SORPU</strong> í Álfsnesi.</p>"} />
                </div>
            </div>
            <div className="container linkStyle">
                <div className="row">
                    <EducationPortrait image={molta} name={"MOLTA"} text={'<p><strong><a href="http://www.sorpa.is/files/ymis-skjol/heima_jardgerd.pdf" target="_blank">Hér</a></strong> er síða með upplýsingum um hvernig á að byrja.</p>'}/>
                    <EducationPortrait image={malmur} name={"MÁLMUR-ÁLDÓSIR"} text={"​​<p>Efnið er flutt til brotamálms-fyrirtækja sem flokka það eftir málmtegundum og minnka rúmmál, t.d. með pressun.</p><p><strong>Málmar</strong> eru fluttir erlendis til bræðslu og endurvinnslu.</p>"} />
                    <EducationPortrait image={kertavax} name={"KERTAVAX"} text={"​<p>Efnið nýtist <strong>til framleiðslu á útikertum</strong> hjá Plastiðjunni Bjargi – Iðjulundi á Akureyri.</p>"} />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <EducationPortrait image={ljosaperur} name={"LJÓSAPERUR"} text={"<p><strong>Ljósaperur</strong> eru teknar í sundur hjá viðurkenndum vinnsluaðilum. Efni hættuleg umhverfinu eru flokkuð frá og meðhöndluð með viðeigandi hætti.</p><p><strong>Endurvinnsluefni</strong>, t.d. málmar, eru flokkuð frá og komið í réttan farveg.</p>"} />                    
                    <EducationPortrait image={rafhlodur} name={"RAFHLÖÐUR"} text={"​<p><strong>Rafhlöður</strong> fara til viðurkenndra móttökuaðila spilliefna þar sem þær eru flokkaðar og meðhöndlaðar á réttan hátt og komið til eyðingar eða í endurvinnslu.</p>"} />
                    <EducationPortrait image={gler} name={"GLER"} text={"<p>Efninu er haldið til haga á urðunarstað <strong>SORPU</strong> í Álfsnesi. Markmiðið er að meta forsendur gler endurvinnslu.</p>"} />
                </div>
            </div>
        </div>
        );
      }
    }

    export default DropDownNr01;

  