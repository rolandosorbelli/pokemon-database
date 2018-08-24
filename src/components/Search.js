import React, { Component } from 'react';
// import axios from 'axios';
import Api from '../api/index.js'
// import * as api from '../api/index.js';

import apiCredentials from '../secret/api-credentials.json'

const apikey = apiCredentials.apikey
// export const api = `https://eu.api.battle.net/wow/zone/?locale=en_GB&apikey=${apikey}`;

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value.toLowerCase()
    }, () => {
      if (this.state.query && this.state.query.length >= 3) {
        if (this.state.query.length % 2 === 0) {
          this.getIdFromName()
        }
      }
    })
  }

  getIdFromName = async () => {
    let result
    Object.keys(this.props.database).forEach(key => {
      const zoneName = this.props.database[key].name.toLowerCase()
      if (zoneName.includes(this.state.query))
        result = this.props.database[key].id

      return
    })

    if (result)
      this.props.handleResults(result)
  }

  render() {
    if (this.props.database.length === 0)
      return null

    return (
      <div className="main">
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            />
          <p>{}</p>
        </form>
      </div>
    )
  }
}

export default Search
