import { combineReducers } from 'redux'
import filterArrayReducer from './filterArrayReducer'


const rootReducer = combineReducers({
  filterArray: filterArrayReducer
})


export default rootReducer