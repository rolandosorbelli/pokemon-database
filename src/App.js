import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './home/index.js';
import Test from './test/index.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <div className="background"></div>
          <div className="content">
            <Route path="/" component={Home} exact />
            <Route path="/test" component={Test} />
          </div>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
