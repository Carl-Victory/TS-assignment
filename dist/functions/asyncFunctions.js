"use strict";
// asyncFunctions.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Function that simulates an asynchronous operation
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data fetched successfully!");
            }, 2000);
        });
    });
}
// Function that demonstrates how to use async/await
function displayData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetchData();
            console.log(data);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    });
}
// Call the displayData function to see the result
displayData();
