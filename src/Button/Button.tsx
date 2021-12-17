import React, { Children } from 'react'
import styled from 'styled-components'

// How I came up with Typescript Example for Button https://stackoverflow.com/questions/57424821/typescript-extend-react-component-props-for-styled-component-element

const StyledButton = styled.button`
    color: red;
    display: inline-block;
    background-color: #7b38d8;
    border-radius: 10px;
    border: 4px double #cccccc;
    color: #eeeeee;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: 200px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
`

// This can now use all inate button props which is really nice we don't need to specify anymore
interface Props extends React.ComponentPropsWithoutRef<'button'> {
    theme?: string
    id: string // overwriting a item like this makes it required when it was not-required we can do this for aria labels and such
}

const Button = (props: Props) => {
    return <StyledButton {...props}></StyledButton>
}

export default Button
export { Props as ButtonProps }
