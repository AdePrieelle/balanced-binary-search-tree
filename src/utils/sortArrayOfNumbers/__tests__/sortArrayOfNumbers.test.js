import { sortArrayOfNumbers } from "../sortArrayOfNumbers";

describe("Testing the function sortArrayOfNumbers", () => {
  describe("Testing the type of function sortArrayOfNumbers", () => {
    test("The type of function sortArrayOfNumbers is a function", () => {
      expect(typeof sortArrayOfNumbers).toBe("function");
    });
  });

  describe("Testing the return type of function sortArrayOfNumbers", () => {
    test("The return type of function sortArrayOfNumbers is an object if the method is called without an argument", () => {
      expect(typeof sortArrayOfNumbers()).toBe("object");
    });
    
    test("The return type of function sortArrayOfNumbers is an array if the method is called with an argument", () => {
      expect(Array.isArray(sortArrayOfNumbers([2, 1, 3]))).toBe(true);
    });
  });

  describe("Testing the return values of function sortArrayOfNumbers", () => {
    test("The function sortArrayOfNumbers works correctly if the function is called without an argument", () => {
      expect(sortArrayOfNumbers()).toStrictEqual(null);
    });
  
    test("Function sortArrayOfNumbers works correctly if the function is called with an empty array as an argument", () => {
      expect(sortArrayOfNumbers([])).toStrictEqual([]);
    });

    test("Function sortArrayOfNumbers works correctly if the function is called with an argument", () => {
      expect(sortArrayOfNumbers([2, 1, 3])).toStrictEqual([1, 2, 3]);
    });

    test("Function sortArrayOfNumbers works correctly if the function is called with an argument of an array that contains negative numbers aswell as positive numbers", () => {
      expect(sortArrayOfNumbers([-2, 2, -3, 4, 1])).toStrictEqual([-3, -2, 1, 2, 4]);
    });

    test("Function sortArrayOfNumbers works correctly if the function is called with an argument of an array that contains duplicate numbers", () => {
      expect(sortArrayOfNumbers([-2, 2, -3, -2, 2, 1])).toStrictEqual([-3, -2, -2, 1, 2, 2]);
    });
  });
});
