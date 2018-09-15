import styled from 'styled-components'
import theme from '../../theme'
import { Link } from 'react-router-dom';


const getBackgroundColor = (background) => {
    switch(background) {
        case 'red': return theme.red
        case 'green': return theme.green
        case 'fadedRed': return theme.fadedRed
        default:
        case 'blue': return theme.darkBlue

    }
}

export const ButtonWrapper = styled.button`
    outline: none;
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${p => getBackgroundColor(p.background)};
    color: white;
    padding: 18px 42px;
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 900;
    box-sizing: border-box;
    vertical-align: middle;
    cursor: pointer;
    transition: background ease 0.3s;
    text-decoration: none;
    text-align: center;

    &:hover {
        background: #50385e;
    }

    > img {
        width: 28px;
        height: 28px;
        vertical-align: middle;
    }

    > span {
        font-weight: 400;
        font-style: italic;
    }
`

export const ButtonLink = ButtonWrapper.withComponent(Link)