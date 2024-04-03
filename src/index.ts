import { randomArray } from "./Util/my-array";
import { linearSearch } from "./Searching/linear-search";
import { binarySearch } from "./Searching/binary-search";
import { quicksort } from "./Sorting/quickSort";
import { selectionSort } from "./Sorting/selectionSort";
import { insertionSort } from "./Sorting/insertionSort";

// Usage
// npm start

// Setup
const rArray = randomArray(5);
console.log("Unsorted Array: ", rArray);

const sArray = insertionSort(rArray);
console.log("Sorted Array: ", sArray);
