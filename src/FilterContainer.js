import React from 'react'
import { Container } from 'react-bootstrap'
import AddContainer from './AddContainer'
import BitArray from './BitArray'
import CheckContainer from './CheckContainer'
import FilterData from './FilterData'
import InteractiveInfo from './InteractiveInfo'
import SetItems from './SetItems'


const FilterContainer = () => {
  return (
    <Container id="FilterContainer" className="border-black rounded my-2">
      <InteractiveInfo/>
      <AddContainer/>
      <SetItems/>
      <BitArray/>
      <CheckContainer/>
      <FilterData/>
    </Container>
  )
}


export default FilterContainer
