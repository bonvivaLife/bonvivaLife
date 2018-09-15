import React from 'react'
import { connect } from 'react-redux'

import Container from '../../components/Container'
import Button from '../../components/Button'

import Logo from '../../img/logo.png'
import {LogoContainer} from './style'

const Home = props => (
  <Container>
    <LogoContainer>
      <img src={Logo} />
      <h1>Securing your data and contracts. <br /> Since 1856.</h1>
      <Button to='/overview'>Get started</Button>
    </LogoContainer>
  </Container>
)

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
