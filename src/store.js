import { create } from 'zustand'


export const useFishStore = create((set) => ({
    fishies: [],
    prodFetch: async () => {
        try {
            const response = await fetch("products.json")
            console.log(response);
            const data = await response.json()
            for(let item of data){
                item["buy"] = false
            }
            set({ fishies: data })
        } catch (err) {
            throw new Error(err)
        }

    },
}))
