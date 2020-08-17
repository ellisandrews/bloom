import { ACTIVATE_BIT, SET_ACTIVE_BITS } from '../actionTypes'


export const activateBit = index => {
  return {
    type: ACTIVATE_BIT,
    index: index
  }
}

export const setActiveBits = () => {
  return {
    type: SET_ACTIVE_BITS
  }
}
