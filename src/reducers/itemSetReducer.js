import { SET_ADDED_ITEM } from '../actions/actionTypes'


const itemSetReducer = (state = [], action) => {
  
  switch ( action.type ) {
    
    case SET_ADDED_ITEM:

      // Don't allow adding of items already in the set
      if (state.includes(action.item.value)) {
        return state
      }

      return [...state, action.item.value]

    default:
      return state
  }
}


export default itemSetReducer
