import React, { Component } from 'react';
import '../../css/Header.css';
import { Link, NavLink } from 'react-router-dom';
import logoGreen from '../../assets/images/Logo_graent.png';
import logoWhite from '../../assets/images/LOGO_2.png';
import firebase from 'firebase';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
      open: '',
      scrolled: false
    };
    this.onStatusClick = this.onStatusClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  onStatusClick() {
    var toggle = this.state.active === 'active' ? '' : 'active';
    var toggle2 = this.state.open === 'open' ? '' : 'open';
    this.setState({active: toggle, open: toggle2 });
    this.props.toggleMenu();
  }

  handleScroll() {
    if (window.pageYOffset === 0) {
      this.setState({ ...this.state, scrolled: false });
    } else {
      this.setState({ ...this.state, scrolled: true });
    }
  }

  handleLogout() {
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const scrolled = this.state.scrolled ? 'shrink' : '';
    const logo = this.state.scrolled ? logoGreen : logoWhite;
    return (
      <div>
        <header className={scrolled}>
          <nav className="navbar navbar-inverse container">
            <div className="container-fluid">
              <div className="navbar-left">
                <div className="logo ">
                  <a href="/">
                    <img src={logo} alt="logo"></img>
                  </a>
                </div>
              </div>

              <ul className="nav navbar-right">
                <div className="burger_menu">
                  <div className={`button_container ${this.state.active}`} id="toggle" onClick={this.onStatusClick}>
                    <span className="top"></span>
                    <span className="middle"></span>
                    <span className="bottom"></span>
                  </div>

                  <div className={`overlay ${this.state.open}`} id="overlay">
                    <nav className="overlay-menu">
                      <ul>
                        <li><NavLink to="/">Forsíða</NavLink></li>
                        <li><NavLink to="/about-game">Um leikinn</NavLink></li>
                        <li><NavLink to="/education">Fræðsluefni</NavLink></li>
                        <li><NavLink to="/about-us">Um okkur</NavLink></li>
                        <li><NavLink to="/companies">Samstarfsaðilar</NavLink></li>
                        <li id="login"><NavLink to="/#login_popup">Innskráning</NavLink></li>
                        <li id="logout"><a onClick={this.handleLogout}>Útskráning</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}



export default Header;
