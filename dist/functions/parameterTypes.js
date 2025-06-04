"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Function to demonstrate passing types in parameters
function greet(name, age) {
    return `Hello, my name is ${name} and I am ${age ? age : 'unknown'} years old.`;
}
// Function with default parameter
function multiply(a, b = 1) {
    return a * b;
}
// Function demonstrating return type
function add(x, y) {
    return x + y;
}
// Async function demonstrating return type as Promise
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.text();
        return data;
    });
}
// Example usage
console.log(greet("Alice", 30)); // Hello, my name is Alice and I am 30 years old.
console.log(multiply(5)); // 5
console.log(add(2, 3)); // 5
fetchData("https://api.example.com/data").then(data => console.log(data));
