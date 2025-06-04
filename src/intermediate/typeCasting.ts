// Example of using `as` syntax for type casting
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
console.log(`Length of the string: ${strLength}`);

// Example of using angle-bracket syntax for type casting
let anotherValue: unknown = 123;
let strValue: string = (<number>anotherValue).toString();
console.log(`String value: ${strValue}`);

// Example of type casting with a custom object
interface User {
  name: string;
  age: number;
}

let user: unknown = { name: "Alice", age: 30 };
let typedUser = user as User;
console.log(`User Name: ${typedUser.name}, Age: ${typedUser.age}`);
