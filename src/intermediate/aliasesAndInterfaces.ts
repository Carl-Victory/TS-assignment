// Type Alias
type StringOrNumber = string | number;

// Interface
interface Person {
  name: string;
  age: number;
  greet(): string;
}

// Example of using the type alias
const id: StringOrNumber = 123; // can be a number
const nameId: StringOrNumber = "ABC"; // can be a string

// Example of using the interface
const person: Person = {
  name: "John Doe",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

// Usage
console.log(person.greet());
