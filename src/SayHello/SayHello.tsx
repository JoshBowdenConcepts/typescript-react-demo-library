import React from 'react'

export interface SayHelloProps {
    name: string
}

const SayHello = ({ name }: SayHelloProps): JSX.Element => (
    <div>Hey {name}, go hello to TypeScript.</div>
)

export default SayHello
