import { getIsInputSuccess } from "../getIsInputSuccess.js";

describe("Testing the function getIsInputSuccess", () => {
  describe("Testing the type of function getIsInputSuccess", () => {
    test("The type of function getIsInputSuccess is correct", () => {
      expect(typeof getIsInputSuccess).toBe("function");
    });
  });

  describe("Testing the return values of function getIsInputSuccess", () => {
    test("The return value of function getIsInputSuccess is correct if the function is called without an argument", () => {
      expect(getIsInputSuccess()).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the wrong type", () => {
      expect(getIsInputSuccess("1", "2", "3", "4", "5", "6", "7")).toBe(false);
    });

    // 1-4
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 5-8
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 9-12
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 13-16
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 17-20
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 21-24
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 25-28
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 29-32
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 33-36
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 37-40
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 41-44
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 45-48
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 49-52
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 53-56
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 57-60
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 61-64
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 65-68
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    // 69-72
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 73-76
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    // 77-80
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 81-84
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    // 85-88
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 89-92
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    // 93-96
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is false, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 97-100
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    // 101-104
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 105-108
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    // 109-112
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is false, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 113-116
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    // 117-120
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    // 121-124
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(false);
    });

    // 125-128
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true, 5th of type boolean that is true, 6th of type boolean that is true, 7th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockIsInputWithoutDuplicates(),
        mockIsLastUpdatedFieldset()
      )).toBe(true);
    });
  });
});
