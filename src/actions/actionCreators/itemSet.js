import { ADD_SET_ITEM, CHECK_SET_ITEM } from '../actionTypes'


export const addSetItem = item => {  
  return {
    type: ADD_SET_ITEM,
    item: item
  }
}

export const checkSetItem = item => {  
  return {
    type: CHECK_SET_ITEM,
    item: item
  }
}
