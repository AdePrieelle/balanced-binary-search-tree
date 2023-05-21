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

    test("The return type of function getArrayFromString is an array if the method is called with an argument for the first parameter that isn't a string", () => {
      expect(Array.isArray(getArrayFromString(2))).toBe(true);
    });
    
    test("The return type of function getArrayFromString is an array if the method is called with an argument for the first parameter that is a string and without an argument for the second parameter", () => {
      expect(Array.isArray(getArrayFromString("a, -3.5, 2.0"))).toBe(true);
    });

    test("The return type of function getArrayFromString is an array if the method is called with an argument for the first parameter that is a string and with an argument for the second parameter", () => {
      expect(Array.isArray(getArrayFromString("a, -3.5, 2.0", ", "))).toBe(true);
    });
  });

  describe("Testing the return values of function getArrayFromString", () => {
    test("The function getArrayFromString works correctly if the function is called without an argument", () => {
      expect(getArrayFromString()).toStrictEqual([]);
    });

    test("Function getArrayFromString works correctly if the function is called with an argument for the first parameter that isn't a string", () => {
      expect(getArrayFromString(2)).toStrictEqual([]);
    });

    test("Function getArrayFromString works correctly if the function is called with an argument for the first parameter that is a string and without an argument for the second parameter", () => {
      expect(getArrayFromString("a, -3.5, 2.0")).toStrictEqual(["a, -3.5, 2.0"]);
    });

    test("Function getArrayFromString works correctly if the function is called with an argument for the first parameter that is a string and with an argument for the second parameter", () => {
      expect(getArrayFromString("a, -3.5, 2.0", ", ")).toStrictEqual(["a", "-3.5", "2.0"]);
    });
  });
});
