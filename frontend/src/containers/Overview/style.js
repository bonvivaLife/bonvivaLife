import styled from 'styled-components'
import theme from '../../theme'


export const OverviewContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background: white;
    min-height: 40vh;
    box-shadow: 2px 2px 11px 0px rgba(0,0,0,0.36);
    margin-top: 10vh;
    padding: 48px;
    color: ${theme.darkBlue};

    > img {
        width: 600px;
        height: auto;
    }

    > h1 {
        margin-top: 58px;
        margin-bottom: 58px;
    }


` 