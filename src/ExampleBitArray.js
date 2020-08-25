import React, { Component } from 'react'


class ExampleBitArray extends Component {
  
  renderSquares = () => {
    
    const { size, toggledIndexes, checkedIndexes } = this.props

    let currentX = 0
    const squares = []

    for (let index = 0; index < size; index++) {
      
      currentX += 20
      
      let rectClassName = 'square'
      let textClassName = 'text'

      const bitToggled = toggledIndexes && toggledIndexes.includes(index)
      const bitChecked = checkedIndexes && checkedIndexes.includes(index)

      if ( bitToggled ) {
        rectClassName += ' square-toggled'
        textClassName += ' text-toggled'
      }

      if ( bitChecked ) {
        rectClassName += ' square-checked'
        textClassName += ' text-checked'
      }
      
      squares.push(
        <g key={index}>
          <rect width="20" height="20" x={currentX} y="10" className={rectClassName}/>
          <text x={currentX + 5.5} y="25.5" className={textClassName}>{ bitToggled ? 1 : 0}</text>
          <text x={currentX + 5.5} y="50" className="text">{index}</text>
        </g>
      )
    }

    return squares
  }

  render() {
    return (
      <div className="py-2">
        <svg width={this.props.size * 20 + 40} height="60">
        {this.renderSquares()}
        </svg>
      </div>
    )
  }
}


export default ExampleBitArray
