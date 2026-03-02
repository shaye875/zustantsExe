import { create } from 'zustand'


export const useFishStore = create((set) => ({
    fishies: [],
    prodFetch: async () => {


        try {
            const response = await fetch("products.json")
            const data = await response.json()
            set({ fishies: data })
            console.log(data);
        } catch (err) {
            throw new Error(err)
        }

    },
}))
