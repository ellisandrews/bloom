import { SET_ADDED_ITEM, SET_CHECKED_ITEM } from '../actions/actionTypes'


const initialState = null


const addedItemReducer = (state = initialState, action) => {
  
  switch ( action.type ) {
    
    case SET_ADDED_ITEM:
      return action.item

    case SET_CHECKED_ITEM:
      return initialState
    
    default:
      return state
  }
}


export default addedItemReducer
