import { ACTIVATE_BITS, TOGGLE_BITS } from '../actionTypes'


export const activateBits = indexes => {
  return {
    type: ACTIVATE_BITS,
    indexes
  }
}

export const toggleBits = indexes => {
  return {
    type: TOGGLE_BITS,
    indexes
  }
}
