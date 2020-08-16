import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    this.props.addSetItem(this.state.value)
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
  { addSetItem }
)(AddForm)
