import { SET_ADDED_ITEM, SET_CHECKED_ITEM } from '../actions/actionTypes'


const initialState = null


const checkedItemReducer = (state = initialState, action) => {
  
  switch ( action.type ) {
    
    case SET_ADDED_ITEM:
      return initialState

    case SET_CHECKED_ITEM:
      return action.item
    
    default:
      return state
  }
}


export default checkedItemReducer
