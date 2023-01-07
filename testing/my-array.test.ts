/**
 * @file Jest tests for Utility methods.
 * @author BML 
 */


import { randomArray } from "../src/Util/my-array";


/** Array Util Testing ------------------------------------------------------------------------- */

/** Array Test 1
 *  Description: default array
 *              10 elements
 *              between 0 and 99 (inclusively)
 *              random order       
 */
const arr1 = randomArray();
describe('Array Test 1', () => {
    // array size
    test('length == 10', () => {
        expect(arr1).toHaveLength(10);
    })
    // elements within range
    let isWithinRange = true;
    arr1.forEach((num) => {
        if (num < 0 || num >= 100) {
            isWithinRange = false;
            return;
        }
    })
    test('all numbers within range', () => {
        expect(isWithinRange).toBeTruthy();
    })
    // array is not sorted 
    test('array is not sorted', () => {
        let sorted = true;
        for (let i = 0; i < arr1.length - 1; i++) {
            if (arr1[i] > arr1[i + 1]) {
                sorted = false;
                break;
            }
        }
        expect(sorted).toBeFalsy();
    })
})

/** Array Test 2
 *  Description: custom array
 *              1000 elements
 *              between 0 and 999 (inclusively)
 *              inorder       
 */
const arr2 = randomArray(1000, 0, 1000, true);
describe('Array Test 2', () => {
    // array size
    test('length == 1000', () => {
        expect(arr2).toHaveLength(1000);
    })
    // elements within range
    let isWithinRange = true;
    arr2.forEach((num) => {
        if (num < 0 || num >= 1000) {
            isWithinRange = false;
            return;
        }
    })
    test('all numbers within range', () => {
        expect(isWithinRange).toBeTruthy();
    })
    // array is sorted
    test('array is sorted', () => {
        let sorted = true;
        for (let i = 0; i < arr2.length - 1; i++) {
            if (arr2[i] > arr2[i + 1]) {
                sorted = false;
                break;
            }
        }
        expect(sorted).toBeTruthy();
    })
})

/** Array Test 3
 *  Description: custom array
 *              200 elements
 *              between -100 and 99 (inclusively)
 *              inorder       
 */
const arr3 = randomArray(200, -100, 100, true);
describe('Array Test 3', () => {
    // array size
    test('length == 200', () => {
        expect(arr3).toHaveLength(200);
    })
    // elements within range
    let isWithinRange = true;
    arr3.forEach((num) => {
        if (num < -100 || num >= 100) {
            isWithinRange = false;
            return;
        }
    })
    test('all numbers within range', () => {
        expect(isWithinRange).toBeTruthy();
    })
    // array is sorted
    test('array is sorted', () => {
        let sorted = true;
        for (let i = 0; i < arr3.length - 1; i++) {
            if (arr3[i] > arr3[i + 1]) {
                sorted = false;
                break;
            }
        }
        expect(sorted).toBeTruthy();
    })

})

/** Array Util Testing ------------------------------------------------------------------------- */