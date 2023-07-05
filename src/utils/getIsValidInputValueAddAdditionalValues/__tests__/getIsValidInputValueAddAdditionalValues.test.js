import { getIsValidInputValueAddAdditionalValues } from "../getIsValidInputValueAddAdditionalValues.js";

describe("Testing the function getIsValidInputValueAddAdditionalValues", () => {
  describe("Testing the type of function getIsValidInputValueAddAdditionalValues", () => {
    test("The type of function getIsValidInputValueAddAdditionalValues is correct", () => {
      expect(typeof getIsValidInputValueAddAdditionalValues).toBe("function");
    });
  });

  describe("Testing the return values of function getIsValidInputValueAddAdditionalValues", () => {
    test("The return value of function getIsValidInputValueAddAdditionalValues is correct if the function is called without an argument", () => {
      expect(getIsValidInputValueAddAdditionalValues()).toBe(false);
    });

    test("The return value of function getIsValidInputValueAddAdditionalValues is correct if the function is called with arguments of the wrong type", () => {
      expect(getIsValidInputValueAddAdditionalValues(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(false);
    });

    test("The return value of function getIsValidInputValueAddAdditionalValues is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function, 4th of type function, 5th of type string, 6th of type function, 7th of type function, 8th of type function that returns false and 9th of type boolean that is false", () => {
      const mockInput = jest.fn(() => ("1.5, -3.5, 2.5"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => ( 
        () => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})
      ));
      const mockBinarySearchTreeFindMethod = jest.fn(() => ( 
        () => ({ data: -3.5, left: null, right: null })
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod), 
        find: (mockBinarySearchTreeFindMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ( 
        () => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})
      ));
      const mockCloneObjectFindMethod = jest.fn(() => ( 
        () => ({ data: -3.5, left: null, right: null })
      ));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod), 
        find: (mockCloneObjectFindMethod)
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([1.5, -3.5, 2.5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["1.5", "-3.5", "2.5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([1.5, -3.5, 2.5]));
      const mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree = jest.fn(() => false);
      const mockIsValidInputFormat = jest.fn(() => false);
      expect(getIsValidInputValueAddAdditionalValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree,
        mockIsValidInputFormat()
      )).toBe(false);
      expect(mockCloneObject.mock.calls).toHaveLength(0);
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.calls).toHaveLength(0);
      expect(mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree.mock.calls).toHaveLength(0);
    });

    test("The return value of function getIsValidInputValueAddAdditionalValues is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function, 4th of type function, 5th of type string, 6th of type function, 7th of type function, 8th of type function that returns false and 9th of type boolean that is true", () => {
      const mockInput = jest.fn(() => ("1.5, -3.5, 2.5"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => ( 
        () => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})
      ));
      const mockBinarySearchTreeFindMethod = jest.fn(() => ( 
        () => ({ data: -3.5, left: null, right: null })
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod), 
        find: (mockBinarySearchTreeFindMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ( 
        () => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})
      ));
      const mockCloneObjectFindMethod = jest.fn(() => ( 
        () => ({ data: -3.5, left: null, right: null })
      ));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod), 
        find: (mockCloneObjectFindMethod)
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([1.5, -3.5, 2.5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["1.5", "-3.5", "2.5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([1.5, -3.5, 2.5]));
      const mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree = jest.fn(() => false);
      const mockIsValidInputFormat = jest.fn(() => true);
      expect(getIsValidInputValueAddAdditionalValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree,
        mockIsValidInputFormat()
      )).toBe(false);
      expect(mockCloneObject.mock.calls).toHaveLength(1);
      expect(mockCloneObject.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockCloneObject.mock.results[0].value).toStrictEqual(mockCloneObject());
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.calls).toHaveLength(1);
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.calls[0][0]).toStrictEqual(mockInput(), mockDelimiter(), mockGetArrayFromString, mockGetArrayWithStringNumbersConvertedToNumbersFromArray);
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.results[0].value).toStrictEqual(mockGetArrayWithStringNumbersConvertedToNumbersFromString());
      expect(mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree.mock.calls).toHaveLength(1);
      expect(mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree.mock.calls[0][0]).toStrictEqual(mockGetArrayWithStringNumbersConvertedToNumbersFromString(), mockCloneObject(), mockCloneObject);
      expect(mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree.mock.results[0].value).toStrictEqual(mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree());
    });

    test("The return value of function getIsValidInputValueAddAdditionalValues is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function, 4th of type function, 5th of type string, 6th of type function, 7th of type function, 8th of type function that returns true and 9th of type boolean that is false", () => {
      const mockInput = jest.fn(() => ("1.5, -3.0, 2.5"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => ( 
        () => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})
      ));
      const mockBinarySearchTreeFindMethod = jest.fn(() => ( 
        () => (null)
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod), 
        find: (mockBinarySearchTreeFindMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ( 
        () => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})
      ));
      const mockCloneObjectFindMethod = jest.fn(() => ( 
        () => (null)
      ));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod), 
        find: (mockCloneObjectFindMethod)
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([1.5, -3.0, 2.5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["1.5", "-3.0", "2.5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([1.5, -3.0, 2.5]));
      const mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree = jest.fn(() => true);
      const mockIsValidInputFormat = jest.fn(() => false);
      expect(getIsValidInputValueAddAdditionalValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree,
        mockIsValidInputFormat()
      )).toBe(false);
      expect(mockCloneObject.mock.calls).toHaveLength(0);
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.calls).toHaveLength(0);
      expect(mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree.mock.calls).toHaveLength(0);
    });

    test("The return value of function getIsValidInputValueAddAdditionalValues is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function, 4th of type function, 5th of type string, 6th of type function, 7th of type function, 8th of type function that returns true and 9th of type boolean that is true", () => {
      const mockInput = jest.fn(() => ("1.5, -3.0, 2.5"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => ( 
        () => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})
      ));
      const mockBinarySearchTreeFindMethod = jest.fn(() => ( 
        () => (null)
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod), 
        find: (mockBinarySearchTreeFindMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ( 
        () => ({ data: 2.0, left: { data: -3.5, left: null, right: null }, right: { data: 4.5, left: null, right: null }})
      ));
      const mockCloneObjectFindMethod = jest.fn(() => ( 
        () => (null)
      ));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod), 
        find: (mockCloneObjectFindMethod)
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([1.5, -3.0, 2.5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["1.5", "-3.0", "2.5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([1.5, -3.0, 2.5]));
      const mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree = jest.fn(() => true);
      const mockIsValidInputFormat = jest.fn(() => true);
      expect(getIsValidInputValueAddAdditionalValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree,
        mockIsValidInputFormat()
      )).toBe(true);
      expect(mockCloneObject.mock.calls).toHaveLength(1);
      expect(mockCloneObject.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockCloneObject.mock.results[0].value).toStrictEqual(mockCloneObject());
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.calls).toHaveLength(1);
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.calls[0][0]).toStrictEqual(mockInput(), mockDelimiter(), mockGetArrayFromString, mockGetArrayWithStringNumbersConvertedToNumbersFromArray);
      expect(mockGetArrayWithStringNumbersConvertedToNumbersFromString.mock.results[0].value).toStrictEqual(mockGetArrayWithStringNumbersConvertedToNumbersFromString());
      expect(mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree.mock.calls).toHaveLength(1);
      expect(mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree.mock.calls[0][0]).toStrictEqual(mockGetArrayWithStringNumbersConvertedToNumbersFromString(), mockCloneObject(), mockCloneObject);
      expect(mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree.mock.results[0].value).toStrictEqual(mockGetIsArrayOnlyWithValuesThatDontExistInBinarySearchTree());
    });
  });
});
