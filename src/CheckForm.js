import React, { Component } from 'react'
import { connect } from 'react-redux'
import { activateBits } from './actions/actionCreators/filterArray'
import { setCheckedItem } from './actions/actionCreators/itemSet'
import { createItem } from './utils'


class CheckForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
  }

  handleChange = event => {
    this.setState({value: event.target.value})
  }

  isItemPossiblyInSet = item => {
    // Check an item against the Bloom filter for membership. Return true if item may be in the set, false if definitely not in the set.    
    // As soon as we see one non-toggled bit we know it's definitely not in the set
    for (let i = 0; i < item.bitIndexes.length; i++) {
      if ( !this.props.array[item.bitIndexes[i]] ) {
        return false
      }
    }
    return true
  }

  isItemInSet = item => {
    // Check the tracked item set for whether the item is indeed in the set or not
    return this.props.itemSet.includes(item.value)
  }

  handleSubmit = event => {
    event.preventDefault()
    
    const { activateBits, setCheckedItem } = this.props

    // Create the basic item to be added to the set (perform hashing)
    const item = createItem(this.state.value)
    
    // Check whether the item may be in the set using the Bloom filter
    item.possiblyInSet = this.isItemPossiblyInSet(item)

    // Check whether the item IS in the set using the tracked set items
    item.isInSet = this.isItemInSet(item)

    // Set the checkedItem in state (and remove an addedItem if applicable)
    setCheckedItem(item)

    // Toggle the bits to 'active' from hashing output
    activateBits(item.bitIndexes)
    
    // Reset the local form state to the empty string
    this.setState({value: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Check Item:
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter a value"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}


const mapStateToProps = state => {
  return {
    array: state.filter.array,
    itemSet: state.filter.itemSet
  }
}


export default connect(
  mapStateToProps,
  { activateBits, setCheckedItem }
)(CheckForm)
