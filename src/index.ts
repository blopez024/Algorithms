import { randomArray } from "./Util/my-array";
import { linearSearch } from "./Searching/linear-search";
import { binarySearch } from "./Searching/binary-search";
import { quicksort } from "./Sorting/quickSort";

// Usage
// npm start

// Setup
const rArray = randomArray(20);
const sArray = quicksort(rArray);

console.log("Unsorted Array: ", rArray);
console.log("Sorted Array: ", sArray);
