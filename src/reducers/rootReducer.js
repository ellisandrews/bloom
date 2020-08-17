import { combineReducers } from 'redux'
import filterReducer from './filterReducer'
import itemSetReducer from './itemSetReducer'


const rootReducer = combineReducers({
  filter: filterReducer,
  itemSet: itemSetReducer
})


export default rootReducer
