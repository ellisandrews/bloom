import React, { useState } from 'react'
import { Accordion, Card, Col, Row } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const AboutContainer = () => {
  
  const [collapsed, toggleCollapsed] = useState(false)
  
  return (
    <Accordion id="about-container" defaultActiveKey="0" className="my-2">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={() => toggleCollapsed(!collapsed)}>
          <Row className="align-items-center">
            <Col>
              <h4 className="m-0">About</h4>
            </Col>
            <Col className="text-right">
              <FontAwesomeIcon icon={ collapsed ? faChevronRight : faChevronDown }/>  
            </Col>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>GitHub Repository: <a href="https://github.com/ellisandrews/bloom">github.com/ellisandrews/bloom</a></p>
            <p>Created by Ellis Andrews. Connect with me!</p>
            <div id="social-icons" className="my-3">
              <span>
                <SocialIcon className="mx-1" url="https://github.com/ellisandrews"/>
                <SocialIcon className="mx-1" url="https://www.linkedin.com/in/ellis-andrews/"/>
                <SocialIcon className="mx-1" url="https://medium.com/@ellisandrews1"/>
              </span>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}


export default AboutContainer
