import React, { Component } from 'react'
import { connect } from 'react-redux'


class FilterData extends Component {
  
  getFalsePositiveRate = (k, m, n) => {
    // Calculate the false positive rate of the filter
    // k --> Number of hash functions
    // m --> Number of bits in the array
    // n --> Number of items added to the array
    return (1 - (1 - 1/m)**(k*n))**k
  }
  
  render() {

    const { array, itemSet, numHashFunctions } = this.props
    const falsePositiveRate = this.getFalsePositiveRate(numHashFunctions, array.length, itemSet.length)
    const falsePostivePct = (falsePositiveRate * 100).toFixed(2)

    return (
      <div id="filter-data" className="text-center">
        <p>False Positive Rate: {falsePostivePct}%</p>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    array: state.filter.array,
    itemSet: state.filter.itemSet,
    numHashFunctions: state.filter.numHashFunctions
  }
}


export default connect(mapStateToProps)(FilterData)
