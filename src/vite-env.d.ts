/// <reference types="vite/client" />

type BearType = {
    bears: number,
    incrementBears: () => void,
    resetBears: () => void,
    decrementBearsByStep: (step?: number) => void,
}