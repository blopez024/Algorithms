import { randomArray } from "./Util/my-array";
import { linearSearch } from "./Searching/linear-search";
import { binarySearch } from "./Searching/binary-search";


// Setup 
const rArray = randomArray(1_000_000, 0, 1_000_000);
const sArray = [...rArray].sort((a, b) => { return a - b });

const randomIndex = Math.floor(Math.random() * rArray.length);
const target = rArray[randomIndex];

console.log("Unsorted Array: ", rArray);
console.log("Sorted Array: ", sArray);
console.log("Random Index: " + randomIndex);
console.log("Target: " + target);

// Measurement 
// let startTime = performance.now();
// linearSearch(rArray, target);
// let endTime = performance.now();
// let time = (endTime - startTime).toFixed(5)
// console.log(`Unsorted Array - Time: ${time} millisecond`);
// 
// startTime = performance.now();
// linearSearch(sArray, target);
// endTime = performance.now();
// time = (endTime - startTime).toFixed(5)
// console.log(`Sorted Array - Time: ${time} millisecond`);

// Measurement Comparison - Sorted Array
// Linear Search vs Binary Search
let startTime = performance.now();
linearSearch(sArray, target);
let endTime = performance.now();

let time = (endTime - startTime).toFixed(5)
console.log(`Linear Search - Time: ${time} millisecond`);

startTime = performance.now();
binarySearch(sArray, target);
endTime = performance.now();

time = (endTime - startTime).toFixed(5)
console.log(`Binary Search - Time: ${time} millisecond`);