import React from 'react'
import { Container } from 'react-bootstrap'


const IntroContainer = () => {
  return (
    <Container id="intro-container" className="border-black rounded my-2">
      <h3 className="py-3">Introduction</h3>
      <p>Welcome to the Bloom Filter Visualizer - a simple, interactive tool explaining how Bloom filters work.</p>
      <p>
        If you are not already familiar, a Bloom filter is a probabilistic data structure that is used to test 
        whether an item is a member of a set.
      </p>
    </Container>
  )
}


export default IntroContainer
