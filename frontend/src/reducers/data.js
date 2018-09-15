
import {
    FETCH_CONTRACTS,
    FETCH_CONTRACTS_SUCCEEDED,
    FETCH_CONTRACTS_FAILED
  } from '../actions/data'
  
  
  
  const initialState = {
    contracts: [],
    error: null,
    loading: false
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTRACTS:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_CONTRACTS_SUCCEEDED:
            return {
              ...state,
              loading: false,
              error: null,
              contracts: action.payload
            }
  
        case FETCH_CONTRACTS_FAILED:
            return {
              ...state,
              loading: false,
              error: action.payload,
              contracts: []
            }
  
        default:
        return state
    }
  }
  