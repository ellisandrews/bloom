import React, { Component } from 'react'
import { connect } from 'react-redux'
import murmur3 from 'murmurhash-js'
import { activateBits, toggleBits } from './actions/actionCreators/filterArray'
import { addSetItem } from './actions/actionCreators/itemSet'


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

    // Grab the item to be added to the set
    const item = this.state.value

    // Add the item to the set
    addSetItem(item)
    
    // Hash the item using the hashing algorithms
    // NOTE: Modulo needs to be the length of the filterArray!
    // Currently using the same hashing algorithm (murmur3) but with a different seed/salt. Is this legitimate?
    const bitIndexes = [
      murmur3(item, 1) % 32,
      murmur3(item, 2) % 32
    ]

    // Toggle the bits to `true` from hashing output
    toggleBits(bitIndexes)

    // Activate the bits to show which bits were just toggled
    activateBits(bitIndexes)
    
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
