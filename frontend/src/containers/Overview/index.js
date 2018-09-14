import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../actions/counter'

import Container from '../../components/Container'
import Button from '../../components/Button'

import Logo from '../../img/logo.png'
import {OverviewContainer} from './style'

const Overview = props => (
  <Container>
    <OverviewContainer>
      <img src={Logo} />
      <h1><strong>Infinite security</strong> for your data and contracts</h1>
      <Button>Get started</Button>
    </OverviewContainer>
  </Container>
)

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview)
