import { ACTIVATE_BIT, SET_BIT } from '../actionTypes'


export const activateBit = index => {
  return {
    type: ACTIVATE_BIT,
    index: index
  }
}


export const setBit = index => {
  return {
    type: SET_BIT,
    index: index
  }
}
