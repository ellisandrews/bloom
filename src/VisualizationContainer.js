import React, { useState } from 'react'
import { Accordion, Card, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import AddContainer from './AddContainer'
import BitArray from './BitArray'
import CheckContainer from './CheckContainer'
import FilterData from './FilterData'
import InteractiveInfo from './InteractiveInfo'
import SetItems from './SetItems'


const VisualizationContainer = () => {

  const [collapsed, toggleCollapsed] = useState(false)

  return (
    <Accordion id="visualization-container" defaultActiveKey="0" className="my-2">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={() => toggleCollapsed(!collapsed)}>
          <Row className="align-items-center">
            <Col>
              <h4 className="m-0">Visualization</h4>
            </Col>
            <Col className="text-right">
              <FontAwesomeIcon icon={ collapsed ? faChevronRight : faChevronDown }/>  
            </Col>
          </Row>
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
