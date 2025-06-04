"use strict";
// src/intermediate/aliasesAndInterfaces.ts
// Example of using the type alias
const id = 123; // can be a number
const nameId = "ABC"; // can be a string
// Example of using the interface
const person = {
    name: "John Doe",
    age: 30,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
// Usage
console.log(person.greet());
