import { create } from 'zustand'

export function sumAll(arr) {
    let sum = 0

    for (let item of arr) {
         
        sum += item.price
    }
    return sum
}

export function remSum(arr){
    for(let item of arr){
        item.buy = false
    }
}

export const useCard = create((set) => ({
    count: 0,
    listBuy: [],
    sum: 0,
    sumPrice: () => set((state) => ({ sum: sumAll(state.listBuy) })),
    increasePopulation: () => set((state) => ({ count: state.count + 1 })),
    removeAllBears: () => set((state) => (state.listBuy.splice(0,state.listBuy.length))),
    reCount:() => set({count:0}),
    decBears: () => set((state) => ({ count: state.count - 1 })),
    addcart: (add) => set((state) => ({ listBuy: [...state.listBuy, add] })),
    remcart: (rem) => set((state) => (state.listBuy.splice(state.listBuy.indexOf(rem), 1)))
}))
