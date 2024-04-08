import { create } from 'zustand'

const useStore = create<BearType>()((set, get) => {
    return {
        // 小熊的数量
        bears: 0,
        // 让 bears 自增 +1
        incrementBears: () => set((prevState) => ({ bears: prevState.bears + 1 })),
        // 重置 bears 的数量
        resetBears: () => set({ bears: 0 }),
        // 让 bears 自减 step
        decrementBearsByStep: (step = 1) => set((prevState) => ({ bears: prevState.bears - step })),
        // 这里 get() 方法的调用，它可以获取到 store 对象，并访问 store 中的数据或方法
        asyncIncrementBears: () => {
            setTimeout(() => {
                get().incrementBears()
            }, 1000)
        },

        // 小鱼的数量
        fishes: 0,
        // 让小鱼数量自增+1的方法
        incrementFishes: () => set((prevState) => ({ fishes: prevState.fishes + 1 })),
        // 重置小鱼的数量
        resetFishes: () => set({ fishes: 0 }),
    }
})

export default useStore