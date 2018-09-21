import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Api from './api'
import Home from './home/index.js';
import Zone from './zone/index.js';
import './styles/App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      database: [],
      results: [],
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () => {
    const data = await Api.fetch('zone')
    const filtered = data.zones.map(item => {
      return {
        name: item.name,
        id: item.id,
        location: item.location.name,
        numPlayers: item.numPlayers,
        description: item.description,
        dungeon: item.isDungeon,
        raid: item.isRaid
      }
    })
    this.setState({ database: filtered })
  }

  render() {
    const homePage = (props) => {
      return <Home database={this.state.database} {...props} />
    }
    const zonePage = (props) => {
      return (
        <Zone database={this.state.database} {...props} />
      )
    }

    return (
      <BrowserRouter>
        <main>
          <div className="background"></div>
          <div className="content">
            <Route path={process.env.PUBLIC_URL + '/'} component={homePage} exact />
            <Route path={process.env.PUBLIC_URL + '/zone/:id'} component={zonePage} />
          </div>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
