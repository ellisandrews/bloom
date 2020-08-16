import { ADD_SET_ITEM } from '../actions/actionTypes'


const itemSetReducer = (state = [], action) => {
  
  switch ( action.type ) {
    
    case ADD_SET_ITEM:
      return [...state, action.item]

    default:
      return state
  }
}


export default itemSetReducer
