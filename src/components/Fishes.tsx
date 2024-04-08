import { FC } from 'react'
import useStore from '@/store'

export const Fishes: FC = () => {
    const fishes = useStore((state) => state.fishes)
    const incrementFishes = useStore((state) => state.incrementFishes)
    const resetFishes = useStore((state) => state.resetFishes)

    return (
        <div>
            <p>小鱼的数量是：{ fishes }</p>
            <br />
            <button onClick={incrementFishes}>fishes + 1</button>
            <button onClick={resetFishes}>重置 fishes</button>
        </div>
    )
}