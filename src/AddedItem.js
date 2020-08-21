import React from 'react'
import { connect } from 'react-redux'
import { stringifyIndexes } from './utils'


const AddedItem = ({ item }) => {
  return (
    <div id="added-item">
      { item ? <p>Added Item: {item.value}<br/>Hashed Indexes: {stringifyIndexes(item.bitIndexes)}</p> : null }
    </div>
  )
}


const mapStateToProps = state => {
  return {
    item: state.addItem
  }
}


export default connect(mapStateToProps)(AddedItem)
