import React from 'react'
import { Container } from 'react-bootstrap'
import AddContainer from './AddContainer'
import CheckContainer from './CheckContainer'
import FilterContainer from './FilterContainer'
import './App.css'


const App = () => {
  return (
    <Container id="App" className="bg-white my-2 rounded">
      <h1 className="py-4 text-center">Bloom Filter Visualizer</h1>
      <AddContainer/>
      <FilterContainer/>
      <CheckContainer/>
    </Container>
  )
}


export default App
