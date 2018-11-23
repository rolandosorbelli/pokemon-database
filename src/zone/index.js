import React, { Component } from 'react';
import apiCredentials from '../secret/api-credentials.json'

const accessToken = apiCredentials.accessToken

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

    let apiPath = `https://eu.api.blizzard.com/wow/${endPoint}/${zoneId}?locale=en_GB&access_token=${accessToken}`
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

    const {
      zoneInfo,
    } = this.state

    let extraInfo
    (zoneInfo.description === '' ? extraInfo = 'No description available' : extraInfo = '')

    let type
    (zoneInfo.isDungeon ? type = 'Dungeon' : type = 'Raid')

    const expansion = {
      1: "World of Warcraft: The Burning Crusade",
      2: "World of Warcraft: Wrath of the Lich King",
      3: "World of Warcraft: Cataclysm",
      4: "World of Warcraft: Mists of Pandaria",
      5: "World of Warcraft: Warlords of Draenor",
      6: "World of Warcraft: Legion",
      7: "World of Warcraft: Battle for Azeroth"
    }

    if (zoneInfo.location) {
      const location = zoneInfo.location
      return (
        <div className="zone">
          <div className="zone__title">
            <h1>{zoneInfo.name}</h1>
          </div>
          <div className="zone__section">
            <div className="zone__description">{zoneInfo.description}{extraInfo}</div>
            <div className="zone__content">
              <div className="zone__card box-3">
                <div className="zone__card__title">Location</div>
                <div className="zone__card__content">{location.name}</div>
              </div>
              <div className="zone__card box-1">
                <div className="zone__card__title">Type</div>
                <div className="zone__card__content">{type}</div>
              </div>
              <div className="zone__card box-1">
                <div className="zone__card__title">Number of players</div>
                <div className="zone__card__content">{zoneInfo.numPlayers}</div>
              </div>
              <div className="zone__card box-3">
                <div className="zone__card__title">Expansion</div>
                <div className="zone__card__content">
                  {expansion[zoneInfo.expansionId] ? expansion[zoneInfo.expansionId] : 'Unknown'}
                </div>
              </div>
            </div>
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
