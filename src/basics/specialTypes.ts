// Demonstrating special types in TypeScript

// 'any' type allows any type of value
let variableAny: any = 5;
console.log(variableAny); // 5
variableAny = "Now I'm a string";
console.log(variableAny); // Now I'm a string

// 'unknown' type is safer than 'any' as it requires type checking before use
let variableUnknown: unknown = 10;
if (typeof variableUnknown === "number") {
  console.log(variableUnknown + 5); // 15
}

// 'never' type represents values that never occur
function throwError(message: string): never {
  throw new Error(message);
}

// Example usage of 'never'
function infiniteLoop(): never {
  while (true) {}
}

// Using 'never' in a function that never returns
function checkValue(value: string | number): string {
  if (typeof value === "string") {
    return "It's a string!";
  } else if (typeof value === "number") {
    return "It's a number!";
  }
  // The following line will never be reached
  return throwError("Unexpected value");
}
