// Reducing Data
// Accumulating arrays into single values

const products = [
  { name: 'Laptop', price: 999.99, category: 'Electronics' },
  { name: 'Toaster', price: 79.99, category: 'Kitchen' },
  { name: 'Headphones', price: 149.99, category: 'Electronics' },
  { name: 'Blender', price: 49.99, category: 'Kitchen' },
  { name: 'Monitor', price: 299.99, category: 'Electronics' },
]

// Use reduce to sum all prices
const total = products.reduce(
  (sum, product) => sum + product.price,
  0
)

// Use reduce to find the most expensive product
const mostExpensive = products.reduce(
  (most, product) => (product.price > most.price ? product : most),
  products[0]
)

// Use reduce to count products by category
const countByCategory = products.reduce(
  (count, product) => {
    count[product.category] = (count[product.category] || 0) + 1
    return count
  },
  {} as Record<string, number>
)

// console.log('Total:', total)
// console.log('Most expensive:', mostExpensive.name)
// console.log('By category:', countByCategory)

// Export your variables so we can verify your work
export { total, mostExpensive, countByCategory }