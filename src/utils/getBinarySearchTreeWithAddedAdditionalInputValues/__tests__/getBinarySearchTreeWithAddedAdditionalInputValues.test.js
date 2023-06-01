import { getBinarySearchTreeWithAddedAdditionalInputValues } from "../getBinarySearchTreeWithAddedAdditionalInputValues.js";

describe("Testing the function getBinarySearchTreeWithAddedAdditionalInputValues", () => {
  describe("Testing the type of function getBinarySearchTreeWithAddedAdditionalInputValues", () => {
    test("The type of function getBinarySearchTreeWithAddedAdditionalInputValues is a function", () => {
      expect(typeof getBinarySearchTreeWithAddedAdditionalInputValues).toBe("function");
    });
  });

  describe("Testing the return type of function getBinarySearchTreeWithAddedAdditionalInputValues", () => {
    test("The return type of function getBinarySearchTreeWithAddedAdditionalInputValues is an object if the method is called without an argument", () => {
      expect(typeof(getBinarySearchTreeWithAddedAdditionalInputValues())).toBe("object");
    });

    test("The return type of function getBinarySearchTreeWithAddedAdditionalInputValues is an object if the method is called with arguments of the wrong type", () => {
      expect(typeof(getBinarySearchTreeWithAddedAdditionalInputValues(1, 2, 3, 4, 5, 6, 7, 8))).toBe("object");
    });
    
    test("The return type of function getBinarySearchTreeWithAddedAdditionalInputValues is an object if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function and with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("-1.0, 4.5, -5"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        insertNode: ((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        insertNode: ((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([-1.0, 4.5, -5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["-1.0", "4.5", "-5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([-1.0, 4.5, -5]));
      const mockGetBinarySearchTreeWithAddedArrayElementsGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: { data: -5, left: null, right: null }, right: { data: -1.0, left: null, right: null } }, right: { data: 3.5, left: null, right: { data: 4.5, left: null, right: null } } }));
      const mockGetBinarySearchTreeWithAddedArrayElementsInsertNodeMethod = jest.fn((array) => ({ data: 2.0, left: { data: -1.5, left: { data: -5, left: null, right: null }, right: { data: -1.0, left: null, right: null } }, right: { data: 3.5, left: null, right: { data: 4.5, left: null, right: null } } }));
      const mockGetBinarySearchTreeWithAddedArrayElements = jest.fn(() => ({ 
        getRootNode: (mockGetBinarySearchTreeWithAddedArrayElementsGetRootNodeMethod),
        insertNode: (mockGetBinarySearchTreeWithAddedArrayElementsInsertNodeMethod)
      }));
      expect(typeof(getBinarySearchTreeWithAddedAdditionalInputValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetBinarySearchTreeWithAddedArrayElements
      ))).toBe("object");
    });
  });

  describe("Testing the return values of function getBinarySearchTreeWithAddedAdditionalInputValues", () => {
    test("The function getBinarySearchTreeWithAddedAdditionalInputValues works correctly if the method is called without an argument", () => {
      expect(getBinarySearchTreeWithAddedAdditionalInputValues()).toStrictEqual(null);
    });

    test("The function getBinarySearchTreeWithAddedAdditionalInputValues works correctly if the method is called with arguments of the wrong type", () => {
      expect(getBinarySearchTreeWithAddedAdditionalInputValues(1, 2, 3, 4, 5, 6, 7, 8)).toStrictEqual(null);
    });
    
    test("The function getBinarySearchTreeWithAddedAdditionalInputValues works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function and with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("-1.0, 4.5, -5"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        insertNode: ((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        insertNode: ((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([-1.0, 4.5, -5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["-1.0", "4.5", "-5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([-1.0, 4.5, -5]));
      const mockGetBinarySearchTreeWithAddedArrayElementsGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: { data: -5, left: null, right: null }, right: { data: -1.0, left: null, right: null } }, right: { data: 3.5, left: null, right: { data: 4.5, left: null, right: null } } }));
      const mockGetBinarySearchTreeWithAddedArrayElementsInsertNodeMethod = jest.fn((array) => ({ data: 2.0, left: { data: -1.5, left: { data: -5, left: null, right: null }, right: { data: -1.0, left: null, right: null } }, right: { data: 3.5, left: null, right: { data: 4.5, left: null, right: null } } }));
      const mockGetBinarySearchTreeWithAddedArrayElements = jest.fn(() => ({ 
        getRootNode: (mockGetBinarySearchTreeWithAddedArrayElementsGetRootNodeMethod),
        insertNode: (mockGetBinarySearchTreeWithAddedArrayElementsInsertNodeMethod)
      }));
      expect(getBinarySearchTreeWithAddedAdditionalInputValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetBinarySearchTreeWithAddedArrayElements
      )).toStrictEqual(mockGetBinarySearchTreeWithAddedArrayElements());
    });
  });
});
