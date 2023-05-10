/**
 * @file Contains Quicksort Algorithm
 * @author BML 
 * 
 * Time Complexity:     O(n log(n))
 * Space Complexity:    O(n)
 */

/**
 * Sort the given array using Quicksort
 * Explanation: Quicksort uses a PIVOT, to determine which numbers should move to the left side or
 *              right side. [numbers <= pivot] + [pivot] + [numbers > pivot]
 *              The process is repeated until all numbers are sorted. 
 *              
 *              One option for the PIVOT is to use the first or last element in  the array.
 *              If the array is already sort, the runtime of the algorithm will be O(n^2) and space
 *              complexity is O(n). 
 *              
 * 
 * Example:     qs([10, 5, 2, 4])   pivot = 10
 *              left = [5, 2, 4]    right = []
 *              
 *              qs(left) + [pivot] + qs(right)
 *              qs([5, 2, 4])       pivot = 5
 *              left = [2,4]        right = []
 *              
 *              qs([4])             pivot = 2
 *              left = []           right = [4]
 * 
 *              .....
 * 
 *              [] + [2] + [4]
 *              [2, 4]
 *              
 *              [2, 4] + [5] + []
 *              [2, 4, 5]
 * 
 *              [2, 4, 5] + [10] + []
 *              [2, 4, 5, 10]
 * 
 *
 * @param {number[]} nums   - List of numbers
 * @return {number[]}       - Sorted Array
 */
function quicksort(nums: number[]): number[] {

    if (nums.length < 2) {
        return nums;
    }

    const pivot = nums[0];
    const less = nums.slice(1).filter(i => i <= pivot);
    const greater = nums.slice(1).filter(i => i > pivot);

    return quicksort(less).concat([pivot], quicksort(greater));

}

export { quicksort }; 