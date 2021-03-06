import axios from 'axios'

export const FETCH_CONTRACTS = 'FETCH_CONTRACTS'
export const FETCH_CONTRACTS_SUCCEEDED = 'FETCH_CONTRACTS_SUCCEEDED'
export const FETCH_CONTRACTS_FAILED = 'FETCH_CONTRACTS_FAILED'



const CONTRACTS_ENDPOINT = 'http://18.202.59.170:5000/items'

export const fetchContracts = () => dispatch => {
    dispatch({type: FETCH_CONTRACTS})
    axios.get(CONTRACTS_ENDPOINT).then(result => {
        dispatch(fetchContractsSucceeded(result))
    }).catch(error => {
        dispatch(fetchContractsFailed(error))
    })

}


export const fetchContractsSucceeded = (result) => ({
    type: FETCH_CONTRACTS_SUCCEEDED,
    payload: result.data || []
})

export const fetchContractsFailed = (error) => ({
    type: FETCH_CONTRACTS_FAILED,
    payload: error
})

export const changeAutoRenewal = (id, newState) => dispatch => {
    return axios.post(`http://18.202.59.170:5000/items/${id}/${newState ? 'auto_on' : 'auto_off'}`).then(() => {
        dispatch(fetchContracts())
    }).catch((e) => console.log(e))
}

export const cancelContract = (id) => dispatch => {
    return axios.post(`http://18.202.59.170:5000/items/${id}/terminate`).then(() => {
        dispatch(fetchContracts())
    }).catch((e) => console.log(e))
}

export const orderContract = (id) => dispatch => {
    return axios.post(`http://18.202.59.170:5000/items/${id}/order`).then(() => {
        dispatch(fetchContracts())
    }).catch((e) => console.log(e))
}

export const resetData = () => dispatch => {
    return axios.post(`http://18.202.59.170:5000/reset`).then(() => {
        dispatch(fetchContracts())
    }).catch((e) => console.log(e))
}
