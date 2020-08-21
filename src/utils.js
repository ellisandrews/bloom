import murmur3 from 'murmurhash-js'


export const createItem = (value, numHashFunctions = 2, arrayLength = 32) => {
  // Hash the value the desired number of times to get array indexes
  // Currently using the same hashing algorithm (murmur3) but with a different seed/salt. Is this legitimate?
  const bitIndexes = []
  let salt = 1
  for (let i = 0; i < numHashFunctions; i++) {
    bitIndexes.push(murmur3(value, salt) % arrayLength)
    salt += 1
  }
  
  // Return the item
  return {
    value,
    bitIndexes
  }
}


export const stringifyIndexes = bitIndexes => bitIndexes.join(', ')
