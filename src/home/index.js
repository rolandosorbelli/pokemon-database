import React from 'react';
import Header from '../components/Header.js'
import ApiCall from '../api/index.js'

class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <ApiCall />
      </div>
    );
  }
}

export default Home;
