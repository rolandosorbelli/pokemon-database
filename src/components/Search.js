import React, { Component } from 'react';
import axios from 'axios';
// import * as api from '../api/index.js';

import apiCredentials from '../secret/api-credentials.json'

const apikey = apiCredentials.apikey
// export const api = `https://eu.api.battle.net/wow/zone/?locale=en_GB&apikey=${apikey}`;

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`https://eu.api.battle.net/wow/zone/${this.state.query}?locale=en_GB&apikey=${apikey}`)
    .then(({ data }) => {
      console.log(data)
      this.setState({
        results: data.data
      })
    })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      }
    })
  }

  render() {
    return (
      <div className="main">
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            />
          <p>{this.state.results}</p>
        </form>
      </div>
    )
  }
}

export default Search
