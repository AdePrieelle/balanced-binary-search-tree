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
      expect(getIsInputSuccess("1", "2", "3", "4", "5")).toBe(false);
    });

    // 1-4
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    // 5-8
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    // 9-12
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    // 13-16
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true and 5th of type boolean that is false", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    // 17-20
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is false and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is false and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    // 21-24
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is false and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is false and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    // 25-28
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is false, 4th of type boolean that is true and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is false, 4th of type boolean that is true and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(false);
    });

    // 29-32
    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is false, 3rd of type boolean that is true, 4th of type boolean that is true and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is false, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (false));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });

    test("The return value of function getIsInputSuccess is correct if the function is called with arguments of the right type, 1st of type boolean that is true, 2nd of type boolean that is true, 3rd of type boolean that is true, 4th of type boolean that is true and 5th of type boolean that is true", () => {
      const mockInputButtonClicked = jest.fn(() => (true));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      expect(getIsInputSuccess(
        mockInputButtonClicked(),
        mockIsEmptyInput(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue()
      )).toBe(true);
    });
  });
});
