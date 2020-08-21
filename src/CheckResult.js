import React from 'react'
import { connect } from 'react-redux'


const CheckResult = props => {
  return (
    <p>{props.text}</p>
  )
}


const mapStateToProps = state => {
  return {
    text: state.checkResultText
  }
}


export default connect(mapStateToProps)(CheckResult)
