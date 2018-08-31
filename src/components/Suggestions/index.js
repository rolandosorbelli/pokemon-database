import React from 'react'

const Suggestions = (props) => {
  // console.log(props.results)
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

        return (
          <div key={item.id}>
            <div className="suggestions--card__header">
              <p>{type}</p>
              <p>See more</p>
            </div>
            <div className="suggestions--card__content">
              <p>Name: {item.name}</p>
              <p>Location: {item.location}</p>
              <p>Number of players: {players}</p>
              <p>Info: {item.description.substring(0,50)}...</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Suggestions
