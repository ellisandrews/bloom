import React from 'react'
import { connect } from 'react-redux'


const SetItems = ({ itemSet }) => {
  return (
    <div id="set-items">
      <p>Set Items: {'{ ' + itemSet.join(', ') + ' }'}</p>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    itemSet: state.itemSet
  }
}


export default connect(mapStateToProps)(SetItems)
