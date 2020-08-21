const initialState = {
  isInSet: null
}


const checkResultsReducer = (state = initialState, action) => {
  
  switch ( action.type ) {
    
    case SOME_CASE:
      return {
        ...state
      }
    
    default:
      return state
  }
}


export default checkResultsReducer
