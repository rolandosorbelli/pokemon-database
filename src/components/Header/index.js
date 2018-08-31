import React from 'react';
import Navbar from '../Navbar/index.js';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header--top">
          <div className="header--left">
            <div className="header__svg"></div>
          </div>
          <div className="header--right">
            <h1 className="header__text">WoW Dungeons and Raids Database</h1>
            <p className="header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default Header;
