import React from 'react'
import { Container } from 'react-bootstrap'
import AddContainer from './AddContainer'
import BitArray from './BitArray'
import CheckContainer from './CheckContainer'


const App = () => {
  return (
    <Container id="App" className="bg-white my-2">
      <h1 className="py-4 text-center">Bloom Filter Visualizer</h1>
      <AddContainer/>
      <BitArray/>
      <CheckContainer/>
    </Container>
  )
}


export default App
