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
      <h1><strong>Infinite security</strong> for your data and contracts</h1>
      <Button>Get started</Button>
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
