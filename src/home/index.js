import React from 'react';
import Header from '../components/Header.js'
import Api from '../api/index.js'
import Search from '../components/Search.js'

class Home extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      database: [],
      results: [],
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () => {
    const data = await Api.fetch('zone')
    const filtered = data.zones.map(item => {
      return {
        name: item.name,
        id: item.id
      }
    })
    this.setState({ database: filtered })
  }

  showResults = async (data) => {

    const apiResult = await Api.fetch('zone', data)
    this.setState({ results: apiResult })
    console.log(this.state.results)
  }

  render() {


    return (
      <div className="wrapper">
        <Header />
        <Search
          database={this.state.database}
          handleResults={this.showResults}
        />
      <p>{this.state.results.name}</p>
      </div>
    );
  }
}

export default Home;
