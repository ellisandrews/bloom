import React from 'react'
import { connect } from 'react-redux'
import { stringifyIndexes } from './utils'


const AddedItem = ({ item }) => {
  
  let itemValue = ''
  let itemIndexes = []
  if ( item ) {
    itemValue = item.value
    itemIndexes = item.bitIndexes
  } 
  
  return (
    <div id="added-item">
      <p>
        Added Item: {itemValue}<br/>
        Hash Output Indexes: {stringifyIndexes(itemIndexes)}
      </p>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    item: state.addedItem
  }
}


export default connect(mapStateToProps)(AddedItem)
