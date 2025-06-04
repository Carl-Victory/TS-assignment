"use strict";
// unionTypes.ts
// This function accepts a parameter that can be either a string or a number
function printId(id) {
    console.log(`Your ID is: ${id}`);
}
// Example usage of the printId function
printId(101); // Output: Your ID is: 101
printId("202"); // Output: Your ID is: 202
// This function accepts a parameter that can be either a string or null
function getUserName(userId) {
    if (userId === null) {
        return "Guest";
    }
    return `User: ${userId}`;
}
// Example usage of the getUserName function
console.log(getUserName(null)); // Output: Guest
console.log(getUserName("Alice")); // Output: User: Alice
// Union types can also be used in arrays
let mixedArray = [1, "two", 3, "four"];
mixedArray.forEach(item => {
    console.log(item);
});
const user1 = {
    id: 1,
    name: "John Doe"
};
const user2 = {
    id: "A123",
    name: "Jane Smith"
};
console.log(user1, user2);
