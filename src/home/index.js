import React from 'react';
import Header from '../components/Header.js'
import ApiCall from '../api/index.js'
import Search from '../components/Search.js'

class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Search />
        <ApiCall />
      </div>
    );
  }
}

export default Home;
