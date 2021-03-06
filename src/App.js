import React from 'react'
import { Container } from 'react-bootstrap'
import AboutContainer from './AboutContainer'
import VisualizationContainer from './VisualizationContainer'
import ImplementationContainer from './ImplementationContainer'
import IntroContainer from './IntroContainer'
import './App.css'


const App = () => {
  return (
    <Container id="app" className="bg-white my-2 rounded py-2">
      <h1 className="text-center py-2">Bloom Filters</h1>
      <p className="text-center">An interactive learning tool for Bloom filters.</p>
      <IntroContainer/>
      <ImplementationContainer/>
      <VisualizationContainer/>
      <AboutContainer/>
    </Container>
  )
}


export default App
