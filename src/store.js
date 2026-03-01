import { create } from 'zustand'

export const useCards = create((set) => ({
    count: 0,
    countBuy: () => set((state) => ({ count: state.count + 1 })),
    decBuy: () => set((state) => ({ count: state.const - 1 })),
    removeBuyh: () => set({ count: 0 }),
}))