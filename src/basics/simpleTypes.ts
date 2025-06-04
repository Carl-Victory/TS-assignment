// A simple type declaration
let name: string = "John Doe"; // string type
let age: number = 30; // number type
let isStudent: boolean = false; // boolean type

// Function to display user information
function displayUserInfo(
  userName: string,
  userAge: number,
  studentStatus: boolean
) {
  console.log(
    `Name: ${userName}, Age: ${userAge}, Is Student: ${studentStatus}`
  );
}

// Calling the function
displayUserInfo(name, age, isStudent);
