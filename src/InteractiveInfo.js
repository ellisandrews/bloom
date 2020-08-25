import React from 'react'


const InteractiveInfo = () => {
  return (
    <div id="interactive-info">
      <h3 className="py-3">Interactive Bloom Filter</h3>
      <p>
        Below is a simple, interactive visualization of a Bloom filter.
        The underlying bit array data structure has been initialized with all bits set to 0, with each square respresenting a single bit.
      </p>
      <p><b>Using the Bloom Filter</b></p>
      <p>
        To use the filter, first populate it by adding a few items with the <b className="text-green">Add Items</b> form. 
        Submitted items will be run through each hash function in turn to produce an integer value corresponding to an index of the bit array to toggle.
        Bits at these index positions will be toggled to a value of 1 (if they have not been already).
      </p>
      <p>
        Once you've added some items to the filter, you can then query the filter for item membership using the <b className="text-yellow">Check Items</b> form.
        Submitted items will be run through the <i>same</i> hash functions as added items, which will always produce the same values given the same input.
        Thus, when we examine the bits at those positions in the array, if <i>any</i> of them have <i>not</i> been toggled from 0 to 1 then we know
        that the item was <i>definitely not</i> added to the filter. If all checked positions are have indeed been toggled 1, then we know that the item was <i>possibly</i> added 
        to the filter with some degree of uncertainty. This uncertainty is the "false positive rate" (displayed under the form).
      </p>
      <p><b>Important Notes</b></p>
      <ul>
        <li>The bit array is zero-indexed, meaning the first bit is at position 0, the second at position 1, etc.</li>
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
