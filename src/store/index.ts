import { create } from 'zustand'

const useStore = create<BearType>()((set) => {
    return {
        bears: 0,
        // incrementBears: () => set({bears: 2})
        incrementBears: () => set((prevState) => ({bears: prevState.bears + 1}))
    }
})

export default useStore