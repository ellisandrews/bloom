import React, { Component } from 'react'
import { connect } from 'react-redux'
import murmur3 from 'murmurhash-js'
import { addSetItem } from './actions/actionCreators/itemSet'
import { activateBit, setActiveBits } from './actions/actionCreators/filterArray'


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
    
    const { activateBit, addSetItem, setActiveBits } = this.props

    // Grab the item to be added to the set
    const item = this.state.value

    // Add the item to the set
    addSetItem(item)
    
    // Dispatch an action to toggle any currently 'active' bits to 'set'
    setActiveBits()
    
    // Hash the item using the hashing algorithms
    // NOTE: Modulo needs to be the length of the filterArray!
    // Currently using the same hashing algorithm (murmur3) but with a different seed/salt. Is this legitimate?
    const murmurValue1 = murmur3(item, 1) % 10
    const murmurValue2 = murmur3(item, 2) % 10

    // Dispatch actions to toggle the bits to 'active' from hashing output
    activateBit(murmurValue1)
    activateBit(murmurValue2)
    
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
  { activateBit, addSetItem, setActiveBits }
)(AddForm)
