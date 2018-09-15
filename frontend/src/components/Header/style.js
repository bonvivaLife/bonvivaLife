import styled from 'styled-components'
import theme from '../../theme'

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 40px;
    
    > a > img {
        width: 300px;
        height: auto;

        ${theme.s`
            margin-bottom: 24px;
        `}
    }

    ${theme.s`
        flex-direction: column;
    `}
`