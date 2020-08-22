import React from 'react'
import { connect } from 'react-redux'
import { stringifyIndexes } from './utils'


const CheckedItem = ({ item }) => {
  
  // TODO: Display better human readable results from "possibly in set" and "is in set" data passed in!

  let value = ''
  let bitIndexes = []
  let possiblyInSet = null
  let isInSet = null
  
  if ( item ) {
    value = item.value
    bitIndexes = item.bitIndexes
    possiblyInSet = item.possiblyInSet
    isInSet = item.isInSet
  }

  return (
    <div id="checked-item">
      <p>
        Checked Item: {value}<br/>
        Hash Output Indexes: {bitIndexes ? stringifyIndexes(bitIndexes) : null}<br/>
        Possibly In Set: {possiblyInSet}<br/>
        Is In Set: {isInSet}
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
