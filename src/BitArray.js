import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from './Square'
import './BitArray.css'


class BitArray extends Component {
  
  renderSquares = () => {
    return this.props.filterArray.map((bit, index) => {
      switch ( bit ) {
        case 'active':
          return <Square active key={index} index={index}/>
        case 'set':
          return <Square set key={index} index={index}/>
        default:
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
    filterArray: state.filterArray
  }
}


export default connect(mapStateToProps)(BitArray)
