// Defining a type for a person object
type Person = {
  name: string;
  age: number;
  isEmployed: boolean;
};

// Creating an object of type Person
const person: Person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
};

// Function to display person details
function displayPerson(person: Person) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Employed: ${person.isEmployed}`);
}

// Calling the function to display details
displayPerson(person);
