import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: linear-gradient(45deg, #000000 30%, rgb(162 91 54) 90%);
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    font-size: 18px;
    outline: none;
    border: 2px solid #EF6C00;
    box-shadow: 0 3px 0 black, 0px 3px 6px #fff;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    /* transform: translate3d(0, 0.75em, -1em); */
    /* transition: all 175ms cubic-bezier(0, 0, 1, 1);transition: 0.7s; */

    &:hover {
        color:#EF6C00;
        border: 2px solid #01BF71, 0px 4px 6px #fff; 
        background: ${({ primary }) => (primary ? '#21100d' : '#01BF71')};
    }
`