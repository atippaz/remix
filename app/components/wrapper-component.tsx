import { ReactNode } from 'react'

export default function Wrapper({
    children,
    wrapper,
    condition,
}: {
    children: ReactNode
    wrapper: Function
    condition: boolean
}) {
    return <>{condition ? wrapper(children) : children}</>
}
Wrapper.displayName = 'Wrapper'
