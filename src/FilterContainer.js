import React from 'react'
import { Container } from 'react-bootstrap'
import AddContainer from './AddContainer'
import BitArray from './BitArray'
import CheckContainer from './CheckContainer'
import FilterData from './FilterData'
import SetItems from './SetItems'


const FilterContainer = () => {
  return (
    <Container id="FilterContainer" className="border-black rounded my-2">
      <h4 className="py-3 text-center">Bloom Filter</h4>
      <AddContainer/>
      <SetItems/>
      <BitArray/>
      <CheckContainer/>
      <FilterData/>
    </Container>
  )
}


export default FilterContainer
