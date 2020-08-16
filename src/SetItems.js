import React, { Component } from 'react'
import { connect } from 'react-redux'


class SetItems extends Component {
  
  renderSetItems = () => {
    return this.props.itemSet.map((item, index) => <li key={index}>{item}</li>)
  }
  
  render() {
    return (
      <div id="set-items">
        <ul>
          {this.renderSetItems()}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    itemSet: state.itemSet
  }
}


export default connect(mapStateToProps)(SetItems)
