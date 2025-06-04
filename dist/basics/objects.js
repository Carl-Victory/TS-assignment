"use strict";
// Creating an object of type Person
const person = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
};
// Function to display person details
function displayPerson(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Employed: ${person.isEmployed}`);
}
// Calling the function to display details
displayPerson(person);
