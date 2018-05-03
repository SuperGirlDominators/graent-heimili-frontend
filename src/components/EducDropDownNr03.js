import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import EducationPortrait from '../containers/EducationPortrait';

import homeBanner from '../assets/images/home-banner.jpeg';
import whiteMask from '../assets/images/white_mask.png';
import '../css/AboutUs.css';
import '../css/EducationPage.css';

import andlitmaski from '../assets/images/andlitmaski.jpg';
import varasalvi from '../assets/images/varasalvi.jpg';
import kokosharsapa from '../assets/images/kokosharsapa.jpg';
import svitalyktareydir from '../assets/images/svitalyktareydir.jpg';
import harnaering from '../assets/images/harnaering.jpg';


import $ from 'jquery';
import Waypoint from 'react-waypoint';






 class DropDownNr03 extends Component {
    
      render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <EducationPortrait image={andlitmaski} name={"AGAR ANDLITMASKI"} text={"<p><strong>Uppskrift</strong><p/><p> ½ matskeið Agar duft frá Rapunzel.<br /> 1 teskeið Activated Charcoal töflur (fæst í Heilushúsinu)<br /> ½ teskeið Bentonite leir (fæst í Jurtaapótekinu og Gló Fákafeni)<br /> 2 matskeiðar vatn.</p><p>Blandið agar duftinu við vatnið og hrærið vel. Bætið töflunum og leirnum við. Hrærið vel saman saman þangað til blandan er laus við alla kekki. Færið blönduna yfir í krukku/skál og sjóðið í potti. Einnig er hægt að hita blönduna í örbylgjuofni í 10 sekúndur til að fá sömu útkomu. Fjarlægið krukkuna úr pottinum þegar að blandan er orðin heit og hrærið nokkru sinnum til að tryggja að hún sé kekkjalaus. Þegar að blandan hefur náð sömu áferð og hunang skulu þið setja hana í frysti í 3-4 mínútur til að leyfa henni að þykkjast enn betur. Gott er að kíkja á hana á um það bil einnar mínútu fresti til að koma í veg fyrir að hún storkni eða verði hlaupkennd.</p><p><strong> Notkun:</strong><br />Hreinsaðu andlitið með volgu vatni og þurrkaðu með mjúku handklæði. Notaðu bursta eða fingurna til að bera maskann á andlitið. Leyfið maskanum að þorna vel á andlitinu. Hreinsið síðan maskann varlega af andlitinu með volgu vatni og nuddið húðina um leið.</p><p> Bleytið þvottapoka með köldu vatni og strjúkið gætilega yfir andlitið eftir að maskinn hefur verið hreinsaður af. Þetta minnkar roða sem gæti hafa myndast í húðinni. Berið gott krem eða olíu á húðina eftir á.</p>"} />                    
                    <EducationPortrait image={varasalvi} name={"VARASALVI"} text={"​<p><strong>Uppskrift</strong><p/><p>1 teskeið Aloe Vera gel<br /> 1/2 teskeið kókoshnetuolía<br /> 1 teskeið jarðolíuhlaup.</p><p> Blandið saman í glerskál og hitið í 1-2 mínútur á hæsta styrk í örbylgjuofni. Úr þessu verður til um það bil 15 grömm af varasalva.</p>"} />
                    <EducationPortrait image={kokosharsapa} name={"KÓKOSHÁRSÁPA"} text={"<p><strong>Uppskrift</strong><p/><p>1/​4 bolli kó­kos­mjólk (ósætt)<br /> 1/​3 bolli fljót­andi „castile“-sápa<br /> 1/​2 te­skeið jojoba-olía<br /> 1/​2 te­skeið avóka­dóol­ía<br /> 15 drop­ar rós­marínol­ía (val­frjálst)<br /> 15 drop­ar pip­ar­myntu­olía (val­frjálst).</p><p> Blandið öll­um inni­halds­efn­um í brúsa og hristið vel. Sprautið 1-3 te­skeiðum í hár­svörðinn og nuddið mjúk­lega þar til löður mynd­ast. Skolið vel með vatni.</p><p> Að þessu loknu er gott er að skola hárið með ed­ik­blöndu til að fá glæsi­leg­an gljáa. Þá er ein­um hluta af epla­e­diki blandað í fjóra hluta af vatni, auk þess er hægt að setja nokkra dropa af ilmol­íu í blönd­una. Munið að skola ed­ik­blönd­una vel úr með vatni að lok­inni meðferðinni, kalt vatn er frá­bært ef þú ert ekki kulda­skræfa.</p><p> Hársáp­an geym­ist í nokkra daga við her­berg­is­hita, en sé hún geymd í kæli end­ist hún í allt að tvær vik­ur.</p>"} />
                </div>  	
            </div>
            <div className="container">
                <div className="row">
                    <EducationPortrait image={svitalyktareydir} name={"SVITALYKTAREYÐIR"} text={"<p><strong>Matarsódi</strong> virkar mjög vel sem svitalyktareyðir. Hægt er að bera matarsódann beint á húðina eða blanda honum út í olíur t.d. Kókosolíu.</p>"} />                    
                    <EducationPortrait image={harnaering} name={"HÁRNÆRING"} text={"​<p><strong>Laxerolía</strong> hefur verið notuð í aldaraðir sem náttúruleg hárnæring og næring fyrir hársvörðinn.</p>"} />
                </div>  	
            </div>
        </div>
        );
      }
    }

    export default DropDownNr03;