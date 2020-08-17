import { ACTIVATE_BITS, TOGGLE_BITS } from '../actions/actionTypes'


// TODO: Somehow set this dynamically to a specified number of bits?
const initialState = {
  array: [false, false, false, false, false, false, false, false, false, false],
  activeIndexes: []
}


const filterReducer = (state = initialState, action) => {
  
  switch ( action.type ) {
    
    case ACTIVATE_BITS:
      // Set the activeIndexes
      return {
        ...state,
        activeIndexes: action.indexes
      }

    case TOGGLE_BITS:
      // Set bits in the array to true
      return {
        ...state,
        array: state.array.map((bit, index) => action.indexes.includes(index) ? true : bit)
      }

    default:
      return state
  }
}


export default filterReducer
