/**
 * @file Contains Binary Search Algorithm.
 * @author BML 
 * 
 * Time Complexity:     O(log(n))
 * Space Complexity:    O(1)
 */

/**
 * Returns the first index in which the target number was found.
 * If not found, -1 will be returned
 *
 * @param {number[]} nums   - List of numbers
 * @param {number} target   - Number to search for
 * @return {number}         - Index of target
 */
function binarySearch(nums: number[], target: number): number {

    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] == target) {
            return mid;
        }
        if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;
}

export { binarySearch }