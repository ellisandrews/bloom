import { combineReducers } from 'redux'
import addItemReducer from './addItemReducer'
import checkItemReducer from './checkItemReducer'
import filterReducer from './filterReducer'
import itemSetReducer from './itemSetReducer'


const rootReducer = combineReducers({
  filter: filterReducer,
  itemSet: itemSetReducer,
  addItem: addItemReducer,
  checkItem: checkItemReducer
})


export default rootReducer
