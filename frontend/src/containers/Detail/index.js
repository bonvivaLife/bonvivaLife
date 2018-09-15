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
import ContractRow from '../../components/ContractRow'

import {DetailContainer} from './style'
import Logo from '../../img/logo.png'

import Caret from '../../img/caret-left-white.svg'


const Detail = ({match, contracts}) => {
  const contract = contracts.find(c => c.id.toString() === match.params.id)

  if (!contract) {
    return (<Container>
      <DetailContainer>
        <img src={Logo} />
        Contract unavailable
      </DetailContainer>
    </Container>)
  }

  return (
    <Container>
      <DetailContainer>
        <img src={Logo} />
        <ContractRow contract={contract} hideCaret/>
        {JSON.stringify(contract)}

        <Button><img src={Caret} />Back to overview</Button>
      </DetailContainer>
    </Container>)
}

const mapStateToProps = state => ({
  contracts: state.data.contracts
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
