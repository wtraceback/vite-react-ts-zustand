/// <reference types="vite/client" />

type BearType = {
    // bears 相关的数据和方法
    bears: number,
    incrementBears: () => void,
    resetBears: () => void,
    decrementBearsByStep: (step?: number) => void,
    asyncIncrementBears: () => void,
    // fishes 相关的数据和方法
    fishes: number,
    incrementFishes: () => void,
    resetFishes: () => void,
}