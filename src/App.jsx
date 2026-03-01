import { useState } from 'react'
import './App.css'
import { Route,BrowserRouter,Routes } from 'react-router'
import Store from './pages/store'
import Cart from './pages/cart'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Store />}/>
      <Route path='cart' element={<Cart />}/>
    </Routes>
    </>
  )
}

export default App
