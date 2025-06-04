"use strict";
// specialTypes.ts
// Demonstrating special types in TypeScript
// 'any' type allows any type of value
let variableAny = 5;
console.log(variableAny); // 5
variableAny = "Now I'm a string";
console.log(variableAny); // Now I'm a string
// 'unknown' type is safer than 'any' as it requires type checking before use
let variableUnknown = 10;
if (typeof variableUnknown === "number") {
    console.log(variableUnknown + 5); // 15
}
// 'never' type represents values that never occur
function throwError(message) {
    throw new Error(message);
}
// Example usage of 'never'
function infiniteLoop() {
    while (true) { }
}
// Using 'never' in a function that never returns
function checkValue(value) {
    if (typeof value === "string") {
        return "It's a string!";
    }
    else if (typeof value === "number") {
        return "It's a number!";
    }
    // The following line will never be reached
    return throwError("Unexpected value");
}
