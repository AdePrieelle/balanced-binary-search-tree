import { getArrayWithStringNumbersConvertedToNumbersFromArray } from "../getArrayWithStringNumbersConvertedToNumbersFromArray.js";

describe("Testing the function getArrayWithStringNumbersConvertedToNumbersFromArray", () => {
  describe("Testing the type of function getArrayWithStringNumbersConvertedToNumbersFromArray", () => {
    test("The type of function getArrayWithStringNumbersConvertedToNumbersFromArray is a function", () => {
      expect(typeof getArrayWithStringNumbersConvertedToNumbersFromArray).toBe("function");
    });
  });

  describe("Testing the return type of function getArrayWithStringNumbersConvertedToNumbersFromArray", () => {
    test("The return type of function getArrayWithStringNumbersConvertedToNumbersFromArray is an array if the method is called without an argument", () => {
      expect(Array.isArray(getArrayWithStringNumbersConvertedToNumbersFromArray())).toBe(true);
    });

    test("The return type of function getArrayWithStringNumbersConvertedToNumbersFromArray is an array if the method is called with an argument of that isn't of type Array", () => {
      expect(Array.isArray(getArrayWithStringNumbersConvertedToNumbersFromArray(2))).toBe(true);
    });
    
    test("The return type of function getArrayWithStringNumbersConvertedToNumbersFromArray is an array if the method is called with an argument of type Array", () => {
      expect(Array.isArray(getArrayWithStringNumbersConvertedToNumbersFromArray(["a", "-3.5", "2.0"]))).toBe(true);
    });
  });

  describe("Testing the return values of function getArrayWithStringNumbersConvertedToNumbersFromArray", () => {
    test("The function getArrayWithStringNumbersConvertedToNumbersFromArray works correctly if the function is called without an argument", () => {
      expect(getArrayWithStringNumbersConvertedToNumbersFromArray()).toStrictEqual([]);
    });

    test("Function getArrayWithStringNumbersConvertedToNumbersFromArray works correctly if the function is called with an argument that isn't of type Array", () => {
      expect(getArrayWithStringNumbersConvertedToNumbersFromArray(2)).toStrictEqual([]);
    });

    test("Function getArrayWithStringNumbersConvertedToNumbersFromArray works correctly if the function is called with an argument of type array that contains positive string number elements", () => {
      expect(getArrayWithStringNumbersConvertedToNumbersFromArray(["2", "1", "3"])).toStrictEqual([2, 1, 3]);
    });

    test("Function getArrayWithStringNumbersConvertedToNumbersFromArray works correctly if the function is called with an argument of type array that contains positive and negative string number elements", () => {
      expect(getArrayWithStringNumbersConvertedToNumbersFromArray(["2", "-1", "3"])).toStrictEqual([2, -1, 3]);
    });

    test("Function getArrayWithStringNumbersConvertedToNumbersFromArray works correctly if the function is called with an argument of type array that contains string decimal elements", () => {
      expect(getArrayWithStringNumbersConvertedToNumbersFromArray(["2.5", "1.0", "-3.5"])).toStrictEqual([2.5, 1.0, -3.5]);
    });

    test("Function getArrayWithStringNumbersConvertedToNumbersFromArray works correctly if the function is called with an argument of type array that contains elements of other types besides string numbers", () => {
      expect(getArrayWithStringNumbersConvertedToNumbersFromArray(["a", "1", "3"])).toStrictEqual(["a", 1, 3]);
    });
  });
});
