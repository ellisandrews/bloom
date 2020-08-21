import { ADD_SET_ITEM } from '../actions/actionTypes'


const itemSetReducer = (state = [], action) => {
  
  switch ( action.type ) {
    
    case ADD_SET_ITEM:

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
