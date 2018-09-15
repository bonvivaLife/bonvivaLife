import styled from 'styled-components'
import theme from '../../theme'
import { Link } from 'react-router-dom';


export const ButtonWrapper = styled.button`
    outline: none;
    appearance: none;
    background: ${theme.darkBlue};
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
`

export const ButtonLink = ButtonWrapper.withComponent(Link)