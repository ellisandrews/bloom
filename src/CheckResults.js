import React from 'react'
import { connect } from 'react-redux'


const CheckResults = ({ isInSet, itemSet, checkItem }) => {
  
  let result = ''
  let isFalsePositive = ''
  let falsePositiveRate = ''

  // If isInSet is NOT null, a check was performed and there will be data to display
  if ( isInSet !== null ) {
    
    // Result will start with value in quotes
    result += `"${checkItem.value}"`

    

  }

  if ( isInSet ) {    
    result += ' may be in the set'
    // Check the actual set to see if it's a false positive
    if ( !itemSet.includes(checkItem.value) ) {
      falsePostive += ' (False positive!)'
    }
  } else {
    result += ' is definitely not in the set'
  }

  return (
    <div id="results">
      <p>
        Result: {result}<br/>
        False Positive: {isFalsePositive}
        False Positive Rate: {falsePositiveRate}
      </p>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    isInSet: state.checkResults.isInSet,
    itemSet: state.itemSet,
    checkedItem: state.checkedItem
  }
}


export default connect(mapStateToProps)(CheckResults)
