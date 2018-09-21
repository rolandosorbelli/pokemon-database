import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Suggestions from '../components/Suggestions'

class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      results: [],
    }
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
      this.props.database.forEach(data => {
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
          database={this.props.database}
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
