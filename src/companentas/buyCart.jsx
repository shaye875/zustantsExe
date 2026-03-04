import React from 'react'
import { useCard } from '../store2'

function BuyCart() {
    const { listBuy, sum, count, remcart, decBears, removeAllBears, increasePopulation, addcart } = useCard()
   console.log(listBuy);
    return (
        <div>
            {listBuy.map((item) => {
                return (
                    <div id='crc'>
                        <div id='exn'>
                            <p className='green'>{item.category}</p>
                            <h2 className='fo2'>{item.name}</h2>
                            <p id='ex'><b>${item.price}</b></p>
                        </div>
                        <div>
                            <button className='btc' onClick={(() => {
                                decBears()
                                item.buy = false
                                remcart(item)
                            })}><div>Remove from card</div></button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BuyCart
