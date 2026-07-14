// Product Catalog
// Accessing object properties

const product = {
  name: "TypeScript Handbook",
  price: 29.99,
  inStock: true,
  category: "Books",
};

// 🐨 Log the product name using dot notation
console.log(product.name);

// 🐨 Log the product price using bracket notation
console.log(product["price"]);

// 🐨 Create a function `formatProduct` that takes a product object
// and returns a string like "TypeScript Handbook - $29.99"
function formatProduct(product: {
  name: string;
  price: number;
}): string {
  return `${product.name} - $${product.price}`;
}

// 🐨 Try uncommenting this line - what error do you see?
// console.log(product.rating)
// Error: Property 'rating' does not exist on type
// '{ name: string; price: number; inStock: boolean; category: string; }'.

console.log(formatProduct(product));

// 🐨 Export your variables and functions so we can verify your work
export { product, formatProduct };