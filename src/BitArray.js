import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BitArray.css'


class BitArray extends Component {
  
  renderSquares = () => {
    
    const { array, activeIndexes, checkItem } = this.props
    
    let currentX = 0

    // Return properly styled bit array squares
    return array.map((bit, index) => {

      currentX += 20

      let rectClassName = 'square'
      let textClassName = 'text'

      if ( bit ) {
        rectClassName += ' square-toggled'
        textClassName += ' text-toggled'
      }

      if ( activeIndexes.includes(index) && checkItem ) {
        rectClassName += ' square-checked'
        textClassName += ' text-checked'
      }

      return (
        <g key={index}>
          <rect width="20" height="20" x={currentX} y="240" className={rectClassName}/>
          <text x={currentX + 5.5} y="255.5" className={textClassName}>{bit ? 1 : 0}</text>
        </g>
      )
    })
  }

  getArrowXOffset = index => {
    let offset
    if ( index <= 12 ) {
      offset = 35
    } else if ( index <= 16 ) {
      offset = 30
    } else if ( index < 21 ) {
      offset = 25
    } else {
      offset = 22
    }
    return offset
  }

  renderAddArrows = () => {
    return this.props.activeIndexes.map((index, key) => {  
      return <line key={key} x1="340" y1="30" x2={index*20 + this.getArrowXOffset(index)} y2="225" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
    })
  }

  renderCheckArrows = () => {
    return this.props.activeIndexes.map((index, key) => {  
      return <line key={key} x1="340" y1="470" x2={index*20 + this.getArrowXOffset(index)} y2="275" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
    })
  }

  renderAddItem = () => {
    const { addItem } = this.props
    
    if ( addItem ) {
      return (
        <>
          <text x="320" y="20" className="text">{addItem.value}</text>
          {this.renderAddArrows()}
        </>
      )
    }
  }

  renderCheckItem = () => {
    const { checkItem } = this.props
    
    if ( checkItem ) {
      return (
        <>
        <text x="320" y="480" className="text">{checkItem.value}</text>
          {this.renderCheckArrows()}
        </>
      )
    }
  }
  
  render() {
    return (
      <svg width="680" height="500">
        <defs>
          <marker id="arrowhead" markerWidth="5" markerHeight="5" refX="0" refY="2.5" orient="auto">
            <polygon points="0 0, 5 2.5, 0 5" />
          </marker>
        </defs>
        {this.renderAddItem()}
        {this.renderSquares()}
        {this.renderCheckItem()}
      </svg>
    )
  }
}


const mapStateToProps = state => {
  
  const { filter: { array, activeIndexes }, addItem, checkItem } = state
  
  return {
    array,
    activeIndexes,
    addItem,
    checkItem
  }
}


export default connect(mapStateToProps)(BitArray)
