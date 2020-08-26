import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import AddContainer from './AddContainer'
import BitArray from './BitArray'
import CheckContainer from './CheckContainer'
import FilterData from './FilterData'
import InteractiveInfo from './InteractiveInfo'
import SetItems from './SetItems'


const VisualizationContainer = () => {
  return (
    <Accordion id="visualization-container" defaultActiveKey="0" className="my-2">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h4>Visualization</h4>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <InteractiveInfo/>
            <AddContainer/>
            <SetItems/>
            <BitArray/>
            <CheckContainer/>
            <FilterData/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}


export default VisualizationContainer
