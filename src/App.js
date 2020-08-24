import React from 'react'
import { Container } from 'react-bootstrap'
import FilterContainer from './FilterContainer'
import IntroContainer from './IntroContainer'
import './App.css'


const App = () => {
  return (
    <Container id="App" className="bg-white my-2 rounded">
      <h1 className="py-4 text-center">Bloom Filter Visualizer</h1>
      <IntroContainer/>
      <FilterContainer/>
    </Container>
  )
}


export default App
