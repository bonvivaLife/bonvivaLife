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
import {withRouter} from 'react-router'

import Container from '../../components/Container'
import ContractList from '../../components/ContractList'
import ContractRow from '../../components/ContractRow'
import Header from '../../components/Header'

import {OverviewContainer} from './style'


const Overview = props => {
  let chfBalance = props.balance.find(b => b.Currency === 'CHF')
  if  (chfBalance) {
    chfBalance = chfBalance.Balance
  }

  return (
  <Container>
    <OverviewContainer>
      <Header balance={chfBalance}/>
      <ContractList>{
        props.contracts && props.contracts.map((contract, index) => (
        <ContractRow contract={contract} key={contract.id || index} to={`/detail/${contract.id}`}/>))}
      </ContractList>
    </OverviewContainer>
  </Container>)
}

const mapStateToProps = state => ({
  contracts: state.data.contracts,
  balance: state.data.balance
})

const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview))
