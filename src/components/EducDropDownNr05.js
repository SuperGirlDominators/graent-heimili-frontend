import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import EducationPortrait from '../containers/EducationPortrait';

import homeBanner from '../assets/images/home-banner.jpeg';
import whiteMask from '../assets/images/white_mask.png';
import '../css/AboutUs.css';
import '../css/EducationPage.css';


import plastMoreInfo from '../assets/images/plastMoreInfo.png';
import alMoreInfo from '../assets/images/alMoreInfo.png';
import floskurMoreInfo from '../assets/images/floskurMoreInfo.png';
import raudiKrossinnMoreInfo from '../assets/images/raudiKrossinnMoreInfo.png';
import annadMoreInfo from '../assets/images/annadMoreInfo.png';

import $ from 'jquery';
import Waypoint from 'react-waypoint';






 class DropDownNr05 extends Component {
    
      render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <EducationPortrait  image={plastMoreInfo} name={"PLAST"} text={"<p><strong>Plast</strong> sem er á víðavangi getur fokið í sjóinn, eins og plastpokar og aðrar umbúðir, og því miður eru mörg dæmi þess að fiskar og önnur dýr í hafinu neyti plastið, sem getur þá að lokum endað á disknum hjá okkur mannfólkinu, þar sem það hefur komist inn í fæðukeðju dýrsins.</p><p><strong>Bóluplast</strong> fer í plastgáminn. En það má alveg sprengja bólurnar fyrst. Við hreinlega hvetjum til þess enda minnkar það rúmmál plastsins.</p><p><strong>Grenndargámar</strong> fyrir plast eru ætlaðir til að taka við umbúðarplasti en ekki stærri plasthlutum. Stærri plasthlutir eru velkomnir á endurvinnslustöðvar.</p> "} />                    
                    <EducationPortrait  image={floskurMoreInfo} name={"FLÖSKUR OG DÓSIR"} text={"<p>Ekki þarf að flokka umbúðum eftir tegund né telja þær en umbúðir þurfa hins vegar að vera <strong>óbeyglaðar</strong> svo að flokkunarvélin þekki þær.</p>"} />
                    <EducationPortrait  image={alMoreInfo} name={"MÁLMAR"} text={"​<p><strong>SORPA</strong> hefur sett upp véltæka flokkun sem nær málmum úr blönduðum úrgangi með segulfæriböndum og því þarf ekki að flokka málma sér. Höldum málmum til haga og setjum þá síðan beint í tunna, í lausu.</p><p><strong>Málma</strong> má endurvinna aftur og aftur. Öllum tegundum málma má skila á endurvinnslustöðvar eða í lausu í gráu heimilistunnuna.</p><p><strong>Endurvinnsla</strong> á málmi t.d. Niðursuðudósum, sem barst til <strong>SORPU</strong> árið 2016 sparaði orku sem jafngildir rafmagnsnotkun 23.000 heimila á ári.</p>"} />     
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <EducationPortrait  image={raudiKrossinnMoreInfo} name={"RAUÐI KROSSINN"} text={"<p><strong>Rauði Krossinn</strong> endurnýtir illa farinn fatnað. Öll föt, klæði, teppi, rúmföt og annað úr efni má fara í gáminn þeirra. Þegar gámurinn er orðinn fullur er hann sendur í flokkunarstöð Rauða Krossins þar sem heil föt eru flokkuð frá þeim ónýtu. Ónýtu fötin, klæðin og efni eru tætt niður og búið til úr þeim nýjir og endurunnir efnisstrangar til að sauma úr.</p><p>Gott er að hafa <strong>skópörin í pokum eða binda reimarnar saman</strong> svo ekki þurfi að byrja á að para skóna saman. Það sparar vinnu og fyrirhöfn við flokkun og kemur í veg fyrir sóun.</p>"} />
                    <EducationPortrait  image={annadMoreInfo} name={"ANNAÐ ÁHUGAVERT"} text={"<p><strong>Verum gagnrýnin á innkaup.</strong> Stór hluti af því sem við kaupum endar í ruslinu. Hvað fer af matvælum í ruslið og getum við dregið úr magninu?</p><p>Verum með <strong>nokkur ílát</strong> í eldhúsinu fyrir mismunandi flokka heimilisúrgangs. Einn af kostum flokkunar er að hvert ílát er lengur að fyllast.</p><p><strong>Athugið</strong> að lyf ættu aldrei að fara með almennum heimilisúrgangi og <strong>SORPA</strong> tekur ekki við þeim. Lyfjum bera að skila í næsta Apótek.</p>"} />
                 </div>
            </div>
        </div>
        );
      }
    }

    export default DropDownNr05;



    