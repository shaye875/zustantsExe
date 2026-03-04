import { create } from 'zustand'

function sumAll(arr){
    let sum = 0
    for (let item in arr){
        sum +=item.price
    }
    return sum
}

export const useCard = create((set) => ({
    count: 0,
    listBuy: [],
    sum: () => set ((state) => ({sum:sumAll(state.listBuy)})),
    increasePopulation: () => set((state) => ({ count: state.count + 1 })),
    removeAllBears: () => set({ count: 0,listBuy:[] }),
    decBears: () => set((state) => ({ count: state.count - 1 })),
    addcart: (add) => set((state) => ({listBuy:[...state.listBuy, add] })),
    remcart: (rem) => set((state) => (state.listBuy.splice(state.listBuy.indexOf(rem),1) ))
}))
