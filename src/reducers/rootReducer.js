import { combineReducers } from 'redux'
import addedItemReducer from './addedItemReducer'
import checkedItemReducer from './checkedItemReducer'
import filterReducer from './filterReducer'


const rootReducer = combineReducers({
  addedItem: addedItemReducer,
  checkedItem: checkedItemReducer,
  filter: filterReducer
})


export default rootReducer
