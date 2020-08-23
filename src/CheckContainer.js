import React from 'react'
import { Container } from 'react-bootstrap'
import CheckedItem from './CheckedItem'
import CheckForm from './CheckForm'


const CheckContainer = () => {
  return (
    <Container id="CheckContainer" className="border-black rounded my-2">
      <h4 className="py-3">Query Bloom Filter</h4>
      <CheckForm/>
      <CheckedItem/>
    </Container>
  )
}


export default CheckContainer
