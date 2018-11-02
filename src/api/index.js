import apiCredentials from '../secret/api-credentials.json'

const apikey = apiCredentials.apikey

class Api {
  async fetch(endPoint = '', zoneId = '') {

    const apiPath = `https://eu.api.battle.net/wow/${endPoint}/${zoneId}?locale=en_GB&apikey=${apikey}`
    const config = {
      method: 'GET',
      mode: 'cors',
    }

    // console.log(apiPath)
    const data = await fetch(apiPath, config)
      .then(res => res.json())
      .catch(e => {
        throw new Error('Failed to fetch data from the API', e)
      })

    return data
  }
}

export default new Api()
