import React from 'react'
import { Accordion, Card } from 'react-bootstrap'


const IntroContainer = () => {
  return (
    <Accordion id="intro-container" defaultActiveKey="0" className="my-2">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h4>Introduction</h4>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <h5>What is a Bloom Filter?</h5>
            <p>
              A Bloom filter is a probabilistic data structure that is used to test whether an item is a member of a set.
              A Bloom filter that has been populated with a set of items is able to give one of two responses when asked if an item is a member of the set:
            </p>
            <p>
              <ol>
                <li>The item is <b className="text-pink"><i>definitely not</i></b> in the set.</li>
                <li>The item is <b className="text-blue"><i>possibly</i></b> in the set.</li>
              </ol>
            </p>
            <p>
              Bloom filters do not store copies of the items themselves (more on this below), and thus are able to be incredibly space-efficient.
              This comes with the tradeoff of being <i>probabilistic</i> - they can say with certainty that an item is <i>not</i> in the set,
              but they cannot say with certainty whether an item <i>is</i> in the set. With careful planning, however, the level of uncertainty can be bounded.
            </p>
            <h5>Use Cases</h5>
            <p>
              Here a few possible use cases for Bloom filters:
            </p>
            <p>
              <ul>
                <li>Checking if a username is already in use.</li>
                <li>Bypassing expensive network or disk lookups for non-existent keys.</li>
                <li>Avoiding recommending content to a user that they have already seen.</li>
              </ul>
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}


export default IntroContainer
