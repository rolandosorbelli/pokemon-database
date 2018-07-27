import React from 'react';
import Navbar from './Navbar.js';

class Header extends React.Component {
  render() {
    return (
      <div className="header--outer">
      <div className="header header__text">
        <h1 className="header__text">Pokémon Database</h1>
        <p className="header__text">Lorem ipsum dolor sit amet, eam saperet utroque sensibus te.</p>
      </div>
      <Navbar />
      </div>
    );
  }
}

export default Header;
