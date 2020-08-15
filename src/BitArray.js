import React, { Component } from 'react'
import Square from './Square'
import './BitArray.css'


class BitArray extends Component {
  
  constructor(props) {
    super(props)

    const array = []
    for (var i = 0; i < props.size; i++) {
      array.push(undefined)
    }

    this.state = {
      array: array
    }
  }

  renderSquares = () => {
    return this.state.array.map((bit, index) => {
      switch ( bit ) {
        case 'active':
          return <Square active key={index}/>
        case 'set':
          return <Square set key={index}/>
        default:
          return <Square key={index}/> 
      }
    })
  }
  
  render() {
    return (
      <div className="bit-array">
        {this.renderSquares()}
      </div>
    )
  }
}


export default BitArray
