import React from 'react'
import BitArray from './BitArray'
import AddForm from './AddForm'
import SetItems from './SetItems'


const App = () => {
  return (
    <div className="App">
      <h1>Bloom Filter Visualizer</h1>
      <AddForm/>
      <BitArray/>
      <SetItems/>
    </div>
  )
}


export default App
