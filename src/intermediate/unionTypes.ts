// This function accepts a parameter that can be either a string or a number
function printId(id: string | number) {
  console.log(`Your ID is: ${id}`);
}

// Example usage of the printId function
printId(101); // Output: Your ID is: 101
printId("202"); // Output: Your ID is: 202

// This function accepts a parameter that can be either a string or null
function getUserName(userId: string | null): string {
  if (userId === null) {
    return "Guest";
  }
  return `User: ${userId}`;
}

// Example usage of the getUserName function
console.log(getUserName(null)); // Output: Guest
console.log(getUserName("Alice")); // Output: User: Alice

// Union types can also be used in arrays
let mixedArray: (string | number)[] = [1, "two", 3, "four"];
mixedArray.forEach((item) => {
  console.log(item);
});

// Example of a union type in an object
type User = {
  id: string | number;
  name: string;
};

const user1: User = {
  id: 1,
  name: "John Doe",
};

const user2: User = {
  id: "A123",
  name: "Jane Smith",
};

console.log(user1, user2);
