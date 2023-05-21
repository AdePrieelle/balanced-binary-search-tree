import { getArrayWithStringNumbersConvertedToNumbersFromString } from "../getArrayWithStringNumbersConvertedToNumbersFromString.js";

describe("Testing the function getArrayWithStringNumbersConvertedToNumbersFromString", () => {
  describe("Testing the type of function getArrayWithStringNumbersConvertedToNumbersFromString", () => {
    test("The type of function getArrayWithStringNumbersConvertedToNumbersFromString is a function", () => {
      expect(typeof getArrayWithStringNumbersConvertedToNumbersFromString).toBe("function");
    });
  });

  describe("Testing the return type of function getArrayWithStringNumbersConvertedToNumbersFromString", () => {
    test("The return type of function getArrayWithStringNumbersConvertedToNumbersFromString is an array if the method is called without an argument", () => {
      expect(Array.isArray(getArrayWithStringNumbersConvertedToNumbersFromString())).toBe(true);
    });

    test("The return type of function getArrayWithStringNumbersConvertedToNumbersFromString is an array if the method is called with an argument for the first parameter that isn't of type string, without an argument for the second parameter, without an argument for the third parameter and without an argument for the fourth parameter", () => {
      expect(Array.isArray(getArrayWithStringNumbersConvertedToNumbersFromString(2))).toBe(true);
    });
    
    test("The return type of function getArrayWithStringNumbersConvertedToNumbersFromString is an array if the method is called with an argument for the first parameter that is of type string, without an argument for the second parameter, without an argument for the third parameter and without an argument for the fourth parameter", () => {
      expect(Array.isArray(getArrayWithStringNumbersConvertedToNumbersFromString("a, -3.5, 2.0"))).toBe(true);
    });

    test("The return type of function getArrayWithStringNumbersConvertedToNumbersFromString is an array if the method is called with an argument for the first parameter that is of type string, with an argument for the second parameter, without an argument for the third parameter and without an argument for the fourth parameter", () => {
      expect(Array.isArray(getArrayWithStringNumbersConvertedToNumbersFromString("a, -3.5, 2.0", ", "))).toBe(true);
    });

    test("The return type of function getArrayWithStringNumbersConvertedToNumbersFromString is an array if the method is called with an argument for the first parameter that is of type string, with an argument for the second parameter, with an argument for the third parameter that isn't of type function and without an argument for the fourth parameter", () => {
      expect(Array.isArray(getArrayWithStringNumbersConvertedToNumbersFromString("a, -3.5, 2.0", ", ", 2))).toBe(true);
    });

    test("The return type of function getArrayWithStringNumbersConvertedToNumbersFromString is an array if the method is called with an argument for the first parameter that is of type string, with an argument for the second parameter, with an argument for the third parameter that is of type function and without an argument for the fourth parameter", () => {
      expect(Array.isArray(getArrayWithStringNumbersConvertedToNumbersFromString("a, -3.5, 2.0", ", ", (() => [3])))).toBe(true);
    });

    test("The return type of function getArrayWithStringNumbersConvertedToNumbersFromString is an array if the method is called with an argument for the first parameter that is of type string, with an argument for the second parameter, with an argument for the third parameter that is of type function and with an argument for the fourth parameter that isn't of type function", () => {
      expect(Array.isArray(getArrayWithStringNumbersConvertedToNumbersFromString("a, -3.5, 2.0", ", ", (() => [3])), 4)).toBe(true);
    });

    test("The return type of function getArrayWithStringNumbersConvertedToNumbersFromString is an array if the method is called with an argument for the first parameter that is of type string, with an argument for the second parameter, with an argument for the third parameter that is of type function and with an argument for the fourth parameter that is of type function", () => {
      expect(Array.isArray(getArrayWithStringNumbersConvertedToNumbersFromString("a, -3.5, 2.0", ", ", (() => [3])), (() => [4]))).toBe(true);
    });
  });

  describe("Testing the return values of function getArrayWithStringNumbersConvertedToNumbersFromString", () => {
    test("The function getArrayWithStringNumbersConvertedToNumbersFromString works correctly if the function is called without an argument", () => {
      expect(getArrayWithStringNumbersConvertedToNumbersFromString()).toStrictEqual([]);
    });

    test("Function getArrayWithStringNumbersConvertedToNumbersFromString works correctly if the function is called with an argument for the first parameter that isn't of type string, without an argument for the second parameter, without an argument for the third parameter and without an argument for the fourth parameter", () => {
      expect(getArrayWithStringNumbersConvertedToNumbersFromString(1)).toStrictEqual([]);
    });

    test("Function getArrayWithStringNumbersConvertedToNumbersFromString works correctly if the function is called with an argument for the first parameter that is of type string, without an argument for the second parameter, without an argument for the third parameter and without an argument for the fourth parameter", () => {
      expect(getArrayWithStringNumbersConvertedToNumbersFromString("a, -3.5, 2.0")).toStrictEqual([]);
    });

    test("Function getArrayWithStringNumbersConvertedToNumbersFromString works correctly if the function is called with an argument for the first parameter that is of type string, with an argument for the second parameter, without an argument for the third parameter and without an argument for the fourth parameter", () => {
      expect(getArrayWithStringNumbersConvertedToNumbersFromString("a, -3.5, 2.0", ", ")).toStrictEqual([]);
    });

    test("Function getArrayWithStringNumbersConvertedToNumbersFromString works correctly if the function is called with an argument for the first parameter that is of type string, with an argument for the second parameter, with an argument for the third parameter that isn't of type function and without an argument for the fourth parameter", () => {
      expect(getArrayWithStringNumbersConvertedToNumbersFromString("a, -3.5, 2.0", ", ", 3)).toStrictEqual([]);
    });

    test("Function getArrayWithStringNumbersConvertedToNumbersFromString works correctly if the function is called with an argument for the first parameter that is of type string, with an argument for the second parameter, with an argument for the third parameter that is of type function and without an argument for the fourth parameter", () => {
      const mockGetArrayFromString = jest.fn(() => ["a", "-3.5", "2.0"]);
      expect(getArrayWithStringNumbersConvertedToNumbersFromString("a, -3.5, 2.0", ", ", mockGetArrayFromString)).toStrictEqual([]);
    });

    test("Function getArrayWithStringNumbersConvertedToNumbersFromString works correctly if the function is called with an argument for the first parameter that is of type string, with an argument for the second parameter, with an argument for the third parameter that is of type function and with an argument for the fourth parameter that isn't of type function", () => {
      const mockGetArrayFromString = jest.fn(() => ["a", "-3.5", "2.0"]);
      expect(getArrayWithStringNumbersConvertedToNumbersFromString("a, -3.5, 2.0", ", ", mockGetArrayFromString, 4)).toStrictEqual([]);
    });

    test("Function getArrayWithStringNumbersConvertedToNumbersFromString works correctly if the function is called with an argument for the first parameter that is of type string, with an argument for the second parameter, with an argument for the third parameter that is of type function and with an argument for the fourth parameter that is of type function", () => {
      const mockGetArrayFromString = jest.fn(() => ["a", "-3.5", "2.0"]);
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ["a", -3.5, 2.0]);
      expect(getArrayWithStringNumbersConvertedToNumbersFromString("a, -3.5, 2.0", ", ", mockGetArrayFromString, mockGetArrayWithStringNumbersConvertedToNumbersFromArray)).toStrictEqual(["a", -3.5, 2.0]);
    });
  });
});
