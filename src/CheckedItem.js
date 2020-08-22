import React from 'react'
import { connect } from 'react-redux'
import { stringifyIndexes } from './utils'


const CheckedItem = ({ item }) => {
  
  // TODO: Display better human readable results from "possibly in set" and "is in set" data passed in!

  let value = ''
  let bitIndexes = []
  let result = ''
  
  if ( item ) {
    value = item.value
    bitIndexes = item.bitIndexes
    result = item.possiblyInSet ? 'Possibly in the set' : 'Definitely not in the set'

    // Note whether the result is a false positive if applicable
    if ( item.possiblyInSet && !item.isInSet ) {
      result += ' - False positive!'
    }
  }

  return (
    <div id="checked-item">
      <p>
        Checked Item: {value}<br/>
        Hash Output Indexes: {bitIndexes ? stringifyIndexes(bitIndexes) : null}<br/>
        Result: {result}<br/>
      </p>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    item: state.checkedItem
  }
}


export default connect(mapStateToProps)(CheckedItem)
