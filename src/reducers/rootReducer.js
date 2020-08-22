import { combineReducers } from 'redux'
import addedItemReducer from './addedItemReducer'
import checkedItemReducer from './checkedItemReducer'
import filterReducer from './filterReducer'
import itemSetReducer from './itemSetReducer'


const rootReducer = combineReducers({
  filter: filterReducer,
  itemSet: itemSetReducer,
  addedItem: addedItemReducer,
  checkedItem: checkedItemReducer
})


export default rootReducer
