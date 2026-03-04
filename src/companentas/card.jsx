import React from 'react'

function Card({props}) {
  return (
    <div id='crd'>
      <div id='img'>
        <h1>{props.image}</h1>
      </div>
      <div id='exc'>
      <p className='green'>{props.category}</p>
      <h2 className='fo2'>{props.name}</h2>
      <p id='ex'>{props.description}</p>
      <p id='ex'><b>${props.price}</b></p>
      </div>
    </div>
  )
}

export default Card
