import React, { use, useEffect, useState } from 'react'
import { useCard, sumAll, remSum } from '../store2'

function BuyCart() {
    const { reCount,listBuy, count, remcart, decBears, removeAllBears, increasePopulation, addcart } = useCard()
    const [sum, setSum] = useState(0)
    useEffect(() => {
        setSum(sumAll(listBuy))
    }, [sum])

    return (
        <div id='Cart'>
            <div id='aln'>
                {listBuy.map((item) => {
                    return (
                        <div id='crc'>
                            <div id='exn'>
                                <p className='green'>{item.category}</p>
                                <h2 className='fo2'>{item.name}</h2>
                                <p id='ex'><b>${item.price}</b></p>
                            </div>
                            <div>
                                <button className='btcb' onClick={(() => {
                                    decBears()
                                    item.buy = false
                                    remcart(item)
                                    setSum(sumAll(listBuy))
                                })}><div>Remove from card</div></button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div id='ord'>
                <h2 className='fo2'>Order summary</h2>
                <p id='ex'>Total items: {count}</p>
                <p id='ex'>Total price: ${String(sum)}</p>
                <button className='btc' onClick={() => {
                         remSum(listBuy)
                    removeAllBears()
                        reCount()
               
                
                    setSum(sumAll(listBuy))
                

                }}>Clear cart</button>
            </div>
        </div>
    )
}

export default BuyCart
