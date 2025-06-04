// Array example with type annotation
let numbers: number[] = [1, 2, 3, 4, 5];

// Accessing elements in an array
console.log(numbers[0]); // Output: 1

// Tuple example
let tuple: [string, number] = ["Hello", 10];

// Accessing elements in a tuple
console.log(tuple[0]); // Output: Hello
console.log(tuple[1]); // Output: 10

// Function that returns an array
function createArray(): number[] {
  return [1, 2, 3];
}

// Using the function
let newArray = createArray();
console.log(newArray); // Output: [1, 2, 3]

// Function that returns a tuple
function createTuple(): [string, boolean] {
  return ["TypeScript", true];
}

// Using the function
let newTuple = createTuple();
console.log(newTuple); // Output: ['TypeScript', true]
