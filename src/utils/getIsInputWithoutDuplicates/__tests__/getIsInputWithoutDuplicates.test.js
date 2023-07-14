import { getIsInputWithoutDuplicates } from "../getIsInputWithoutDuplicates.js";

describe("Testing the function getIsInputWithoutDuplicates", () => {
  describe("Testing the type of function getIsInputWithoutDuplicates", () => {
    test("The type of function getIsInputWithoutDuplicates is correct", () => {
      expect(typeof getIsInputWithoutDuplicates).toBe("function");
    });
  });

  describe("Testing the return values of function getIsInputWithoutDuplicates", () => {
    test("The return value of function getIsInputWithoutDuplicates is correct if the function is called without an argument", () => {
      expect(getIsInputWithoutDuplicates()).toBe(false);
    });

    test("The return value of function getIsInputWithoutDuplicates is correct if the function is called with arguments of the wrong type", () => {
      expect(getIsInputWithoutDuplicates(1, 2, 3, 4)).toBe(false);
    });

    test("The return value of function getIsInputWithoutDuplicates is correct if the function is called with arguments of the right type, 1st of type string that is empty, 2nd of type string, 3rd of type function that returns an empty array, 4th of type function that returns true", () => {
      const mockInput = jest.fn(() => (""));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => ([[]]));
      const mockGetIsArrayWithoutDuplicates = jest.fn(() => (true));
      expect(getIsInputWithoutDuplicates(
        mockInput(), 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetIsArrayWithoutDuplicates,
      )).toBe(mockGetIsArrayWithoutDuplicates());
      expect(mockGetArrayFromString.mock.calls).toHaveLength(1);
      expect(mockGetArrayFromString.mock.calls[0][0]).toStrictEqual(mockInput());
      expect(mockGetArrayFromString.mock.calls[0][1]).toStrictEqual(mockDelimiter());
      expect(mockGetArrayFromString.mock.results[0].value).toStrictEqual(mockGetArrayFromString());
      expect(mockGetIsArrayWithoutDuplicates.mock.calls).toHaveLength(2);
      expect(mockGetIsArrayWithoutDuplicates.mock.calls[0][0]).toStrictEqual(mockGetArrayFromString());
      expect(mockGetIsArrayWithoutDuplicates.mock.calls[1][0]).toStrictEqual(undefined);
      expect(mockGetIsArrayWithoutDuplicates.mock.results[0].value).toStrictEqual(mockGetIsArrayWithoutDuplicates());
    });
    
    test("The return value of function getIsInputWithoutDuplicates is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type string, 3rd of type function that returns an array, 4th of type function that returns false", () => {
      const mockInput = jest.fn(() => ("1, -10.5, 2, -10.5"));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => ([["1", "-10.5", "2", "-10.5"]]));
      const mockGetIsArrayWithoutDuplicates = jest.fn(() => (false));
      expect(getIsInputWithoutDuplicates(
        mockInput(), 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetIsArrayWithoutDuplicates,
      )).toBe(mockGetIsArrayWithoutDuplicates());
      expect(mockGetArrayFromString.mock.calls).toHaveLength(1);
      expect(mockGetArrayFromString.mock.calls[0][0]).toStrictEqual(mockInput());
      expect(mockGetArrayFromString.mock.calls[0][1]).toStrictEqual(mockDelimiter());
      expect(mockGetArrayFromString.mock.results[0].value).toStrictEqual(mockGetArrayFromString());
      expect(mockGetIsArrayWithoutDuplicates.mock.calls).toHaveLength(2);
      expect(mockGetIsArrayWithoutDuplicates.mock.calls[0][0]).toStrictEqual(mockGetArrayFromString());
      expect(mockGetIsArrayWithoutDuplicates.mock.calls[1][0]).toStrictEqual(undefined);
      expect(mockGetIsArrayWithoutDuplicates.mock.results[0].value).toStrictEqual(mockGetIsArrayWithoutDuplicates());
    });

    test("The return value of function getIsInputWithoutDuplicates is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type string, 3rd of type function that returns an array, 4th of type function that returns true", () => {
      const mockInput = jest.fn(() => ("1, -10.5, 2"));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => ([["1", "-10.5", "2"]]));
      const mockGetIsArrayWithoutDuplicates = jest.fn(() => (true));
      expect(getIsInputWithoutDuplicates(
        mockInput(), 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetIsArrayWithoutDuplicates,
      )).toBe(mockGetIsArrayWithoutDuplicates());
      expect(mockGetArrayFromString.mock.calls).toHaveLength(1);
      expect(mockGetArrayFromString.mock.calls[0][0]).toStrictEqual(mockInput());
      expect(mockGetArrayFromString.mock.calls[0][1]).toStrictEqual(mockDelimiter());
      expect(mockGetArrayFromString.mock.results[0].value).toStrictEqual(mockGetArrayFromString());
      expect(mockGetIsArrayWithoutDuplicates.mock.calls).toHaveLength(2);
      expect(mockGetIsArrayWithoutDuplicates.mock.calls[0][0]).toStrictEqual(mockGetArrayFromString());
      expect(mockGetIsArrayWithoutDuplicates.mock.calls[1][0]).toStrictEqual(undefined);
      expect(mockGetIsArrayWithoutDuplicates.mock.results[0].value).toStrictEqual(mockGetIsArrayWithoutDuplicates());
    });
  });
});
