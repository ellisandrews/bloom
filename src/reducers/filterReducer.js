import { ACTIVATE_BITS, TOGGLE_BITS } from '../actions/actionTypes'


const resetArray = size => {
  const array = []
  for ( let i = 0; i < size; i++ ) {
    array.push(false)
  }
  return array
}


// TODO: Somehow set this dynamically to a specified number of bits?
const initialState = {
  array: resetArray(32),
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
