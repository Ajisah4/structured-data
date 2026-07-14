// User Management System
// Creating typed objects

// 🐨 Create a `user` object with:
// - name: string
// - age: number
// - email: string
const user: {
  name: string;
  age: number;
  email: string;
} = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

// 🐨 Create a second user called `admin` with the same structure
const admin: {
  name: string;
  age: number;
  email: string;
} = {
  name: "Bob",
  age: 35,
  email: "bob@example.com",
};

console.log(`User: ${user.name}, Age: ${user.age}`);
console.log(`Admin: ${admin.name}, Age: ${admin.age}`);

// 🐨 Export your variables so we can verify your work
export { user, admin };
