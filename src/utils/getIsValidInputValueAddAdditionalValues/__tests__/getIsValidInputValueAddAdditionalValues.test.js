import { getIsValidInputValueAddAdditionalValues } from "../getIsValidInputValueAddAdditionalValues.js";

describe("Testing the function getIsValidInputValueAddAdditionalValues", () => {
  describe("Testing the type of function getIsValidInputValueAddAdditionalValues", () => {
    test("The type of function getIsValidInputValueAddAdditionalValues is a function", () => {
      expect(typeof getIsValidInputValueAddAdditionalValues).toBe("function");
    });
  });

  describe("Testing the return type of function getIsValidInputValueAddAdditionalValues", () => {
    test("The return type of function getIsValidInputValueAddAdditionalValues is a boolean if the method is called without an argument", () => {
      expect(typeof(getIsValidInputValueAddAdditionalValues())).toBe("boolean");
    });

    test("The return type of function getIsValidInputValueAddAdditionalValues is a boolean if the method is called with arguments of the wrong type", () => {
      expect(typeof(getIsValidInputValueAddAdditionalValues(1, 2, 3, 4, 5, 6, 7, 8))).toBe("boolean");
    });
    
    test("The return type of function getIsValidInputValueAddAdditionalValues is a boolean if the method is called with one input value that is already in the binarySearchTree and the function is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function, with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("1.5, -3.0, 2.0"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const getArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([1.5, -3.0, 2.0]));
      const delimiter = jest.fn(() => (", "));
      const getArrayFromString = jest.fn(() => (["1.5", "-3.0", "2.0"]));
      const getArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([1.5, -3.0, 2.0]));
      const getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree = jest.fn(() => false);
      expect(typeof(getIsValidInputValueAddAdditionalValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        getArrayWithStringNumbersConvertedToNumbersFromString, 
        delimiter(), 
        getArrayFromString,
        getArrayWithStringNumbersConvertedToNumbersFromArray,
        getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree
      ))).toBe("boolean");
    });

    test("The return type of function getIsValidInputValueAddAdditionalValues is a boolean if the method is called with more than one input value that is already in the binarySearchTree and the function is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function, with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("1.5, -3.5, 2.0"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const getArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([1.5, -3.5, 2.0]));
      const delimiter = jest.fn(() => (", "));
      const getArrayFromString = jest.fn(() => (["1.5", "-3.5", "2.0"]));
      const getArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([1.5, -3.5, 2.0]));
      const getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree = jest.fn(() => false);
      expect(typeof(getIsValidInputValueAddAdditionalValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        getArrayWithStringNumbersConvertedToNumbersFromString, 
        delimiter(), 
        getArrayFromString,
        getArrayWithStringNumbersConvertedToNumbersFromArray,
        getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree
      ))).toBe("boolean");
    });

    test("The return type of function getIsValidInputValueAddAdditionalValues is a boolean if the method is called without any input values that are already in the binarySearchTree and the function is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function, with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("1.5, -3.0, 2.5"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})), 
        find: (() => null)
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})), 
        find: (() => null)
      }));
      const getArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([1.5, -3.0, 2.5]));
      const delimiter = jest.fn(() => (", "));
      const getArrayFromString = jest.fn(() => (["1.5", "-3.0", "2.5"]));
      const getArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([1.5, -3.0, 2.5]));
      const getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree = jest.fn(() => true);
      expect(typeof(getIsValidInputValueAddAdditionalValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        getArrayWithStringNumbersConvertedToNumbersFromString, 
        delimiter(), 
        getArrayFromString,
        getArrayWithStringNumbersConvertedToNumbersFromArray,
        getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree
      ))).toBe("boolean");
    });
  });

  describe("Testing the return values of function getIsValidInputValueAddAdditionalValues", () => {
    test("The function getIsValidInputValueAddAdditionalValues works correctly if the method is called without an argument", () => {
      expect(getIsValidInputValueAddAdditionalValues()).toBe(false);
    });

    test("The function getIsValidInputValueAddAdditionalValues works correctly if the method is called with arguments of the wrong type", () => {
      expect(getIsValidInputValueAddAdditionalValues(1, 2, 3, 4, 5, 6, 7, 8)).toBe(false);
    });
    
    test("The function getIsValidInputValueAddAdditionalValues works correctly if the method is called with one input value that is already in the binarySearchTree and the function is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function, with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("1.5, -3.0, 2.0"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const getArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([1.5, -3.0, 2.0]));
      const delimiter = jest.fn(() => (", "));
      const getArrayFromString = jest.fn(() => (["1.5", "-3.0", "2.0"]));
      const getArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([1.5, -3.0, 2.0]));
      const getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree = jest.fn(() => false);
      expect(getIsValidInputValueAddAdditionalValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        getArrayWithStringNumbersConvertedToNumbersFromString, 
        delimiter(), 
        getArrayFromString,
        getArrayWithStringNumbersConvertedToNumbersFromArray,
        getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree
      )).toBe(false);
    });

    test("The function getIsValidInputValueAddAdditionalValues works correctly if the method is called with more than one input value that is already in the binarySearchTree and the function is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function, with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("1.5, -3.5, 2.0"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const getArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([1.5, -3.5, 2.0]));
      const delimiter = jest.fn(() => (", "));
      const getArrayFromString = jest.fn(() => (["1.5", "-3.5", "2.0"]));
      const getArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([1.5, -3.5, 2.0]));
      const getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree = jest.fn(() => false);
      expect(getIsValidInputValueAddAdditionalValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        getArrayWithStringNumbersConvertedToNumbersFromString, 
        delimiter(), 
        getArrayFromString,
        getArrayWithStringNumbersConvertedToNumbersFromArray,
        getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree
      )).toBe(false);
    });

    test("The function getIsValidInputValueAddAdditionalValues works correctly if the method is called without any input values that are already in the binarySearchTree and the function is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function, with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("1.5, -3.0, 2.5"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})), 
        find: (() => null)
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})), 
        find: (() => null)
      }));
      const getArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([1.5, -3.0, 2.5]));
      const delimiter = jest.fn(() => (", "));
      const getArrayFromString = jest.fn(() => (["1.5", "-3.0", "2.5"]));
      const getArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([1.5, -3.0, 2.5]));
      const getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree = jest.fn(() => true);
      expect(getIsValidInputValueAddAdditionalValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        getArrayWithStringNumbersConvertedToNumbersFromString, 
        delimiter(), 
        getArrayFromString,
        getArrayWithStringNumbersConvertedToNumbersFromArray,
        getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree
      )).toBe(true);
    });
  });
});
