// Array Destructuring
// Extracting values from arrays by position

const scores = [95, 92, 88, 87, 76]

// Destructure the first two scores into `highest` and `secondHighest`
const [highest, secondHighest] = scores

// Use the rest pattern to get the first score as `winner` and remaining as `others`
const [winner, ...others] = scores

const coordinates: [number, number, number] = [10, 20, 30]

// Destructure coordinates into x, y, and z
const [x, y, z] = coordinates

// Create a function that returns a tuple [min, max]
function getMinMax(numbers: number[]): [number, number] {
  const min = Math.min(...numbers)
  const max = Math.max(...numbers)
  return [min, max]
}

// Destructure the result of calling getMinMax
const [min, max] = getMinMax(scores)

// Test - uncomment when ready
// console.log(highest, secondHighest) // 95 92
// console.log(winner, others) // 95 [92, 88, 87, 76]
// console.log(x, y, z) // 10 20 30
// console.log(min, max) // 76 95

// Export your variables and function
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