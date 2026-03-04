import React from 'react'

function MainCart() {
  return (
    <div id='main'>
      <p className='green'>CART ROUTE</p>
      <h2 className='fo2'>Your shopping cart</h2>
      <br />
      <p id='ex'>The page reads the same global state as the product cards, so changes from one route are visible in the other route immediately.</p>
    </div>
  )
}

export default MainCart