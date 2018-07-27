import React from 'react';

const api = 'https://pokeapi.co/api/v2/pokemon/?limit=10';

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
    .then(parsedJSON => parsedJSON.results.map(item => (
      {
        name: `${item.name}`,
        height: `${item.id}`
      }
    )))
    .then(database => this.setState({
      database,
      isLoading: false
    }))
    .catch(error => console.log('You failed!', error))
  }

  render() {
    const {isLoading, database} = this.state;
    return (
      <ul>
        { !isLoading && database.length > 0 ? database.map(item => {
          return <li key={item.id}>{item.name}</li>
        }) : null
      }
    </ul>
  )
}

}

export default ApiCall;
