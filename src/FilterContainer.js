import React from 'react'
import { Container } from 'react-bootstrap'
import BitArray from './BitArray'
import FilterData from './FilterData'


const FilterContainer = () => {
  return (
    <Container id="FilterContainer" className="border-black rounded my-2">
      <h4 className="py-3 text-center">Bloom Filter</h4>
      <FilterData/>
      <BitArray/>
    </Container>
  )
}


export default FilterContainer
