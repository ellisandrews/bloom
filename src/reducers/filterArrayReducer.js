const initialState = [null, null, null, null, null]


const filterArrayReducer = (state = initialState, action) => {
  
  switch ( action.type ) {
    
    case 'ACTIVATE_BIT':
      
      // Set the value of the array at the specified index to 'active'
      return state.map((bit, index) => {
        return index === action.index ? 'active' : bit
      })
  
    case 'SET_BIT':
      // Set the value of the array at the specified index to 'set'
      return state.map((bit, index) => {
        return index === action.index ? 'set' : bit
      })

    default:
      return state
  }
}


export default filterArrayReducer
