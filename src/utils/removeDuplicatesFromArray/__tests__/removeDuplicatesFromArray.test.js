import { removeDuplicatesFromArray } from "../removeDuplicatesFromArray.js";

describe("Testing the function removeDuplicatesFromArray", () => {
  describe("Testing the type of function removeDuplicatesFromArray", () => {
    test("The type of function removeDuplicatesFromArray is a function", () => {
      expect(typeof removeDuplicatesFromArray).toBe("function");
    });
  });

  describe("Testing the return type of function removeDuplicatesFromArray", () => {
    test("The return type of function removeDuplicatesFromArray is an array if the method is called without an argument", () => {
      expect(Array.isArray(removeDuplicatesFromArray())).toBe(true);
    });
    
    test("The return type of function removeDuplicatesFromArray is an array if the method is called with an argument", () => {
      expect(Array.isArray(removeDuplicatesFromArray([2, 1, 2, 3]))).toBe(true);
    });
  });

  describe("Testing the return values of function removeDuplicatesFromArray", () => {
    test("The function removeDuplicatesFromArray works correctly if the function is called without an argument", () => {
      expect(removeDuplicatesFromArray()).toStrictEqual([]);
    });
  
    test("Function removeDuplicatesFromArray works correctly if the function is called with an argument of an empty array", () => {
      expect(removeDuplicatesFromArray([])).toStrictEqual([]);
    });

    test("Function removeDuplicatesFromArray works correctly if the function is called with an argument of an array that has no duplicate values", () => {
      expect(removeDuplicatesFromArray([2, 1, 3])).toStrictEqual([2, 1, 3]);
    });

    test("Function removeDuplicatesFromArray works correctly if the function is called with an argument of an array that contains duplicate negative numbers and duplicate positive numbers", () => {
      expect(removeDuplicatesFromArray([-2, 4, -2, -3, 4, 1, 5])).toStrictEqual([-2, 4, -3, 1, 5]);
    });

    test("Function removeDuplicatesFromArray works correctly if the function is called with an argument of an array that contains duplicate float values", () => {
      expect(removeDuplicatesFromArray([-2, 0.65, 1, -1.25, 3, -1.25, 0.65])).toStrictEqual([-2, 0.65, 1, -1.25, 3]);
    });
  });
});
