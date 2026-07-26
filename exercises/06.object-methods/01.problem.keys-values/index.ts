// Object Keys and Values
// Turning object data into arrays

const inventory = {
  apples: 12,
  oranges: 8,
  bananas: 0,
  mangoes: 4,
}

// Use Object.keys to get an array of item names
const itemNames = Object.keys(inventory)

// Use Object.values to get an array of quantities
const quantities = Object.values(inventory)

// Use the quantities array to compute the total quantity
const totalQuantity = quantities.reduce(
  (total, quantity) => total + quantity,
  0
)

// console.log('Item names:', itemNames)
// console.log('Quantities:', quantities)
// console.log('Total:', totalQuantity)

// Export your variables so we can verify your work
export { itemNames, quantities, totalQuantity }
