import React from 'react'
import { connect } from 'react-redux'


const FilterData = ({ itemSet }) => {
  return (
    <div id="filter-data">
      <p>
        Set Items: {'{ ' + itemSet.join(', ') + ' }'}
      </p>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    itemSet: state.filter.itemSet
  }
}


export default connect(mapStateToProps)(FilterData)
