import { create } from 'zustand'

const useStore = create<BearType>()((set) => {
    return {
        // 小熊的数量
        bears: 0,
        // 让 bears 自增 +1
        incrementBears: () => set((prevState) => ({ bears: prevState.bears + 1 })),
        // 重置 bears 的数量
        resetBears: () => set({ bears: 0 }),
        // 让 bears 自减 step
        decrementBearsByStep: (step = 1) => set((prevState) => ({ bears: prevState.bears - step }))
    }
})

export default useStore