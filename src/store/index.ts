import { create } from 'zustand'

const useStore = create(() => {
    return {
        bears: 0,
    }
})

export default useStore