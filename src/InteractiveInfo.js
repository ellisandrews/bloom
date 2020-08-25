import React from 'react'


const InteractiveInfo = () => {
  return (
    <div id="interactive-info">
      <h3 className="py-3">Visualization</h3>
      <p>
        Below is a simple, interactive visualization of a Bloom filter.
        The underlying bit array data structure has already been initialized with all bits set to 0.
      </p>
      <h5>Using the Bloom Filter</h5>
      <p>
        To use the filter, first populate it by adding a few items with the <b className="text-green">Add Items</b> form. 
        Submitted items will be run through each hash function in turn to produce an integer value corresponding to an index of the bit array to toggle.
      </p>
      <p>
        Once you've added some items to the filter, you can then query the filter for item membership using the <b className="text-yellow">Check Items</b> form.
        Submitted items will be run through the same hash functions as added items.
        The live-updating false positive rate is displayed under the form. 
      </p>
      <h5>Important Notes</h5>
      <ul>
        <li>I've omitted the bit array indexes here, but remember that the bit array is zero-indexed! The first bit is at position 0, the second at position 1, etc.</li>
        <li>
          While you are able to see exactly which items have been added to the filter in the "Set Items" list, the Bloom filter does not store this information!
          This is merely for demonstration purposes and identifying false positives.
        </li>
      </ul>
      <br/>
    </div>
  )
}


export default InteractiveInfo
