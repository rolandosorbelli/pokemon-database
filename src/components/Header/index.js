import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header--top">
          <div className="header--left">
          </div>
          <div className="header--right">
            <h1 className="header__text">WoW Dungeons and Raids Database</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
