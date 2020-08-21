import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BitArray.css'


class BitArray extends Component {
  
  renderSquares = () => {
    
    const { array, activeIndexes, addedItem, checkedItem } = this.props
    
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
          <rect width="20" height="20" x={currentX} y="240" className={rectClassName}/>
          <text x={currentX + 5.5} y="255.5" className={textClassName}>{bit ? 1 : 0}</text>
        </g>
      )
      // return <rect key={index} width="20" height="20" x={`${currentX}`} y="240" className={className} />
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

  // TODO: Display 0s and 1s in bit array, so you can tell even when 'active' 

  render() {
    return (
      <svg width="680" height="500">
        <defs>
          <marker id="arrowhead" markerWidth="5" markerHeight="5" refX="0" refY="2.5" orient="auto">
            <polygon points="0 0, 5 2.5, 0 5" />
          </marker>
        </defs>
        {/* TODO: Set the below `x` value dynamically based on this.props.item.length */}
        <text x="320" y="20" className="text">{this.props.addedItem}</text>
        {this.props.addedItem ? this.renderAddArrows() : null}
        {this.renderSquares()}
        {this.props.checkedItem ? this.renderCheckArrows() : null}
        <text x="320" y="480" className="text">{this.props.checkedItem}</text>
      </svg>
    )
  }
}


const mapStateToProps = state => {
  
  const { array, activeIndexes, addedItem, checkedItem } = state.filter
  
  return {
    array,
    activeIndexes,
    addedItem,
    checkedItem
  }
}


export default connect(mapStateToProps)(BitArray)
