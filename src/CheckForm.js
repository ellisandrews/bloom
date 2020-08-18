import React, { Component } from 'react'
import { connect } from 'react-redux'
import murmur3 from 'murmurhash-js'
import { activateBits } from './actions/actionCreators/filterArray'
import { checkSetItem } from './actions/actionCreators/itemSet'


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

    // Grab the item to be added to the set
    const item = this.state.value

    // Set the checkedItem in state, and remove an addedItem if applicable
    checkSetItem(item)

    // Hash the item using the hashing algorithms
    // NOTE: Modulo needs to be the length of the filterArray!
    // Currently using the same hashing algorithm (murmur3) but with a different seed/salt. Is this legitimate?
    const bitIndexes = [
      murmur3(item, 1) % 32,
      murmur3(item, 2) % 32
    ]

    // Toggle the bits to 'active' from hashing output
    activateBits(bitIndexes)
    
    // Check whether the item is possibly in the set or definitely not in the set.
    // Need to use a regular for loop in order to break (for efficiency -- only need to see one non-toggled bit)
    let itemMayBeInSet = true
    for (let i = 0; i < bitIndexes.length; i++) {
      if ( !array[bitIndexes[i]] ) {
        itemMayBeInSet = false
        break
      }
    }

    // TODO: Actually display this result on the page somewhere
    // Check whether the hash output indexes are toggled or not
    itemMayBeInSet ? console.log(`'${item}' may be in the set`) : console.log(`'${item}' is definitely not in the set`)

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
