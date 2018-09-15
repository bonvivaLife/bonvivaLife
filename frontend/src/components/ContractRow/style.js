import styled from 'styled-components'
import theme from '../../theme'

const getStatusColor = (status) => {
    switch(status) {
        case 'RUNNING': return '#548318'
        case 'CANCELLATION_REQUESTED': return '#90751A'
        case 'CANCELLED': return '#90351A'
        case 'AVAILABLE': return '#271C64'
        default: return 'transparent'
    }
} 

export const StatusBullet = styled.div`
    width: 12px;
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    &:after {
        content: '';
        width: 12px;
        height: 12px;
        background: ${p => getStatusColor(p.status)};
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
    }
`

export const ContractRowWrapper = styled.li`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    padding: 24px;
    border-bottom: 0.9px solid ${theme.lightGray};

    > div:not(:last-child) {
        margin-right: 28px;
    }
`

export const Info = styled.div`
    display: block;
    width: ${p => p.width || '20%'};

    > strong {
        font-weight: 600;
    }
`

export const PriceInfo = styled.div`
    display: flex;
    align-items: center;
    text-align: right;
    width: 18%;

    > strong {
        font-weight: 600;
    }
`