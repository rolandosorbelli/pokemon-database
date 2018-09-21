import React from 'react';

const Zone = (props) => {
  const resultSearch = Object.keys(props.database).filter(key => props.database[key].id === Math.floor(props.match.params.id / 1))
  console.log(resultSearch)
  if (resultSearch.length === 0)
    return null

  return (
    <div className="zones">
      <h1>you win</h1>
    </div>
  )
}

export default Zone;
