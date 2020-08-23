import React from 'react'
import { Container } from 'react-bootstrap'
import AddedItem from './AddedItem'
import AddForm from './AddForm'
import FilterData from './FilterData'


const AddContainer = () => {
  return (
    <Container id="AddContainer">
      <h4 className="py-3">Populate Bloom Filter</h4>
      <AddForm/>
      <AddedItem/>
      <FilterData/>
    </Container>
  )
}


export default AddContainer
