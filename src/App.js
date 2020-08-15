import React from 'react'
import BitArray from './BitArray'


const App = () => {
  return (
    <div className="App">
      <h1>Bloom Filter Visualizer</h1>
      <BitArray size={10}></BitArray>
    </div>
  )
}


export default App
