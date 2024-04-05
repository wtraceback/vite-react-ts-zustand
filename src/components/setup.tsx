import { FC } from 'react'
import useStore from '@/store'

export const Setup: FC = () => {
    const bears = useStore((state) => state.bears)

    return (
        <>
            <h1>测试组件</h1>
            <p>小熊的数量是：{ bears }</p>
        </>
    )
}