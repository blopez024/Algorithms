"use strict";
/**
 * @file Contains Linear Search Algorithm.
 * @author BML
 *
 * Time Complexity:     O(N)
 * Space Complexity:    O(1)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = void 0;
/**
 * Returns the first index in which the target number was found.
 * If not found, -1 will be returned
 *
 * @param {number[]} nums   - List of numbers
 * @param {number} target   - Number to search for
 * @return {number}         - Index of target
 */
function linearSearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }
    }
    return -1;
}
exports.linearSearch = linearSearch;
