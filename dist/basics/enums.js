"use strict";
//Enum
var Response;
(function (Response) {
    Response["No"] = "NO";
    Response["Yes"] = "YES";
})(Response || (Response = {}));
// Using Enums
const response = Response.Yes;
console.log(`Response is: ${response}`); // Output: Response is: YES
