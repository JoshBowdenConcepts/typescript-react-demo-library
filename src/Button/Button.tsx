import React from 'react'
import styled from 'styled-components'
// import { Button } from '../../dist/bundle'

const SCButton = styled.button`
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #288a0f;
    padding: 20px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;
`

export interface Props extends ComponentProps {
    text: string
}

interface ComponentProps {
    id?: string
}

const Button = ({ text = 'Button Text', id }: Props) => {
    const componentProps: ComponentProps = {}
    if (id) {
        componentProps.id = id
    }
    return <SCButton {...componentProps}>{text}</SCButton>
}

export default Button
