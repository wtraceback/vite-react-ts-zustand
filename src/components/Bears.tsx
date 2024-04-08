import { FC } from 'react'
import useStore from '@/store'

export const Bears: FC = () => {
    const bears = useStore((state) => state.bears)

    return (
        <>
            <p>小熊的数量是：{ bears }</p>
            <br />
            <Test1 />
            <br />
            <Test2 />
        </>
    )
}

const Test1: FC = () => {
    const incrementBears = useStore((state) => state.incrementBears)
    const decrementBearsByStep = useStore((state) => state.decrementBearsByStep)
    const asyncIncrementBears = useStore((state) => state.asyncIncrementBears)

    return (
        <div>
            <div>Test1 子组件</div>
            <button onClick={incrementBears}>bears + 1</button>
            <button onClick={() => {decrementBearsByStep(5)}}>bears - 5</button>
            <button onClick={asyncIncrementBears}>1秒后bears+1</button>
        </div>
    )
}

const Test2: FC = () => {
    const resetBears = useStore((state) => state.resetBears)

    return (
        <div>
            <div>Test2 子组件</div>
            <button onClick={resetBears}>重置bears</button>
        </div>
    )
}