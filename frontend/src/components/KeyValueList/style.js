import styled from 'styled-components'
import theme from '../../theme'

export const KeyValueTable = styled.table`

    margin-top: 36px;
    margin-bottom: 36px;

    > tr {
        > th, > td {
            text-align: left;
            padding-top: 8px;
            padding-bottom: 8px;
        }
    
       > th {
            width: 40%;

            ${theme.s`
                width: 50%;
            }`}
       }

       > td {
            width: 60%;
            ${theme.s`
                width: 50%;
            }`}
       }
    }
`