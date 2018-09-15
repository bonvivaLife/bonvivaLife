import styled from 'styled-components'

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
       }

       > td {
            width: 60%;
       }
    }
`