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
      if (this.state.query && this.state.query.length >= 3) {
        if (this.state.query.length % 2 === 0) {
          this.getIdFromName()
        }
      }
    })
  }

  getIdFromName = async () => {
    let result
    Object.keys(this.props.database).forEach(key => {
      const zoneName = this.props.database[key].name.toLowerCase()
      if (zoneName.includes(this.state.query))
        result = this.props.database[key].id

      return
    })

    if (result)
      this.props.handleResults(result)
  }

  render() {
    if (this.props.database.length === 0)
      return null

    return (
      <div className="button_box2">
        <form className="form-wrapper-2 cf">
          <input
            type="text"
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search
