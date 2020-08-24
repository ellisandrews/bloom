import React from 'react'
import { connect } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'
import AddForm from './AddForm'
import HashValues from './HashValues'


const AddContainer = ({ item }) => {
  
  return (
    <Container id="add-container" className="my-2 text-center">
      <Row className="justify-content-md-center">
        <Col md="auto" className="border-black rounded py-2 bg-green">
          <h4>Add Items</h4>
          <AddForm/>
          <HashValues values={item ? item.bitIndexes : null}/>
        </Col>
      </Row>
    </Container>
  )
}


const mapStateToProps = state => {
  return {
    item: state.addedItem
  }
}


export default connect(mapStateToProps)(AddContainer)
