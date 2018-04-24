import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import AboutPortrait from './AboutPortrait';
import judy from '../assets/images/judy.jpg';
import hrefna from '../assets/images/hrefna.jpg';
import ingunn from '../assets/images/ingunn.jpg';
import heidrun from '../assets/images/heidrun.jpg';
import whiteMask from '../assets/images/white_mask.png';
import '../css/AboutUs.css';

class AboutUs extends Component {
  render() {
    return (
      <div id="aboutpage">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="umOkkur">Um okkur</div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <AboutPortrait image={judy} name={"Judy"} fullName={"Judy Njeru"} text={"Web developer who also dabs a bit in design. My interests lie in building everything from mobile apps to rich interactive web programs. When I am not coding I like to swim, watch movies and everything outdoorsy."} link={"http://judynjeru.com"}/>                    
                <AboutPortrait image={hrefna} name={"Hrefna"} fullName={"Hrefna Þórey Kristbjörnsdóttir"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum elit turpis, vitae maximus ex fringilla et. Aliquam erat volutpat. Donec ut elit sed elit efficitur cursus. Sed euismod, elit nec rutrum scelerisque, ligula sapien tincidunt nisi, et dictum tellus nisl et velit. Proin dictum eros lobortis odio vulputate, non condimentum urna ultrices."} link={"http://hrefnakrist.com"}/>
                <AboutPortrait image={ingunn} name={"Ingunn"} fullName={"Ingunn Róbertsdóttir"} text={"Er vefhönnuður með sveinspróf í grafískri miðlun. Hún hefur einnig mikinn áhuga á framendaforritun og kvikun. Helstu áhugamálin eru hönnun, söngur, útivist, plöntur, ferðalög, ljósmyndun, matur og tónlist. "} link={"http://ingunnrob.com"}/>
                <AboutPortrait image={heidrun} name={"Heiðrún"} fullName={"Heiðrún Björt Sigurðardóttir"} text={"Nýbakaður vefhönnuður með mikla reynslu sem grafískur miðlari.  Syng í kór, gríp stundum í hljóðfæri og prjóna í handavinnuklúbbi fjölskyldunnar. Ferðalög eru alltaf á planinu."} link={"http://heidrunbjort.com"}/>
            </div>  	
        </div>
      </div>
    );
  }
}



export default AboutUs;
