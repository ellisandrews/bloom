import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BitArray.css'


class BitArray extends Component {
  
  renderSquares = () => {
    
    const { array, activeIndexes, checkedItem } = this.props
    
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

      if ( activeIndexes.includes(index) && checkedItem ) {
        rectClassName += ' square-checked'
        textClassName += ' text-checked'
      }

      return (
        <g key={index}>
          <rect width="20" height="20" x={currentX} y="190" className={rectClassName}/>
          <text x={currentX + 5.5} y="205.5" className={textClassName}>{bit ? 1 : 0}</text>
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
      return <line key={key} x1="340" y1="30" x2={index*20 + this.getArrowXOffset(index)} y2="175" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
    })
  }

  renderCheckArrows = () => {
    return this.props.activeIndexes.map((index, key) => {  
      return <line key={key} x1="340" y1="360" x2={index*20 + this.getArrowXOffset(index)} y2="225" stroke="black" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
    })
  }

  renderaddedItem = () => {
    const { addedItem } = this.props
    
    if ( addedItem ) {
      return (
        <>
          <text x="340" y="20" className="text" textAnchor="middle">"{addedItem.value}"</text>
          {this.renderAddArrows()}
        </>
      )
    }
  }

  rendercheckedItem = () => {
    const { checkedItem } = this.props
    
    if ( checkedItem ) {
      return (
        <>
        <text x="340" y="380" className="text" textAnchor="middle">"{checkedItem.value}"</text>
          {this.renderCheckArrows()}
        </>
      )
    }
  }
  
  render() {
    return (
      <div id="BitArray" className="text-center">
        <svg width="680" height="400">
          <defs>
            <marker id="arrowhead" markerWidth="5" markerHeight="5" refX="0" refY="2.5" orient="auto">
              <polygon points="0 0, 5 2.5, 0 5" />
            </marker>
          </defs>
          {this.renderaddedItem()}
          {this.renderSquares()}
          {this.rendercheckedItem()}
        </svg>
      </div>
    )
  }
}


const mapStateToProps = state => {
  
  const { filter: { array, activeIndexes }, addedItem, checkedItem } = state
  
  return {
    array,
    activeIndexes,
    addedItem,
    checkedItem
  }
}


export default connect(mapStateToProps)(BitArray)
