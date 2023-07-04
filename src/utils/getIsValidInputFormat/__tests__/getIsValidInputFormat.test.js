import { getIsValidInputFormat } from "../getIsValidInputFormat.js";

describe("Testing the function getIsValidInputFormat", () => {
  describe("Testing the type of function getIsValidInputFormat", () => {
    test("The type of function getIsValidInputFormat is correct", () => {
      expect(typeof getIsValidInputFormat).toBe("function");
    });
  });

  describe("Testing the return values of function getIsValidInputFormat", () => {
    test("The return value of function getIsValidInputFormat is correct if the function is called without an argument", () => {
      expect(getIsValidInputFormat()).toBe(false);
    });

    test("The return value of function getIsValidInputFormat is correct if the function is called with arguments of the wrong type", () => {
      expect(getIsValidInputFormat(1, 2)).toBe(false);
    });

    test("The return value of function getIsValidInputFormat is correct if the function is called with arguments of the right type, 1st of type string and 2nd of type object with a method called test that returns false", () => {
      const mockInput = jest.fn(() => ("1,"));
      const mockRegexTestMethod = jest.fn(() => (false));
      const mockRegex = jest.fn(() => ({ test: (mockRegexTestMethod) }));
      expect(getIsValidInputFormat(
        mockInput(),
        mockRegex()
      )).toBe(false);
      expect(mockRegexTestMethod.mock.calls).toHaveLength(1);
      expect(mockRegexTestMethod.mock.calls[0][0]).toBe(mockInput());
      expect(mockRegexTestMethod.mock.results[0].value).toStrictEqual(false);
    });

    test("The return value of function getIsValidInputFormat is correct if the function is called with arguments of the right type, 1st of type string and 2nd of type object with a method called test that returns true", () => {
      const mockInput = jest.fn(() => ("-1.2, 2, 3.5"));
      const mockRegexTestMethod = jest.fn(() => (true));
      const mockRegex = jest.fn(() => ({ test: (mockRegexTestMethod) }));
      expect(getIsValidInputFormat(
        mockInput(),
        mockRegex()
      )).toBe(true);
      expect(mockRegexTestMethod.mock.calls).toHaveLength(1);
      expect(mockRegexTestMethod.mock.calls[0][0]).toBe(mockInput());
      expect(mockRegexTestMethod.mock.results[0].value).toStrictEqual(true);
    });
  });
});
