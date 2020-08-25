import React from 'react'
import { Container } from 'react-bootstrap'
import AboutContainer from './AboutContainer'
import FilterContainer from './FilterContainer'
import IntroContainer from './IntroContainer'
import './App.css'


const App = () => {
  return (
    <Container id="app" className="bg-white my-2 rounded">
      <h1 className="py-4 text-center">Bloom Filters</h1>
      <IntroContainer/>
      <FilterContainer/>
      <AboutContainer/>
    </Container>
  )
}


export default App
