import React from 'react'
import { NavLink } from 'react-router-dom'

const Suggestions = (props) => {
  console.log(props.results)
  return (
    <div className="suggestions">
      {props.results.map(item => {
        /*
        Check if it's a dungeon or a raid
        */
        let type
        (item.dungeon ? type = 'Dungeon' : type = 'Raid')

        /*
        Check number of players
        */
        let players
        (item.numPlayers === '10/25' ? players = '10 or 25' : players = item.numPlayers)
        let extraInfo
        (item.description === '' ? extraInfo = 'No description available' : extraInfo = '')

        return (
          <div key={item.id} className="suggestions--card">
            <div className="suggestions--card--header">
              <p>{type}</p>
              <p><NavLink to={'/zone/' + item.urlSlug + '/' + item.id}>See more</NavLink></p>
            </div>
            <div className="suggestions--card--content">
              <div className="suggestions--card--content--section">
                <p className="suggestions--card--content--title">Name</p>
                <p>{item.name}</p>
              </div>
              <div className="suggestions--card--content--section">
                <p className="suggestions--card--content--title">Location</p>
                <p>{item.location}</p>
              </div>
              <div className="suggestions--card--content--section">
                <p className="suggestions--card--content--title">Number of players</p>
                <p>{players}</p>
              </div>
              <div className="suggestions--card--content--section">
                <p className="suggestions--card--content--title">Info</p>
                <p>{item.description}{extraInfo}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Suggestions
