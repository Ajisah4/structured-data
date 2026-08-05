// Rest Parameters
// Functions that accept variable numbers of arguments

// Create multiply
const multiply = (...numbers: number[]): number => {
	return numbers.reduce((product, number) => product * number, 1)
}

// Create logWithPrefix
const logWithPrefix = (prefix: string, ...messages: string[]): void => {
	messages.forEach((message) => {
		console.log(`${prefix} ${message}`)
	})
}

// Create sum
const sum = (...numbers: number[]): number => {
	return numbers.reduce((total, number) => total + number, 0)
}

// Create mergeArrays
const mergeArrays = (...arrays: number[][]): number[] => {
	return arrays.reduce((merged, array) => [...merged, ...array], [])
}

// Test
console.log(multiply(2, 3, 4)) // 24
console.log(multiply(5)) // 5
console.log(multiply()) // 1

logWithPrefix('[INFO]', 'Starting', 'Processing', 'Done')

console.log(sum(1, 2, 3, 4)) // 10

console.log(mergeArrays([1, 2], [3, 4], [5])) // [1, 2, 3, 4, 5]

// Export
export { multiply, sum, mergeArrays }2.7