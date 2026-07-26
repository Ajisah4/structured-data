// Filtering Data
// Selecting elements that match criteria

const products = [
  { name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
  { name: 'Toaster', price: 79.99, category: 'Kitchen', inStock: true },
  {
    name: 'Headphones',
    price: 149.99,
    category: 'Electronics',
    inStock: false,
  },
  { name: 'Blender', price: 49.99, category: 'Kitchen', inStock: true },
  { name: 'Monitor', price: 299.99, category: 'Electronics', inStock: true },
]

// Filter to get only Electronics products
const electronics = products.filter(
  product => product.category === 'Electronics'
)

// Filter to get products under $100
const affordable = products.filter(
  product => product.price < 100
)

// Filter to get products that are in stock
const available = products.filter(
  product => product.inStock
)

// Chain: get names of in-stock Electronics under $500
const inStockElectronicsUnder500 = products
  .filter(
    product =>
      product.category === 'Electronics' &&
      product.inStock &&
      product.price < 500
  )
  .map(product => product.name)

// console.log('Electronics:', electronics)
// console.log('Affordable:', affordable)
// console.log('In Stock:', available)

// Export your variables so we can verify your work
export {
  electronics,
  affordable,
  available,
  inStockElectronicsUnder500,
}