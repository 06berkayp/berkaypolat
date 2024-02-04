import { create } from 'zustand'

export const useMenuStore = create((set, get) => ({
    isOpen: false,
    toggle: () => set({ isOpen: !get().isOpen }),
    close: () => set({ isOpen: false }),
    open: () => set({ isOpen: true }),
}))
