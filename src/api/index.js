import React from 'react';
import apiCredentials from '../secret/api-credentials.json'

const apikey = apiCredentials.apikey
export const api = `https://eu.api.battle.net/wow/zone/?locale=en_GB&apikey=${apikey}`;

class ApiCall extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      database: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch(api)
    .then(response => response.json())
    // .then(parsedJSON => console.log(parsedJSON))
    .then(parsedJSON => parsedJSON.zones.map(item => (
      {
        name: `${item.name}`,
        id: `${item.id}`,
        description: `${item.description}`
      }
    )))
    .then(database => this.setState({
      database,
      isLoading: false
    }))
    .catch(error => console.log('Failed to fetch data from the API', error))
  }

  render() {
    const {isLoading, database} = this.state;
    console.log(database)
    return (
      <ul>
        { !isLoading && database.length > 0 ? database.map(item => {
          return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        )
        }) : null
      }
    </ul>
  )
}

}

export default ApiCall;
