"use strict";
/**
 * @file Contains Quicksort Algorithm
 * @author BML
 *
 * Time Complexity:     O(n log(n))
 * Space Complexity:    O(n)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.quicksort = void 0;
/**
 * Sort the given array using Quicksort
 *
 *
 * @param {number[]} arr
 * @return {number[]} Sorted Array
 */
function quicksort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[0];
    const less = arr.slice(1).filter(i => i <= pivot);
    const greater = arr.slice(1).filter(i => i > pivot);
    return quicksort(less).concat([pivot], quicksort(greater));
}
exports.quicksort = quicksort;
