// Array Destructuring
// Extracting values from arrays by position

const scores = [95, 92, 88, 87, 76]

// Destructure the first two scores
const [highest, secondHighest] = scores

// Get the winner and the remaining scores
const [winner, ...others] = scores

const coordinates: [number, number, number] = [10, 20, 30]

// Destructure coordinates
const [x, y, z] = coordinates

// Function that returns a tuple [min, max]
function getMinMax(numbers: number): [number, number] {
  return [Math.min(...scores), Math.max(...scores)]
}

// Destructure the returned tuple
const [min, max] = getMinMax(scores)

// Export variables and function
export {
  highest,
  secondHighest,
  winner,
  others,
  x,
  y,
  z,
  min,
  max,
  getMinMax,
}