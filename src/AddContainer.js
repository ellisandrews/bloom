import React from 'react'
import { Container } from 'react-bootstrap'
import AddedItem from './AddedItem'
import AddForm from './AddForm'


const AddContainer = () => {
  return (
    <Container id="AddContainer" className="border-black rounded my-2">
      <h4 className="py-3">Populate Bloom Filter</h4>
      <AddForm/>
      <AddedItem/>
    </Container>
  )
}


export default AddContainer
