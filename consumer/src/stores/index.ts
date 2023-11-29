import { create } from 'zustand';
export type Store = {
    count: number
    increment: () => void
    clear: () => void
    
}
const useStore= create<Store>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    clear: () => set(() => ({count: 0}))
}));

export default useStore