import React from 'react'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../actions/counter'

import {changeAutoRenewal, cancelContract, orderContract} from '../../actions/data'
import Container from '../../components/Container'
import Button from '../../components/Button'
import ContractRow from '../../components/ContractRow'
import KeyValueList from '../../components/KeyValueList'
import SwitchRow from '../../components/SwitchRow'


import {DetailContainer, Spacer} from './style'
import Logo from '../../img/logo.png'

import Caret from '../../img/caret-left-white.svg'


const getButtonOptions = (status, props) => {
    switch(status) {
        case 'RUNNING': return {
          label: 'Cancel now (May incur penalty)',
          available: true,
          color: 'red',
          action: props.cancelContract
        }
        case 'CANCELLATION_REQUESTED': return {
          label: 'Cancelation requested',
          available: false,
          color: 'fadedRed'
        }
        case 'CANCELLED': return {
          label: 'Re-order product',
          available: true,
          color: 'green',
          action: props.orderContract
        }
        default:
        case 'AVAILABLE': return {
          label: 'order product',
          available: true,
          color: 'green',
          action: props.orderContract
        }
    }
}


const Detail = ({match, contracts, changeAutoRenewal, ...otherProps}) => {
  const contract = contracts.find(c => c.id.toString() === match.params.id)

  if (!contract) {
    return (<Container>
      <DetailContainer>
        <img src={Logo} />
        Contract unavailable
      </DetailContainer>
    </Container>)
  }

  const buttonOptions = getButtonOptions(contract.status, otherProps)

  return (
    <Container>
      <DetailContainer>
        <img src={Logo} />
        <ContractRow contract={contract} hideCaret/>
        <KeyValueList
          pairs={
            {
              'Contract start date': new Date(contract.start).toLocaleDateString('ch-DE'),
              'Contract end date': new Date(contract.end).toLocaleDateString('ch-DE'),
              'Earliest termination date': new Date(contract.earlies_termination).toLocaleDateString('ch-DE'),
              'Early termination penalty': `${contract.early_termination_penalty} CHF`,
              'Monthly cost': `${contract.monthly_cost} CHF`
            }
          }
        ></KeyValueList>
        <SwitchRow 
          label='Auto renewal' 
          subLabel={contract.auto_recurring 
            ? `Next renewal will occur on ${contract.end}`
            : `Contract will automatically be cancelled on ${contract.earlies_termination}`} 
          checked={contract.auto_recurring}
          onChange={() => changeAutoRenewal(contract.id, !contract.auto_recurring)}
          />

        <Spacer />
        <Button 
          background={buttonOptions.color} 
          disabled={!buttonOptions.available}
          onClick={() => buttonOptions.action(contract.id)}
        >
          {buttonOptions.label}
        </Button>
        <Spacer />
        <Button to='/overview'><img src={Caret} />Back to overview</Button>
      </DetailContainer>
    </Container>)
}

const mapStateToProps = state => ({
  contracts: state.data.contracts
})

const mapDispatchToProps = dispatch => ({
  changeAutoRenewal: (id, newState) => dispatch(changeAutoRenewal(id, newState)),
  cancelContract: (id) => dispatch(cancelContract(id)),
  orderContract: (id) => dispatch(orderContract(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
