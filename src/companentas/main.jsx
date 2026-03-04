import React from 'react'

function Main() {
  return (
    <div id='main'>
      <p className='green'>EXECISE IDEA</p>
      <h2 className='fo2'>Use global state to keep the cart in sync everywhere</h2>
      <br />
      <p id='ex'>The product come from a JSON file, and both the shop page and the cart page read the same Zustand store.</p>
    </div>
  )
}

export default Main
