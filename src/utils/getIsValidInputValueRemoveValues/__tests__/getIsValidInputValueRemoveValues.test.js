import { getIsValidInputValueRemoveValues } from "../getIsValidInputValueRemoveValues.js";

describe("Testing the function getIsValidInputValueRemoveValues", () => {
  describe("Testing the type of function getIsValidInputValueRemoveValues", () => {
    test("The type of function getIsValidInputValueRemoveValues is correct", () => {
      expect(typeof getIsValidInputValueRemoveValues).toBe("function");
    });
  });

  describe("Testing the return values of function getIsValidInputValueRemoveValues", () => {
    test("The return value of function getIsValidInputValueRemoveValues is correct if the function is called without an argument", () => {
      expect(getIsValidInputValueRemoveValues()).toBe(false);
    });

    test("The return value of function getIsValidInputValueRemoveValues is correct if the function is called with arguments of the wrong type", () => {
      expect(getIsValidInputValueRemoveValues(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(false);
    });

    test("The return value of function getIsValidInputValueRemoveValues is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function, 4th of type function, 5th of type string, 6th of type function, 7th of type function, 8th of type function that returns false and 9th of type boolean that is false", () => {
      const mockInput = jest.fn(() => ("2.0, -3.5, 10"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }
      ));
      const mockBinarySearchTreeFindMethod = jest.fn(() => (
        null
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod), 
        find: (mockBinarySearchTreeFindMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }
      ));
      const mockCloneObjectFindMethod = jest.fn(() => (
        null
      ));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod), 
        find: (mockCloneObjectFindMethod)
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([2.0, -3.5, 10]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["2.0", "-3.5", "10"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([2.0, -3.5, 10]));
      const mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree = jest.fn(() => false);
      const mockIsValidInputFormat = jest.fn(() => (false));
      expect(getIsValidInputValueRemoveValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree,
        mockIsValidInputFormat()
      )).toBe(false);
      expect(mockCloneObject.mock.calls).toHaveLength(0);
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.calls).toHaveLength(0);
      expect(mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree.mock.calls).toHaveLength(0);
    });

    test("The return value of function getIsValidInputValueRemoveValues is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function, 4th of type function, 5th of type string, 6th of type function, 7th of type function, 8th of type function that returns false and 9th of type boolean that is true", () => {
      const mockInput = jest.fn(() => ("2.0, -3.5, 10"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }
      ));
      const mockBinarySearchTreeFindMethod = jest.fn(() => (
        null
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod), 
        find: (mockBinarySearchTreeFindMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }
      ));
      const mockCloneObjectFindMethod = jest.fn(() => (
        null
      ));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod), 
        find: (mockCloneObjectFindMethod)
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([2.0, -3.5, 10]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["2.0", "-3.5", "10"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([2.0, -3.5, 10]));
      const mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree = jest.fn(() => false);
      const mockIsValidInputFormat = jest.fn(() => (true));
      expect(getIsValidInputValueRemoveValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree,
        mockIsValidInputFormat()
      )).toBe(false);
      expect(mockCloneObject.mock.calls).toHaveLength(1);
      expect(mockCloneObject.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockCloneObject.mock.results[0].value).toStrictEqual(mockCloneObject());
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.calls).toHaveLength(1);
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.calls[0][0]).toStrictEqual(mockInput(), mockDelimiter(), mockGetArrayFromString, mockGetArrayWithStringNumbersConvertedToNumbersFromArray);
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.results[0].value).toStrictEqual(mockGetArrayWithStringNumbersConvertedToNumbersFromString());
      expect(mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree.mock.calls).toHaveLength(1);
      expect(mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree.mock.calls[0][0]).toStrictEqual(mockGetArrayWithStringNumbersConvertedToNumbersFromString(), mockCloneObject(), mockCloneObject);
      expect(mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree.mock.results[0].value).toStrictEqual(mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree());
    
    });

    test("The return value of function getIsValidInputValueRemoveValues is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function, 4th of type function, 5th of type string, 6th of type function, 7th of type function, 8th of type function that returns true and 9th of type boolean that is false", () => {
      const mockInput = jest.fn(() => ("2.0, -3.5"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }
      ));
      const mockBinarySearchTreeFindMethod = jest.fn(() => (
        null
      ))
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod), 
        find: (mockBinarySearchTreeFindMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }
      ));
      const mockCloneObjectFindMethod = jest.fn(() => (
        null
      ));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod), 
        find: (mockCloneObjectFindMethod)
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([2.0, -3.5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["2.0", "-3.5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([2.0, -3.5]));
      const mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree = jest.fn(() => true);
      const mockIsValidInputFormat = jest.fn(() => (false));
      expect(getIsValidInputValueRemoveValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree,
        mockIsValidInputFormat()
      )).toBe(false);
      expect(mockCloneObject.mock.calls).toHaveLength(0);
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.calls).toHaveLength(0);
      expect(mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree.mock.calls).toHaveLength(0);
    });

    test("The return value of function getIsValidInputValueRemoveValues is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function, 4th of type function, 5th of type string, 6th of type function, 7th of type function, 8th of type function that returns true and 9th of type boolean that is true", () => {
      const mockInput = jest.fn(() => ("2.0, -3.5"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }
      ));
      const mockBinarySearchTreeFindMethod = jest.fn(() => (
        null
      ))
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod), 
        find: (mockBinarySearchTreeFindMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null } }
      ));
      const mockCloneObjectFindMethod = jest.fn(() => (
        null
      ));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod), 
        find: (mockCloneObjectFindMethod)
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([2.0, -3.5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["2.0", "-3.5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([2.0, -3.5]));
      const mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree = jest.fn(() => true);
      const mockIsValidInputFormat = jest.fn(() => (true));
      expect(getIsValidInputValueRemoveValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree,
        mockIsValidInputFormat()
      )).toBe(true);
      expect(mockCloneObject.mock.calls).toHaveLength(1);
      expect(mockCloneObject.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockCloneObject.mock.results[0].value).toStrictEqual(mockCloneObject());
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.calls).toHaveLength(1);
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.calls[0][0]).toStrictEqual(mockInput(), mockDelimiter(), mockGetArrayFromString, mockGetArrayWithStringNumbersConvertedToNumbersFromArray);
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.results[0].value).toStrictEqual(mockGetArrayWithStringNumbersConvertedToNumbersFromString());
      expect(mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree.mock.calls).toHaveLength(1);
      expect(mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree.mock.calls[0][0]).toStrictEqual(mockGetArrayWithStringNumbersConvertedToNumbersFromString(), mockCloneObject(), mockCloneObject);
      expect(mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree.mock.results[0].value).toStrictEqual(mockGetIsArrayOnlyWithValuesThatExistInBinarySearchTree());
    });
  });
});
