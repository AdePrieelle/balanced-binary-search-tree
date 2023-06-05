import { getIsValidInputValueRemoveValues } from "../getIsValidInputValueRemoveValues.js";

describe("Testing the function getIsValidInputValueRemoveValues", () => {
  describe("Testing the type of function getIsValidInputValueRemoveValues", () => {
    test("The type of function getIsValidInputValueRemoveValues is a function", () => {
      expect(typeof getIsValidInputValueRemoveValues).toBe("function");
    });
  });

  describe("Testing the return type of function getIsValidInputValueRemoveValues", () => {
    test("The return type of function getIsValidInputValueRemoveValues is a boolean if the method is called without an argument", () => {
      expect(typeof(getIsValidInputValueRemoveValues())).toBe("boolean");
    });

    test("The return type of function getIsValidInputValueRemoveValues is a boolean if the method is called with arguments of the wrong type", () => {
      expect(typeof(getIsValidInputValueRemoveValues(1, 2, 3, 4, 5, 6, 7, 8))).toBe("boolean");
    });
    
    test("The return type of function getIsValidInputValueRemoveValues is a boolean if the method is called with arguments of the right type, with an argument for the first parameter that is of type string and with one element that isn't in the binarySearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function, with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("10"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([10]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["10"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([10]));
      const mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree = jest.fn(() => false);
      expect(typeof(getIsValidInputValueRemoveValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree
      ))).toBe("boolean");
    });

    test("The return type of function getIsValidInputValueRemoveValues is a boolean if the method is called with arguments of the right type, with an argument for the first parameter that is of type string and with one element that is in the binarySearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function, with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("-3.5"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([-3.5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["-3.5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([-3.5]));
      const mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree = jest.fn(() => true);
      expect(typeof(getIsValidInputValueRemoveValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree
      ))).toBe("boolean");
    });

    test("The return type of function getIsValidInputValueRemoveValues is a boolean if the method is called with arguments of the right type, with an argument for the first parameter that is of type string with multiple elements of which at least one isn't in the binarSearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function, with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("2.0, -3.5, 10"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})), 
        find: (() => null)
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})), 
        find: (() => null)
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([2.0, -3.5, 10]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["2.0", "-3.5", "10"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([2.0, -3.5, 10]));
      const mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree = jest.fn(() => false);
      expect(typeof(getIsValidInputValueRemoveValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree
      ))).toBe("boolean");
    });

    test("The return type of function getIsValidInputValueRemoveValues is a boolean if the method is called with arguments of the right type, with an argument for the first parameter that is of type string with multiple elements which are all in the binarSearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function, with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("2.0, -3.5"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})), 
        find: (() => null)
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})), 
        find: (() => null)
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([2.0, -3.5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["2.0", "-3.5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([2.0, -3.5]));
      const mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree = jest.fn(() => true);
      expect(typeof(getIsValidInputValueRemoveValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree
      ))).toBe("boolean");
    });
  });

  describe("Testing the return values of function getIsValidInputValueRemoveValues", () => {
    test("The function getIsValidInputValueRemoveValues works correctly if the method is called without an argument", () => {
      expect(getIsValidInputValueRemoveValues()).toBe(false);
    });

    test("The function getIsValidInputValueRemoveValues works correctly if the method is called with arguments of the wrong type", () => {
      expect(getIsValidInputValueRemoveValues(1, 2, 3, 4, 5, 6, 7, 8)).toBe(false);
    });
    
    test("The function getIsValidInputValueRemoveValues works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is of type string and with one element that isn't in the binarySearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function, with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("10"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([10]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["10"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([10]));
      const mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree = jest.fn(() => false);
      expect(getIsValidInputValueRemoveValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree
      )).toBe(false);
    });

    test("The function getIsValidInputValueRemoveValues works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is of type string and with one element that is in the binarySearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function, with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("-3.5"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } })), 
        find: ((node) => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }))
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([-3.5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["-3.5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([-3.5]));
      const mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree = jest.fn(() => true);
      expect(getIsValidInputValueRemoveValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree
      )).toBe(true);
    });

    test("The function getIsValidInputValueRemoveValues works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is of type string with multiple elements of which at least one isn't in the binarSearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function, with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("2.0, -3.5, 10"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})), 
        find: (() => null)
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})), 
        find: (() => null)
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([2.0, -3.5, 10]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["2.0", "-3.5", "10"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([2.0, -3.5, 10]));
      const mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree = jest.fn(() => false);
      expect(getIsValidInputValueRemoveValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree
      )).toBe(false);
    });

    test("The function getIsValidInputValueRemoveValues works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is of type string with multiple elements which are all in the binarSearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function, with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("2.0, -3.5"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})), 
        find: (() => null)
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})), 
        find: (() => null)
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([2.0, -3.5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["2.0", "-3.5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([2.0, -3.5]));
      const mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree = jest.fn(() => true);
      expect(getIsValidInputValueRemoveValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree
      )).toBe(true);
    });
  });
});
