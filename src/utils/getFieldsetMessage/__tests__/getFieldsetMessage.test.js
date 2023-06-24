import { getFieldsetMessage } from "../getFieldsetMessage.js";

test.only("test1 skip other tests", () => {
  expect(2).toBe(2);
});

describe("Testing the function getFieldsetMessage", () => {
  describe("Testing the type of function getFieldsetMessage", () => {
    test("The type of function getFieldsetMessage is a function", () => {
      expect(typeof getFieldsetMessage).toBe("function");
    });
  });

  describe("Testing the return type of function getFieldsetMessage", () => {
    test("The return type of function getFieldsetMessage is a string if the method is called without an argument", () => {
      expect(typeof(getFieldsetMessage())).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the wrong type", () => {
      expect(typeof(getFieldsetMessage(1, 2, 3, 4, 5, 6, 7, 8))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => ("2,"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => ("2,"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => ("2,"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => ("2,"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => ("2,"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => ("2,"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => ("2,"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => ("2,"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => ("2"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => ("2"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => ("2"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => ("2"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => ("2"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => ("2"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("object");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => ("2"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });

    test("The return type of function getFieldsetMessage is a string if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is true, with an argument for the seventh parameter that is of type function and returns a boolean that is true, with an argument for the eighth parameter that is of type string and the string isn't empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is true and with an argument for the eleventh parameter that is of type boolean that is true", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (true));
      const mockGetIsValidInputValue = jest.fn(() => (true));
      const mockInput = jest.fn(() => ("2"));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (true));
      const mockInputUpdatedBST = jest.fn(() => (true));
      expect(typeof(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      ))).toBe("string");
    });
  });

  describe("Testing the return values of function getFieldsetMessage", () => {
    test("The function getFieldsetMessage works correctly if the method is called without an argument", () => {
      expect(getFieldsetMessage()).toStrictEqual((<>&nbsp;</>));
    });

    test("The function getFieldsetMessage works correctly if the method is called with arguments of the wrong type", () => {
      expect(getFieldsetMessage(1, 2, 3, 4, 5, 6, 7, 8)).toStrictEqual((<>&nbsp;</>));
    });



    test("The function getFieldsetMessage works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type string, with an argument for the third parameter that is of type string, with an argument for the fourth parameter that is of type string, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and returns a boolean that is false, with an argument for the seventh parameter that is of type function and returns a boolean that is false, with an argument for the eighth parameter that is of type string and the string is empty, with an argument for the ninth parameter which is of type string, with an argument for the tenth parameter that is of type boolean that is false and with an argument for the eleventh parameter that is of type boolean that is false", () => {
      const mockFieldsetMessageEmptyInputErrorValue = jest.fn(() => ("Please enter the additional value(s)"));
      const mockFieldsetMessageEmptyInputSuccessValue = jest.fn(() => (<>&nbsp;</>));
      const mockFieldsetMessageInputFormatErrorValue = jest.fn(() => ("Please enter the additional value(s) in the correct format"));
      const mockFieldsetMessageInputValueErrorValue = jest.fn(() => ("Please only enter value(s) that don't already exist in the BST"));
      const mockFieldsetMessageReadyToUpdateValue = jest.fn(() => ("The BST is ready to be updated"));
      const mockGetIsValidInputFormat = jest.fn(() => (false));
      const mockGetIsValidInputValue = jest.fn(() => (false));
      const mockInput = jest.fn(() => (""));
      const mockInputRegex = jest.fn(() => ("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"));
      const mockInputSuccess = jest.fn(() => (false));
      const mockInputUpdatedBST = jest.fn(() => (false));
      expect(getFieldsetMessage(
        mockFieldsetMessageEmptyInputErrorValue(), 
        mockFieldsetMessageEmptyInputSuccessValue(), 
        mockFieldsetMessageInputFormatErrorValue(),
        mockFieldsetMessageInputValueErrorValue(),
        mockFieldsetMessageReadyToUpdateValue(),
        mockGetIsValidInputFormat,
        mockGetIsValidInputValue,
        mockInput(),
        mockInputRegex(),
        mockInputSuccess(),
        mockInputUpdatedBST()
      )).toBe(mockFieldsetMessageEmptyInputErrorValue());
    });


    


  });
});
