import React from 'react'
import './Square.css'


const Square = props => {
  // Component representing a single square of the bloom filter bit array 

  let className = 'square'

  if (props.active) {
    className += ' square-active'
  }
  
  if (props.set) {
    className += ' square-set'
  }

  return <div className={className}></div>

}


export default Square
