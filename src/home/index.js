import React from 'react'
import Header from '../components/Header/index'
import Api from '../api/index'
import Search from '../components/Search/index'
import Suggestions from '../components/Suggestions/index'

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
        id: item.id,
        location: item.location.name,
        numPlayers: item.numPlayers,
        description: item.description,
        dungeon: item.isDungeon,
        raid: item.isRaid
      }
    })
    this.setState({ database: filtered })
  }

  compare = (a,b) => {

    a = a.name.startsWith('The ') ? a.name.replace('The ', '') : a.name
    b = b.name.startsWith('The ') ? b.name.replace('The ', '') : b.name

    if (a < b)
    return -1;
    if (a > b)
    return 1;
    return 0;
  }

  showResults = async (data) => {
    console.log(data)

    let result = []
    await data.forEach(item => {
      // Api.fetch('zone', item)
      this.state.database.forEach(data => {
        if (data.id === item) {
          return result.push(data)
        }
      })
      return result
    })
    const sortedResult = result.sort(this.compare)
    this.setState({ results: sortedResult})
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Search
          database={this.state.database}
          handleResults={this.showResults}
          />
        <Suggestions
          results={this.state.results}
          />
      </div>
    )
  }
}

export default Home;
