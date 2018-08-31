import React from 'react'
import Header from '../components/Header'
import Api from '../api/index'
import Search from '../components/Search'

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

    let result = []
    await data.forEach(item => {
      // Api.fetch('zone', item)
      this.state.database.forEach(data => {
        // console.log(data.id, item)
        if (data.id === item) {
          return result.push(data)
        }
      })
      return result
    })
    const sortedResult = result.sort(this.compare)
    console.log(sortedResult)

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
      {this.state.results.map(item => {
        return(
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        )
      })}
      </div>
    );
  }
}

export default Home;
