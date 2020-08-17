import { ACTIVATE_BIT, SET_ACTIVE_BITS } from '../actions/actionTypes'


// TODO: Somehow set this dynamically to a specified number of bits?
const initialState = [null, null, null, null, null, null, null, null, null, null]


const filterArrayReducer = (state = initialState, action) => {
  
  switch ( action.type ) {
    
    case ACTIVATE_BIT:
      
      // Set the value of the array at the specified index to 'active'
      return state.map((bit, index) => {
        return index === action.index ? 'active' : bit
      })
  
    case SET_ACTIVE_BITS:
      // Change any currently 'active' bits to 'set'
      return state.map(bit => bit === 'active' ? 'set' : bit)

    default:
      return state
  }
}


export default filterArrayReducer
