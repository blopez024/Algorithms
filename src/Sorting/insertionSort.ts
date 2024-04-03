/**
 * @file Contains Insertion Sort Algorithm
 * @author BML 
 * 
 * Time Complexity:     O(n^2)     
 * Space Complexity:    O(1)
 */

/**
 * Sort the given array using Insertion Sort
 * 
 *
 * @param {number[]} nums   - List of numbers
 * @return {number[]}       - Sorted Array
 */
function insertionSort(nums: number[]): number[] {

    for (let i = 1; i < nums.length; i++) {

        let current = nums[i];
        let j = i - 1;

        while (j >= 0 && current < nums[j]) {
            nums[j + 1] = nums[j];
            j--;
        }

        nums[j + 1] = current;
    }

    return nums;
}




export { insertionSort }; 