"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_array_1 = require("./Util/my-array");
const selectionSort_1 = require("./Sorting/selectionSort");
// Usage
// npm start
// Setup
const rArray = (0, my_array_1.randomArray)(100);
console.log("Unsorted Array: ", rArray);
const sArray = (0, selectionSort_1.selectionSort)(rArray);
console.log("Sorted Array: ", sArray);
