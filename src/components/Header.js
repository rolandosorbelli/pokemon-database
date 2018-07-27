import React from 'react';
import Navbar from './Navbar.js';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header--top">
          <div className="header--left">
            <div className="header__svg"></div>
          </div>
          <div className="header--right">
            <h1 className="header__text">Pokémon Database</h1>
            <p className="header__text">ポケットモンスター データベース</p>
          </div>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default Header;
