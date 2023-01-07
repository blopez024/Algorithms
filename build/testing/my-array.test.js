"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_array_1 = require("../src/Util/my-array");
/** Array Util Testing ------------------------------------------------------------------------- */
/** Array Test 1
 *  Description: default array
 *              10 elements
 *              between 0 and 99 (inclusively)
 *              random order
 */
const arr1 = (0, my_array_1.randomArray)();
test('Array Test 1', () => {
    expect(arr1.length).toBe(20);
});
describe('Array Test 1', () => {
    // array size
    test('length == 10', () => {
        expect(arr1).toHaveLength(10);
    });
    // elements within range
    arr1.forEach((num) => {
        test('num within range', () => {
            expect(num).toBeGreaterThanOrEqual(0);
            expect(num).toBeLessThan(100);
        });
    });
});
/** Array Util Testing ------------------------------------------------------------------------- */ 
