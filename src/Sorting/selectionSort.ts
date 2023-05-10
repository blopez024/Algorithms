/**
 * @file Contains Selection Sort Algorithm
 * @author BML 
 * 
 * Time Complexity:     O(n^2)     
 * Space Complexity:    O(1)
 */

/**
 * Sort the given array using Selection sort
 * Explanation:   Works by repeatedly selecting the smallest element from the unsorted portion of the
 *              array and swapping it with the first element of the unsorted portion of the array.
 *              It repeats the process until the entire array is sorted.
 * 
 *
 * @param {number[]} nums   - List of numbers
 * @return {number[]}       - Sorted Array
 */
function selectionSort(nums: number[]): number[] {

    for (let i = 0; i < nums.length - 1; i++) {
        let min = i;

        // Get the lowest unsorted value
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }

        // Swap current value (i) with the lowest unsorted value 
        const temp = nums[min];
        nums[min] = nums[i];
        nums[i] = temp;
    }

    return nums;
}



export { selectionSort }; 