import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'
import CheckForm from './CheckForm'
import HashValues from './HashValues'
import { render } from '@testing-library/react'


class CheckContainer extends Component {
  
  renderResult = () => {
    // Possibilities
    // 1) No Item
    // 2) True positive
    // 3) False positive
    // 4) True negative

    const { item } = this.props

    // If there's no item, there is no result
    if (!item) {
      return null
    }

    let result
    let description
    if ( item.possiblyInSet ) {
      description = 'Possibly in the set'
      result = item.isInSet ? 'True Positive' : 'False Positive'
    } else {
      result = 'True Negative'
      description = 'Definitely not in the set'
    }

    return <p>{description} ({result})</p>
  }

  render() {
    const { item } = this.props
    return (
      <Container id="CheckContainer" className="my-2 text-center">
        <Row className="justify-content-md-center">
          <Col md="auto" className="border-black rounded py-2">
            <h4>Check Items</h4>
            <CheckForm/>
            <HashValues values={item ? item.bitIndexes : null}/>
            {this.renderResult()}
          </Col>
        </Row>
      </Container>
    )
  }
}


const mapStateToProps = state => {
  return {
    item: state.checkedItem
  }
}


export default connect(mapStateToProps)(CheckContainer)
