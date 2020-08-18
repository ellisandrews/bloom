import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from './Square'
import './BitArray.css'


class BitArray extends Component {
  
  renderSquares = () => {
    const { array, activeIndexes } = this.props
    
    // Return appropriate Square (activated, toggled, or blank)
    return array.map((bit, index) => {  
      if ( activeIndexes.includes(index) ) {
        return bit ? <Square active set key={index} index={index}/> : <Square active key={index} index={index}/>
      } else if ( bit ) {
        return <Square set key={index} index={index}/>
      } else {
        return <Square key={index} index={index}/>
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


const mapStateToProps = state => {
  return {
    array: state.filter.array,
    activeIndexes: state.filter.activeIndexes
  }
}


export default connect(mapStateToProps)(BitArray)
