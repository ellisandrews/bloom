import React from 'react'
import { Accordion, Card, Col, Row } from 'react-bootstrap'
import ExampleBitArray from './ExampleBitArray'


const ImplementationContainer = () => {
  return (
    <Accordion id="implementation-container" defaultActiveKey="0" className="my-2">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h4>Implementation</h4>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <h5>Data Structure</h5>
            <p>
              The underlying data structure at the heart of Bloom filters is a bit array. 
              All bits in the array are initially set to 0.
            </p>
            <div id="ex-empty-bit-array" className="text-center">
              <ExampleBitArray size={10}/>
            </div>
            <h5>Adding Items</h5>
            <p>
              Items are added to the filter by being run through a number of hash functions, which each produce an integer value within the range of bit array indexes.
              The bits at the positions output by the hash functions are toggled to 1.
            </p>
            <div id="add-example" className="text-center">
              <p>
              <b className="text-green">Add Item:</b> "Foo"
              </p>
              <p>
                HashFunction1("Foo") = 1
                <br/>
                HashFunction2("Foo") = 6
              </p>
              <ExampleBitArray size={10} toggledIndexes={[1, 6]}/>
            </div>
            <h5>Checking Items</h5>
            <p>
              Items can be checked against the filter for whether they are a member of the set by being run through the same hash functions as added items,
              and then checking the bit values at the outputted positions. Note that given the same input, hash functions will always produce the same output.
              Thus, when we examine the bits at the specified positions in the array, if <i>any</i> of them have <i>not</i> been toggled from 0 to 1 then we know
              that the item was <i>definitely not</i> added to the filter. On the other hand, if all checked positions have indeed been toggled to 1, 
              then we know that the item was <i>possibly</i> added to the filter with some degree of uncertainty (the "false positive rate").
            </p>
            <Row id="check-example" className="text-center px-5">
              <Col>
                <p>
                <b className="text-yellow">Check Item:</b> "Foo"
                </p>
                <p>
                  HashFunction1("Foo") = 1
                  <br/>
                  HashFunction2("Foo") = 6
                </p>
                <ExampleBitArray size={10} toggledIndexes={[1, 6]} checkedIndexes={[1, 6]}/>
                <p>
                  Result: <span className="text-blue"><b>Possibly</b> in the set.</span>
                </p>
              </Col>
              <Col>
                <p>
                  <b className="text-yellow">Check Item:</b> "Bar"
                </p>
                <p>
                  HashFunction1("Bar") = 4
                  <br/>
                  HashFunction2("Bar") = 6
                </p>
                <ExampleBitArray size={10} toggledIndexes={[1, 6]} checkedIndexes={[4, 6]}/>
                <p>
                  Result: <span className="text-pink"><b>Definitely not</b> in the set.</span>
                </p>
              </Col>
            </Row>
            <h5>False Positives</h5>
            <p>
              A false positive occurs when the filter is queried with an item, and responds that the item is possibly in the set when the item was never indeed added to the set.
              The false positive rate of the filter is a function of three variables:
            </p>
            <p>
              <ol>
                <li><i>k</i> - The number of hash functions used.</li>
                <li><i>m</i> - The length of the bit array.</li>
                <li><i>n</i> - The number of items added to the filter.</li>
              </ol>
            </p>
            <p>
              Thus, if you know ahead of time approximately how many items your filter needs to hold, you can effectively set the false positive rate.
              See <a href="https://en.wikipedia.org/wiki/Bloom_filter#Probability_of_false_positives">Wikipedia</a> for more information on calculating this value.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}


export default ImplementationContainer
