import styled from 'styled-components'
import theme from '../../theme'


export const DetailContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background: white;
    min-height: 40vh;
    box-shadow: 2px 2px 11px 0px rgba(0,0,0,0.36);
    margin-top: 34px;
    padding: 48px;
    color: ${theme.darkBlue};

    > img {
        width: 300px;
        height: auto;
        margin-bottom: 40px;
    }

    > h1 {
        margin-top: 58px;
        margin-bottom: 58px;
    }
` 

export const Spacer = styled.div`
    height: 34px;
`


export const ButtonWrapper = styled.div`
    margin-top: 24px;
    display: flex;

    > button:not(:last-child), > a:not(:last-child) {
        margin-right: 18px;
    }
`