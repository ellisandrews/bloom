import React from 'react'
import BitArray from './BitArray'
import AddedItem from './AddedItem'
import AddForm from './AddForm'
import CheckedItem from './CheckedItem'
import CheckForm from './CheckForm'
import SetItems from './SetItems'


const App = () => {
  return (
    <div className="App">
      <h1>Bloom Filter Visualizer</h1>
      <AddForm/>
      <AddedItem/>
      <SetItems/>
      <BitArray/>
      <CheckForm/>
      <CheckedItem/>
    </div>
  )
}


export default App
