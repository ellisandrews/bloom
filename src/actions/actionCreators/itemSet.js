import { SET_ADDED_ITEM, SET_CHECKED_ITEM } from '../actionTypes'


export const setAddedItem = item => {  
  return {
    type: SET_ADDED_ITEM,
    item
  }
}

export const setCheckedItem = item => {  
  return {
    type: SET_CHECKED_ITEM,
    item
  }
}
