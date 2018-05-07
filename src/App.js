import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Header from './containers/partials/Header';
import Login from './components/partials/Login';
import Questions from './components/Questions';
import Loader from './components/Loader';
import Checklist from './components/Checklist';
import StepAchievement from './containers/StepAchievement';
import AboutGame from './containers/AboutGame';
import AboutUs from './containers/AboutUs';
import Companies from './containers/Companies';
import Education from './containers/EducationPage';

import DropDownNr01 from './containers/partials/EducDropDownNr01';
import DropDownNr02 from './containers/partials/EducDropDownNr02';
import DropDownNr03 from './containers/partials/EducDropDownNr03';
import DropDownNr04 from './containers/partials/EducDropDownNr04';
import DropDownNr05 from './containers/partials/EducDropDownNr05';

import Footer from './containers/partials/Footer';
import './css/App.css';

import homeBanner from './assets/images/home-banner.jpeg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  render() {
    let maskClass = 'target  white_curved_mask';
    let imageStyle;
    if (this.props.location.pathname === '/' || this.props.location.pathname === '/about-game') {
      maskClass = 'target home-luminance-target';
      imageStyle = { backgroundImage: `url(${homeBanner})` }; 
    }
    const footerClass = this.state.menuOpen ? 'menu-active' : 'socials_content';
    return (
      <div>
        <div className="luminance-mask">
            <div className={maskClass} style={imageStyle}></div>
        </div>
        <Route path="/login" component={Login} />
        <Header toggleMenu={this.toggleMenu} menuOpen={this.state.menuOpen} history={this.props.history}/>
        <Route path="/" exact component={Home}/>
        <Route path="/questions" component={Questions} />
        <Route path="/loader" component={Loader} />
        <Route path="/checklist" component={Checklist} />
        <Route path="/stepcomplete" component={StepAchievement} />
        <Route path="/about-game" component={AboutGame} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/companies" component={Companies} />
        <Route path="/education" component={Education} />
        <Route path="/dropDownNr01" component={DropDownNr01} />
        <Route path="/dropDownNr02" component={DropDownNr02} />
        <Route path="/dropDownNr03" component={DropDownNr03} />
        <Route path="/dropDownNr04" component={DropDownNr04} />
        <Route path="/dropDownNr05" component={DropDownNr05} />
        <div className={footerClass} style={{position: 'fixed', bottom: 20, width: '100%' }}>
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
