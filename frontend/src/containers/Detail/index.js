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

import Modal from 'react-modal';


import {DetailContainer, Spacer, ButtonWrapper} from './style'
import Logo from '../../img/logo.png'

import Caret from '../../img/caret-left-white.svg'


const getButtonOptions = (status, props, contract) => {
    switch(status) {
        case 'RUNNING': return {
          label: <React.Fragment>
            Cancel now <span>&nbsp;- Penalty: CHF&nbsp;{contract.early_termination_penalty}</span>
          </React.Fragment>,
          available: true,
          color: 'red',
          confirmationText: `Cancelling a running contract incurs a penalty of CHF ${contract.early_termination_penalty}. Do you really want to do that?`,
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
          confirmationText: `Do you want to re-order ${contract.product} for CHF ${contract.monthly_cost} / month?`,
          action: props.orderContract
        }
        default:
        case 'AVAILABLE': return {
          label: 'order product',
          available: true,
          color: 'green',
          confirmationText: `Do you want to order ${contract.product} for CHF ${contract.monthly_cost} / month?`,
          action: props.orderContract
        }
    }
}


class Detail extends React.Component{

  state = {
    confirmationVisible: false
  }


  showModal = () => {
    this.setState({confirmationVisible: true})
  }

  hideModal = () => {
    this.setState({confirmationVisible: false})
  }

  render () {
    const {match, contracts, changeAutoRenewal, ...otherProps} = this.props
    const contract = contracts.find(c => c.id.toString() === match.params.id)

    if (!contract) {
      return (<Container>
        <DetailContainer>
          <img src={Logo} />
          Contract unavailable
        </DetailContainer>
      </Container>)
    }

    const buttonOptions = getButtonOptions(contract.status, otherProps, contract)

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
          {contract.status === 'RUNNING' &&
          <SwitchRow 
            label='Auto renewal' 
            subLabel={contract.auto_recurring 
              ? `Next renewal will occur on ${contract.end}`
              : `Contract will automatically be cancelled on ${contract.earlies_termination}`} 
            checked={contract.auto_recurring}
            onChange={() => changeAutoRenewal(contract.id, !contract.auto_recurring)}
            />}

          <Spacer />
          <Button 
            background={buttonOptions.color} 
            disabled={!buttonOptions.available}
            onClick={this.showModal}
          >
            {buttonOptions.label}
          </Button>
          <Spacer />
          <Button to='/overview'><img src={Caret} />Back to overview</Button>
        </DetailContainer>
        <Modal
          isOpen={this.state.confirmationVisible}
          onRequestClose={() => this.setState({confirmationVisible: false})}
          contentLabel="Example Modal"
          overlayClassName='modal-overlay'
          className='modal'
        >
          <h2>Are you sure?</h2>
          <span>{buttonOptions.confirmationText}</span>
          <ButtonWrapper>
            <Button 
              background={buttonOptions.color} 
              disabled={!buttonOptions.available}
              onClick={() => {
                buttonOptions.action(contract.id)
                this.hideModal()
              }}
            >
              {buttonOptions.label}
            </Button>
            <Button 
              background='blue' 
              onClick={this.hideModal}
            >
              Do nothing
            </Button>
          </ButtonWrapper>
        </Modal>
      </Container>)
  }
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
