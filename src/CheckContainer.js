import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'
import CheckForm from './CheckForm'
import HashValues from './HashValues'


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

    let isFalsePositive
    let description
    let className
    if ( item.possiblyInSet ) {
      description = 'Possibly'
      className = 'text-blue'
      isFalsePositive = item.isInSet ? false : true
    } else {
      isFalsePositive = false
      description = 'Definitely not'
      className = 'text-pink'
    }

    return <p className={className}><b>{description}</b> in the set{isFalsePositive ? ' - False Positive!' : null}</p>
  }

  render() {
    const { item } = this.props
    return (
      <Container id="check-container" className="my-2 text-center">
        <Row className="justify-content-md-center">
          <Col md="auto" className="border-black rounded py-2 bg-yellow">
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
