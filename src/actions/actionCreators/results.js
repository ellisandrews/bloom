import { UPDATE_RESULTS } from '../actionTypes'


export const updateResults = isInSet => {  
  return {
    type: UPDATE_RESULTS,
    isInSet
  }
}
