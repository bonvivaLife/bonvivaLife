import React from 'react'
import {ContractRowWrapper, StatusBullet, Info, PriceInfo} from './style'

const getStatusText = (status) => {
    switch(status) {
        case 'RUNNING': return 'Contract running'
        case 'CANCELLATION_REQUESTED': return 'Cancellation requested'
        case 'CANCELLED': return 'Contract cancelled'
        case 'AVAILABLE': return 'Product available'
        default: return ''
    }
} 
const ContractRow = ({contract}) => (
    <ContractRowWrapper>
        <StatusBullet status={contract.status} />
        <Info key='product-info' width={'25%'}>
            <strong>{contract.provider}</strong><br/>
            <span>{contract.product}</span>
        </Info>
        <PriceInfo key='price-info'>
            <strong>{contract.monthly_cost}</strong><span> CHF / month</span>
        </PriceInfo>
        <Info key='contract-info' width={'40%'}>
            <span>{getStatusText(contract.status)}</span><br/>
            <span>Auto renewal <strong>{contract.auto_recurring ? 'enabled' : 'disabled'}</strong></span>
        </Info>
    </ContractRowWrapper>
)

export default ContractRow