import React, { Component } from 'react'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value.toLowerCase()
    }, () => {
      if(this.state.query === '') {
        this.props.handleResults([])
      }
      if (this.state.query && this.state.query.length >= 3) {
        this.getIdFromName()
      }
    })
  }

  getIdFromName = async () => {
    let result = []
    Object.keys(this.props.database).forEach(key => {
      const zoneName = this.props.database[key].name.toLowerCase()
      if (zoneName.includes(this.state.query))
        result.push(this.props.database[key].id)

      return
    })

    if (result)
      this.props.handleResults(result)
  }

  render() {
    if (this.props.database.length === 0)
      return null

    return (
      <div className="searchbar--wrapper">
        <form className="searchbar cf">
          <input
            type="text"
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            />
          <button className="searchbar__button" type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search
