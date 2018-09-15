import styled, {injectGlobal} from 'styled-components'


injectGlobal`


.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(134, 153, 170, .4);
  }
  

  .modal {
      outline: none;
    color: #17385e;
    background: white;
    max-width: 740px;
    padding: 34px;
    box-shadow: 2px 2px 11px 0px rgba(0,0,0,0.36);
    margin-top: 10vw;
    margin-left: auto;
    margin-right: auto;

    > h2 {
        font-weight: 500;
    }
  }
`

export const GlobalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`


export const ResetButton = styled.button`
  background: none;
  outline: none;
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  color: #BBBBBB;
  cursor: pointer;
`