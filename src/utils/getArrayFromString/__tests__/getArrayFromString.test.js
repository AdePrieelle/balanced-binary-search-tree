import { getArrayFromString } from "../getArrayFromString.js";

describe("Testing the function getArrayFromString", () => {
  describe("Testing the type of function getArrayFromString", () => {
    test("The type of function getArrayFromString is a function", () => {
      expect(typeof getArrayFromString).toBe("function");
    });
  });

  describe("Testing the return type of function getArrayFromString", () => {
    test("The return type of function getArrayFromString is an array if the method is called without an argument", () => {
      expect(Array.isArray(getArrayFromString())).toBe(true);
    });
    
    test("The return type of function getArrayFromString is an array if the method is called with an argument", () => {
      expect(Array.isArray(getArrayFromString("1, -3, 2"))).toBe(true);
    });
  });

  describe("Testing the return values of function getArrayFromString", () => {
    test("The function getArrayFromString works correctly if the function is called without an argument", () => {
      expect(getArrayFromString()).toStrictEqual([]);
    });

    test("Function getArrayFromString works correctly if the function is called with an argument that contains positive numbers", () => {
      expect(getArrayFromString("2, 1, 3")).toStrictEqual([2, 1, 3]);
    });
    
    test("Function getArrayFromString works correctly if the function is called with an argument that contains negative numbers and positive numbers", () => {
      expect(getArrayFromString("2, 1, -3")).toStrictEqual([2, 1, -3]);
    });
    
    test("Function getArrayFromString works correctly if the function is called with an argument that contains decimals", () => {
      expect(getArrayFromString("2.5, 1.0, -3.5")).toStrictEqual([2.5, 1.0, -3.5]);
    });

    test("Function getArrayFromString works correctly if the function is called with an argument that contains other types besides strings of numbers that can be converted into numbers", () => {
      expect(getArrayFromString("a, 1, 3")).toStrictEqual(["a", 1, 3]);
    });
  });
});
