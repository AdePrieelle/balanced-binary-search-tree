import { getIsArrayWithoutDuplicates } from "../getIsArrayWithoutDuplicates.js";

describe("Testing the function getIsArrayWithoutDuplicates", () => {
  describe("Testing the type of function getIsArrayWithoutDuplicates", () => {
    test("The type of function getIsArrayWithoutDuplicates is correct", () => {
      expect(typeof getIsArrayWithoutDuplicates).toBe("function");
    });
  });

  describe("Testing the return values of function getIsArrayWithoutDuplicates", () => {
    test("The return value of function getIsArrayWithoutDuplicates is correct if the function is called without an argument", () => {
      expect(getIsArrayWithoutDuplicates()).toBe(false);
    });

    test("The return value of function getIsArrayWithoutDuplicates is correct if the function is called with arguments of the wrong type", () => {
      expect(getIsArrayWithoutDuplicates(1)).toBe(false);
    });

    test("The return value of function getIsArrayWithoutDuplicates is correct if the function is called with arguments of the right type, 1st of type array that is empty", () => {
      const mockArray = jest.fn(() => ([]));
      expect(getIsArrayWithoutDuplicates(
        mockArray(), 
      )).toBe(true);
    });
    
    test("The return value of function getIsArrayWithoutDuplicates is correct if the function is called with arguments of the right type, 1st of type array that has one duplicated value", () => {
      const mockArray = jest.fn(() => (["1", "-10.5", "2", "-10.5"]));
      expect(getIsArrayWithoutDuplicates(
        mockArray(), 
      )).toBe(false);
    });

    test("The return value of function getIsArrayWithoutDuplicates is correct if the function is called with arguments of the right type, 1st of type array that has multiple duplicated value", () => {
      const mockArray = jest.fn(() => (["1", "-10.5", "2", "-10.5", "1"]));
      expect(getIsArrayWithoutDuplicates(
        mockArray(), 
      )).toBe(false);
    });

    test("The return value of function getIsArrayWithoutDuplicates is correct if the function is called with arguments of the right type, 1st of type array that doesn't have duplicated values", () => {
      const mockArray = jest.fn(() => (["1", "-10.5", "2"]));
      expect(getIsArrayWithoutDuplicates(
        mockArray(), 
      )).toBe(true);
    });
  });
});
