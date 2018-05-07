import React, { Component } from 'react';
import '../../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="share-social">
          <a className="social overlay_icon" href="https://pinterest.com">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a className="social overlay_icon" href="https://facebook.com">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="social overlay_icon" href="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
