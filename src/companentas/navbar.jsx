import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
       <div>
        <p>ZUSTAND DEMO</p>
        <h1>Starter S tore</h1>
        </div>
       <div>
        <Link to="/">Shop</Link>
        <Link to="cart">Cart</Link>
       </div>
    </div>
  )
}

export default Navbar
