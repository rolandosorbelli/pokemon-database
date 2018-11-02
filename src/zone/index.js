import React, { Component } from 'react';
import apiCredentials from '../secret/api-credentials.json'

const apikey = apiCredentials.apikey

class Zones extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
    this.state = {
      matchingId: this.props.match.params.id,
      database: this.props.database,
      zoneInfo: '',
    };
    console.log(this.props)
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

    const data = await fetch(apiPath, config)
      .then(res => res.json())
      .catch(e => {
        throw new Error('Failed to fetch data from the API', e)
      })
    this.setState({ zoneInfo: data })
    console.log(this.state.zoneInfo)
  }

  render() {
    return (
      <div className="zone">
      </div>
    )
  }
}

export default Zones;
