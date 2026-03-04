import React, { useState } from 'react'
import { useCard } from '../store2'

function Card({ props }) {
  const {remcart, addcart, decBears, increasePopulation } = useCard()
  const [buy, setyBuy] = useState(false)
  return (
    <div id='crd'>
      <div id='img'>
        <h1>{props.image}</h1>
      </div>
      <div id='exc'>
        <p className='green'>{props.category}</p>
        <h2 className='fo2'>{props.name}</h2>
        <p id='ex'>{props.description}</p>
        <div id='prc'>
        <p id='ex'><b>${props.price}</b></p>
        {props.buy && <p id='ex'>In cart</p>}{!props.buy && <p id='ex'>Not in cart</p>}
        </div>
      
        <button className='btc' onClick={((e) => {
          if (!props.buy) {
            increasePopulation()
            props["buy"] = true
            e.target.className = "btcb"
            addcart(props)
          } else {
            decBears()
            props.buy = false
            e.target.className = "btc"
            remcart(props)
          }
        })}>{!props.buy && <div>Add to cart</div>}{props.buy && <div>Remove from card</div>}{}</button>
      </div>
    </div>
  )
}

export default Card
