import { create } from 'zustand'

const useStore = create<BearType>()(() => {
    return {
        bears: 0,
    }
})

export default useStore