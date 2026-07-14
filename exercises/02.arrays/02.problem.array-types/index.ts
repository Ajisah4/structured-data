// Product Inventory
// Arrays of objects

// 🐨 Create a `Product` type alias with:
// - name: string
// - price: number
// - inStock: boolean
type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

// 🐨 Create a `products` array with `Product` objects
// Start with 2-3 products
const products: Product[] = [
  {
    name: "Laptop",
    price: 999.99,
    inStock: true,
  },
  {
    name: "Keyboard",
    price: 49.99,
    inStock: true,
  },
  {
    name: "Mouse",
    price: 25.99,
    inStock: false,
  },
];

// 🐨 Add a new product using push
products.push({
  name: "Monitor",
  price: 199.99,
  inStock: true,
});

// 🐨 Log the name of the first product from the array
console.log(products[0].name);

// 🐨 Calculate the total value of all products (sum of prices)
let totalValue = 0;

for (const product of products) {
  totalValue += product.price;
}

console.log(totalValue);

// 🐨 Export your variables so we can verify your work
export { products, totalValue };