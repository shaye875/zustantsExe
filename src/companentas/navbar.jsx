import React from 'react'
import { Link } from 'react-router'
import { useCard } from '../store2'

function Navbar() {
  const {count} = useCard()
  return (
    <div id='title'>
       <div id='tit1'>
        <p className='green'>ZUSTAND DEMO</p>
        <h1>Starter Store</h1>
        </div>
       <div>
        <Link className='nav' id='sh' to="/">Shop</Link>
        <Link className='nav' id='ca' to="cart">Cart {count}</Link>
       </div>
    </div>
  )
}

export default Navbar
