import React, { Component } from 'react'
import { connect } from 'react-redux'
import { activateBits, toggleBits } from './actions/actionCreators/filterArray'
import { addSetItem } from './actions/actionCreators/itemSet'
import { createItem } from './utils'


class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
  }

  handleChange = event => {
    this.setState({value: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    
    const { addSetItem, activateBits, toggleBits } = this.props

    // Create the item to be added to the set (perform hashing)
    const item = createItem(this.state.value)

    // Add the item to the set
    addSetItem(item)
    
    // Toggle the bits to `true` from hashing output
    toggleBits(item.bitIndexes)

    // Activate the bits to show which bits were just toggled
    activateBits(item.bitIndexes)
    
    // Reset the local form state to the empty string
    this.setState({value: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add Item:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}


export default connect(
  null,
  { addSetItem, activateBits, toggleBits }
)(AddForm)
