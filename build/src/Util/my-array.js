"use strict";
/**
 * @file Utility to create arrays to be used in algorithms.
 * @author BML
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomArray = void 0;
/**
 * Creates a new array with the specificized amount of elements within a range.
 * The array can be return in sorted order.
 *
 * @param {number} [nums=10]    - number of elements in the array
 * @param {number} [min=0]      - element in array is no lower than min
 * @param {number} [max=100]    - element in array is no higher than max - 1
 * @param {boolean} [ordered=false] - whether the array should be returned sorted
 * @return {number[]}           - returns a new array
 */
function randomArray(nums = 10, min = 0, max = 100, ordered = false) {
    let arr = [];
    while (nums > 0) {
        let num = Math.floor(Math.random() * (max - min) + min);
        arr.push(num);
        nums--;
    }
    if (ordered) {
        return arr.sort((a, b) => { return a - b; });
    }
    return arr;
}
exports.randomArray = randomArray;
