import { randomArray } from "./Util/my-array";
import { linearSearch } from "./Searching/linear-search";
import { binarySearch } from "./Searching/binary-search";
import { quicksort } from "./Sorting/quickSort";
import { selectionSort } from "./Sorting/selectionSort";

// Usage
// npm start

// Setup
const rArray = randomArray(100);
console.log("Unsorted Array: ", rArray);

const sArray = selectionSort(rArray);
console.log("Sorted Array: ", sArray);
