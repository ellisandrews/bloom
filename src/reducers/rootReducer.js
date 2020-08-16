import { combineReducers } from 'redux'
import filterArrayReducer from './filterArrayReducer'
import itemSetReducer from './itemSetReducer'


const rootReducer = combineReducers({
  filterArray: filterArrayReducer,
  itemSet: itemSetReducer
})


export default rootReducer
