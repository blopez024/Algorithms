import { randomArray } from "./Util/my-array";
import { linearSearch } from "./Searching/linear-search";


// Setup 
const array1 = randomArray(1_000_000, 0, 1_000_000);
const array2 = [...array1].sort((a, b) => { return a - b });
const randomIndex = Math.floor(Math.random() * array1.length);
const target = array1[randomIndex];

console.log("Unsorted Array: ", array1);
console.log("Sorted Array: ", array2);
console.log("Random Index: " + randomIndex);
console.log("Target: " + target);

// Measurement 
let startTime = performance.now();
linearSearch(array1, target);
let endTime = performance.now();
let time = (endTime - startTime).toFixed(5)
console.log(`Unsorted Array - Time: ${time} millisecond`);
// 
startTime = performance.now();
linearSearch(array2, target);
endTime = performance.now();
time = (endTime - startTime).toFixed(5)
console.log(`Sorted Array - Time: ${time} millisecond`);


