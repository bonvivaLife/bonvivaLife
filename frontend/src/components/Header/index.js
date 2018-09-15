import React from 'react'
import {HeaderWrapper} from './style'
import Logo from '../../img/logo.png'

const Header = ({balance}) => (
    <HeaderWrapper>
        <img src={Logo} />
        {balance &&
        <span>Account balance: CHF&nbsp;<strong>{balance}</strong></span>}
    </HeaderWrapper>
)

export default Header