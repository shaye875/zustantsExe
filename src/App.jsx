import { useEffect, useState } from 'react'
import './App.css'
import { Route,BrowserRouter,Routes } from 'react-router'
import Store from './pages/store'
import Cart from './pages/cart'
import { useFishStore } from './store'


function App() {
    
    const {fishies,prodFetch} = useFishStore()
    useEffect(()=>{
      prodFetch()
    },[])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Store />}/>
      <Route path='cart' element={<Cart />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
