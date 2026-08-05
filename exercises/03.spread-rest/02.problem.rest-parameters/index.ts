// Rest Parameters
// Functions that accept variable numbers of arguments

// Rest parameters collect all arguments into an array
function multiply(...numbers: Array<number>) {
	let product = 1
	for (const n of numbers) {
		product *= n
	}
	return product
}

// Combining regular parameter with rest
function logWithPrefix(prefix: string, ...messages: Array<string>) {
	for (const message of messages) {
		console.log(`${prefix} ${message}`)
	}
}

// Sum all numbers using rest parameters
function sum(...numbers: Array<number>) {
	let total = 0
	for (const n of numbers) {
		total += n
	}
	return total
}

// Rest + spread combo - collect arrays, spread to merge
function mergeArrays(...arrays: Array<Array<number>>) {
	const result: Array<number> = []
	for (const arr of arrays) {
		result.push(...arr)
	}
	return result
}

console.log(multiply(2, 3, 4)) // 24
console.log(multiply(5)) // 5
console.log(multiply()) // 1
logWithPrefix('[INFO]', 'Starting', 'Processing', 'Done')
console.log(sum(1, 2, 3, 4)) // 10
console.log(mergeArrays([1, 2], [3, 4], [5])) // [1, 2, 3, 4, 5]

export { multiply, sum, mergeArrays }
