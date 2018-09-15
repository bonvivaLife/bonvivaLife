import React from 'react'
import {HeaderWrapper} from './style'
import Logo from '../../img/logo.png'
import Link from 'react-router-dom/Link';

const Header = ({balance}) => (
    <HeaderWrapper>
        <Link to='/'><img src={Logo} /></Link>
        {balance &&
        <span>Account balance: CHF&nbsp;<strong>{balance}</strong></span>}
    </HeaderWrapper>
)

export default Header