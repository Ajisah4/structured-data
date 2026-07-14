// Inventory System
// Working with basic arrays

// 🐨 Create an array of product names
const products: string[] = ["Laptop", "Keyboard", "Mouse"];

// 🐨 Add a new product 'Monitor' using push
products.push("Monitor");

// 🐨 Log the first product (index 0)
console.log(products[0]);

// 🐨 Log the last product (hint: use length - 1)
console.log(products[products.length - 1]);

// 🐨 Log the total number of products
console.log(products.length);

console.log("Products:", products);

// 🐨 Export your variable so we can verify your work
export { products };
