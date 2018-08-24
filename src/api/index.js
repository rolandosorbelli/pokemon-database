import apiCredentials from '../secret/api-credentials.json'

const apikey = apiCredentials.apikey
const api = `https://eu.api.battle.net/wow/zone/?locale=en_GB&apikey=${apikey}`;

// const apiCall = () => {
//   let results
//   fetch(api)
//   .then(response => response.json())
//   // .then(parsedJSON => console.log(parsedJSON))
//   .then(parsedJSON => parsedJSON.zones.map(item => (
//     {
//       name: item.name,
//       id: item.id
//     }
//   )))
//   .then(data => results = data)
//   .catch(error => console.log('Failed to fetch data from the API', error))
//
//   return results
// }
//
// export default apiCall



class Api {
  async fetch(endPoint = '', zoneId = '') {

    const apiPath = `https://eu.api.battle.net/wow/${endPoint}/${zoneId}?locale=en_GB&apikey=${apikey}`
    const config = {
      method: 'GET',
      mode: 'cors',
    }

    console.log(apiPath)
    const data = await fetch(apiPath, config)
      .then(res => res.json())
      .catch(e => {
        throw new Error('Failed to fetch data from the API', e)
      })

    return data
  }
}

export default new Api()
