import { ADD_SET_ITEM } from '../actionTypes'


export const addSetItem = item => {  
  return {
    type: ADD_SET_ITEM,
    item: item
  }
}
