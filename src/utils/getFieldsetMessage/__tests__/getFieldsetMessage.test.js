import { getFieldsetMessage } from "../getFieldsetMessage.js";

describe("Testing the function getFieldsetMessage", () => {
  describe("Testing the type of function getFieldsetMessage", () => {
    test("The type of function getFieldsetMessage is correct", () => {
      expect(typeof getFieldsetMessage).toBe("function");
    });
  });

  describe("Testing the return values of function getFieldsetMessage", () => {
    test("The return value of function getFieldsetMessage is correct if the function is called without an argument", () => {
      expect(getFieldsetMessage()).toStrictEqual((<>&nbsp;</>));
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the wrong type", () => {
      expect(getFieldsetMessage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)).toStrictEqual((<>&nbsp;</>));
    });

    // 1-4
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 5-8
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 9-12
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 13-16
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    // 17-20
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageDuplicateInputValuesErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 21-24
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageDuplicateInputValuesErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 25-28
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageDuplicateInputValuesErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 29-32
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageDuplicateInputValuesErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    // 33-36
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 37-40
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 41-44
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 45-48
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    // 49-52
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageDuplicateInputValuesErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 53-56
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageDuplicateInputValuesErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 57-60
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageDuplicateInputValuesErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 61-64
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageDuplicateInputValuesErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    // 65-68
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 69-72
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 73-76
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 77-80
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    // 81-84
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputValueErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 85-88
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputValueErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 89-92
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputValueErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 93-96
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputValueErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is false, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (false));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    // 97-100
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 101-104
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 105-108
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 109-112
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageInputFormatErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is false, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    // 113-116
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 117-120
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputErrorValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is false, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (false));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 121-124
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is false, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (false));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    // 125-128
    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageEmptyInputSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is false, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (false));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is false, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (false));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageReadyToUpdateValue());
    });

    test("The return value of function getFieldsetMessage is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type string, 4th of type string, 5th of type string, 6th of type object, 7th of type boolean that is true, 8th of type boolean that is true, 9th of type boolean that is true, 10th of type boolean that is true, 11th of type boolean that is true, 12th of type boolean that is true, 13th of type string, 14th of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => ((<>&nbsp;</>)));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockFieldsetMessageUpdatedSuccessValue = jest.fn(() => (<div>mockFieldsetMessageUpdatedSuccessValueDivText</div>));
      const mockIsEmptyInput = jest.fn(() => (true));
      const mockIsInputSuccess = jest.fn(() => (true));
      const mockIsLastUpdatedFieldset = jest.fn(() => (true));
      const mockIsUpdatedBST = jest.fn(() => (true));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockIsValidInputValue = jest.fn(() => (true));
      const mockFieldsetMessageDuplicateInputValuesErrorValue = jest.fn(() => ("Please remove duplicate input values"));
      const mockIsInputWithoutDuplicates = jest.fn(() => (true));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockFieldsetMessageUpdatedSuccessValue(),
        mockIsEmptyInput(),
        mockIsInputSuccess(),
        mockIsLastUpdatedFieldset(),
        mockIsUpdatedBST(),
        mockIsValidInputFormat(),
        mockIsValidInputValue(),
        mockFieldsetMessageDuplicateInputValuesErrorValue(),
        mockIsInputWithoutDuplicates()
      )).toStrictEqual(mockFieldsetMessageUpdatedSuccessValue());
    });
  });
});
