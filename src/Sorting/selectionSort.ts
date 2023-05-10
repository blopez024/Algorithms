/**
 * @file Contains Selection Sort Algorithm
 * @author BML 
 * 
 * Time Complexity:     
 * Space Complexity:    
 */

/**
 * Sort the given array using Selection sort
 * 
 *
 * @param {number[]} nums   - List of numbers
 * @return {number[]}       - Sorted Array
 */
function selectionSort(nums: number[]): number[] {

    for (let i = 0; i < nums.length - 1; i++) {
        let min = i;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }

        const temp = nums[min];
        nums[min] = nums[i];
        nums[i] = temp;
    }

    return nums;
}



export { selectionSort }; 