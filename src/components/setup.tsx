import { FC } from 'react'
import useStore from '@/store'

export const Setup: FC = () => {
    const bears = useStore((state) => state.bears)

    return (
        <>
            <h1>测试组件</h1>
            <p>小熊的数量是：{ bears }</p>
            <hr />
            <Test1 />
            <hr />
            <Test2 />
        </>
    )
}

const Test1: FC = () => {
    const incrementBears = useStore((state) => state.incrementBears)

    return (
        <>
            <div>Test1 子组件</div>
            <button onClick={incrementBears}>bears + 1</button>
        </>
    )
}

const Test2: FC = () => {
    const resetBears = useStore((state) => state.resetBears)

    return (
        <>
            <div>Test2 子组件</div>
            <button onClick={resetBears}>重置bears</button>
        </>
    )
}