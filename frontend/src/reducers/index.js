import { combineReducers } from 'redux'
import counter from './counter'
import data from './data'

export default combineReducers({
  counter,
  data
})
