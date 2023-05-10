"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_array_1 = require("./Util/my-array");
const quickSort_1 = require("./Sorting/quickSort");
// Usage
// npm start
// Setup
const rArray = (0, my_array_1.randomArray)(20);
const sArray = (0, quickSort_1.quicksort)(rArray);
console.log("Unsorted Array: ", rArray);
console.log("Sorted Array: ", sArray);
