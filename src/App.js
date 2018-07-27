import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './home/Home.js';
import Test from './test/Test.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/test" component={Test} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
