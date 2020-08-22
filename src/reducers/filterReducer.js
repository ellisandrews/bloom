import { ACTIVATE_BITS, SET_ADDED_ITEM, TOGGLE_BITS } from '../actions/actionTypes'


const initializeBitArray = size => {
  const array = []
  for ( let i = 0; i < size; i++ ) {
    array.push(false)
  }
  return array
}


// TODO: Dynamically set array size and number of hash functions
const initialState = {
  array: initializeBitArray(32),
  activeIndexes: [],
  itemSet: [],
  numHashFunctions: 2
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

    case SET_ADDED_ITEM:
      // Add an item to the itemSet. Don't allow adding of items already in the set.
      if (state.itemSet.includes(action.item.value)) {
        return state
      }

      return {
        ...state,
        itemSet: [...state.itemSet, action.item.value]
      }

    default:
      return state
  }
}


export default filterReducer
