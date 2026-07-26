// Object Destructuring
// Extracting values from objects into variables

type User = {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
  bio?: string
}

const user: User = {
  id: 'u123',
  name: 'Alice Johnson',
  email: 'alice@example.com',
  role: 'admin',
}

// Extract values
const { name, email } = user

// Rename id to userId
const { id: userId } = user

// Extract bio with a default value
const { bio = 'No bio provided' } = user

// Function using destructuring in its parameter
function formatUserCard({
  name,
  email,
  role,
}: User): string {
  return `${name} (${role}) - ${email}`
}

// Export variables and function
export { name, email, userId, bio, formatUserCard }