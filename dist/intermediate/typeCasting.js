"use strict";
// This file demonstrates how to perform type casting in TypeScript, including examples of `as` and angle-bracket syntax.
// Example of using `as` syntax for type casting
let someValue = "this is a string";
let strLength = someValue.length;
console.log(`Length of the string: ${strLength}`);
// Example of using angle-bracket syntax for type casting
let anotherValue = 123;
let strValue = anotherValue.toString();
console.log(`String value: ${strValue}`);
let user = { name: "Alice", age: 30 };
let typedUser = user;
console.log(`User Name: ${typedUser.name}, Age: ${typedUser.age}`);
