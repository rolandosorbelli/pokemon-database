import apiCredentials from '../secret/api-credentials.json'

const clientId = apiCredentials.clientId
const clientSecret = apiCredentials.clientSecret

class Api {

  async fetch(endPoint = '', zoneId = '') {

    const apiUri = `https://eu.battle.net/oauth/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
    const config = {
      method: 'GET',
      mode: 'cors',
    }

    const credentials = await fetch(apiUri, config)
    .then(res => res.json())
    .catch(e => {
      throw new Error('Failed to fetch data from the API', e)
    })

    const apiPath = `https://eu.api.blizzard.com/wow/${endPoint}/${zoneId}?locale=en_GB&access_token=${credentials.access_token}`
    const data = await fetch(apiPath, config)
    .then(res => res.json())
    .catch(e => {
      throw new Error('Failed to fetch data from the API', e)
    })

    return data
  }
}

export default new Api()
