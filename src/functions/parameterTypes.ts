// Function to demonstrate passing types in parameters
function greet(name: string, age?: number): string {
  return `Hello, my name is ${name} and I am ${
    age ? age : "unknown"
  } years old.`;
}

// Function with default parameter
function multiply(a: number, b: number = 1): number {
  return a * b;
}

// Function demonstrating return type
function add(x: number, y: number): number {
  return x + y;
}

// Async function demonstrating return type as Promise
async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}

// Example usage
console.log(greet("Alice", 30)); // Hello, my name is Alice and I am 30 years old.
console.log(multiply(5)); // 5
console.log(add(2, 3)); // 5
fetchData("https://api.example.com/data").then((data) => console.log(data));
