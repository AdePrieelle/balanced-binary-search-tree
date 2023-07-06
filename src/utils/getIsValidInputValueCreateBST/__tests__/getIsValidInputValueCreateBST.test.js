import { getIsValidInputValueCreateBST } from "../getIsValidInputValueCreateBST.js";

describe("Testing the function getIsValidInputValueCreateBST", () => {
  describe("Testing the type of function getIsValidInputValueCreateBST", () => {
    test("The type of function getIsValidInputValueCreateBST is correct", () => {
      expect(typeof getIsValidInputValueCreateBST).toBe("function");
    });
  });

  describe("Testing the return values of function getIsValidInputValueCreateBST", () => {
    test("The return value of function getIsValidInputValueCreateBST is correct if the function is called without an argument", () => {
      expect(getIsValidInputValueCreateBST()).toBe(false);
    });

    test("The return value of function getIsValidInputValueCreateBST is correct if the function is called with arguments of the wrong type", () => {
      expect(getIsValidInputValueCreateBST(1)).toBe(false);
    });
    
    test("The return value of function getIsValidInputValueCreateBST is correct if the function is called with arguments of the right type, 1st of type boolean that is false", () => {
      const mockIsValidInputFormat = jest.fn(() => (false));
      expect(getIsValidInputValueCreateBST(
        mockIsValidInputFormat()
      )).toBe(false);
    });

    test("The return value of function getIsValidInputValueCreateBST is correct if the function is called with arguments of the right type, 1st of type boolean that is true", () => {
      const mockIsValidInputFormat = jest.fn(() => (true));
      expect(getIsValidInputValueCreateBST(
        mockIsValidInputFormat()
      )).toBe(true);
    });
  });
});
