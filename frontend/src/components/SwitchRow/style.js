import styled from 'styled-components'
import theme from '../../theme'


export const SwitchRowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0.8px solid ${theme.lightGray};
    padding: 18px;

    .react-toggle--checked .react-toggle-track {
        background-color: ${theme.green};
      }
`