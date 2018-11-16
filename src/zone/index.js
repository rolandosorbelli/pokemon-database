import React, { Component } from 'react';
import apiCredentials from '../secret/api-credentials.json'

const apikey = apiCredentials.apikey

class Zones extends Component {
  constructor(props){
    super(props);
    this.state = {
      matchingId: this.props.match.params.id,
      database: this.props.database,
      zoneInfo: {},
    };
  }

  componentDidMount() {
    this.fetchZone()
  }

  zone() {
    const resultSearch = Object.keys(this.state.database).filter(key => this.state.database[key].id === Math.floor(this.state.matchingId / 1))

    if (resultSearch.length === 0)
    return null
  }

  async fetchZone(endPoint = 'zone', zoneId = this.state.matchingId) {

    let apiPath = `https://eu.api.battle.net/wow/${endPoint}/${zoneId}?locale=en_GB&apikey=${apikey}`
    let config = {
      method: 'GET',
      mode: 'cors',
    }

    fetch(apiPath, config)
    .then(res => res.json())
    .then(res => this.setState({ zoneInfo: res }))
    .catch(e => {
      throw new Error('Failed to fetch data from the API', e)
    })
  }

  render() {

    let extraInfo
    (this.state.zoneInfo.description === '' ? extraInfo = 'No description available' : extraInfo = '')

    if (this.state.zoneInfo.location) {
      const location = this.state.zoneInfo.location
      return (
        <div className="zone">
          <div className="zone--title">
            <h1>{this.state.zoneInfo.name}</h1>
          </div>
          <div className="zone--section">
            <div className="zone--section--description">{this.state.zoneInfo.description}{extraInfo}</div>
            <div className="zone--section--location">{location.name}</div>
          </div>
        </div>
      )
    }

    return (
      <div></div>
    )
  }
}

export default Zones;
