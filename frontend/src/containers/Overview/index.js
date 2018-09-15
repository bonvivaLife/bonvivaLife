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
import ContractList from '../../components/ContractList'
import ContractRow from '../../components/ContractRow'

import {OverviewContainer} from './style'
import Logo from '../../img/logo.png'


const Overview = props => (
  <Container>
    <OverviewContainer>
      <img src={Logo} />
      <ContractList>{
        props.contracts && props.contracts.map((contract, index) => (
        <ContractRow contract={contract} key={contract.id || index} />))}
      </ContractList>
    </OverviewContainer>
  </Container>
)

const mapStateToProps = state => ({
  contracts: state.data.contracts
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview)
