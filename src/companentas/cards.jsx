import React from 'react'
import { useFishStore } from '../store'
import Card from './card';

function Cards() {
    const {fishies} = useFishStore()
  return (
    <div id='crs'>
      {fishies.length > 0 && fishies.map((item)=>{
         return(
            <Card key={item.id} props ={item}/>
         )
      })}
    </div>
  )
}

export default Cards
