import { ADD_SET_ITEM, CHECK_SET_ITEM } from '../actions/actionTypes'


const initialState = null


const addItemReducer = (state = initialState, action) => {
  
  switch ( action.type ) {
    
    case ADD_SET_ITEM:
      return {
        value: action.item.value,
        bitIndexes: action.item.bitIndexes
      }

    case CHECK_SET_ITEM:
      return initialState
    
    default:
      return state
  }
}


export default addItemReducer
