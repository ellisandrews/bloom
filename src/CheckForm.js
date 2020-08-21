import React, { Component } from 'react'
import { connect } from 'react-redux'
import { activateBits } from './actions/actionCreators/filterArray'
import { checkSetItem } from './actions/actionCreators/itemSet'
import { createItem } from './utils'


class CheckForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
  }

  handleChange = event => {
    this.setState({value: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    
    const { activateBits, array, checkSetItem } = this.props

    // Create the item to be added to the set (perform hashing)
    const item = createItem(this.state.value)

    // Set the checkedItem in state, and remove an addedItem if applicable
    checkSetItem(item)

    // Toggle the bits to 'active' from hashing output
    activateBits(item.bitIndexes)
    
    // Check whether the item is possibly in the set or definitely not in the set.
    // Need to use a regular for loop in order to break (for efficiency -- only need to see one non-toggled bit)
    let itemMayBeInSet = true
    for (let i = 0; i < item.bitIndexes.length; i++) {
      if ( !array[item.bitIndexes[i]] ) {
        itemMayBeInSet = false
        break
      }
    }

    // TODO: Actually display this result on the page somewhere
    // Check whether the hash output indexes are toggled or not
    itemMayBeInSet ? console.log(`'${item.value}' may be in the set`) : console.log(`'${item.value}' is definitely not in the set`)

    // Reset the local form state to the empty string
    this.setState({value: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Check Item:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}


const mapStateToProps = state => {
  return {
    array: state.filter.array
  }
}


export default connect(
  mapStateToProps,
  { activateBits, checkSetItem }
)(CheckForm)
