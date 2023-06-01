import { getBinarySearchTreeWithAddedInitialInputValues } from "../getBinarySearchTreeWithAddedInitialInputValues.js";

describe("Testing the function getBinarySearchTreeWithAddedInitialInputValues", () => {
  describe("Testing the type of function getBinarySearchTreeWithAddedInitialInputValues", () => {
    test("The type of function getBinarySearchTreeWithAddedInitialInputValues is a function", () => {
      expect(typeof getBinarySearchTreeWithAddedInitialInputValues).toBe("function");
    });
  });

  describe("Testing the return type of function getBinarySearchTreeWithAddedInitialInputValues", () => {
    test("The return type of function getBinarySearchTreeWithAddedInitialInputValues is an object if the method is called without an argument", () => {
      expect(typeof(getBinarySearchTreeWithAddedInitialInputValues())).toBe("object");
    });

    test("The return type of function getBinarySearchTreeWithAddedInitialInputValues is an object if the method is called with arguments of the wrong type", () => {
      expect(typeof(getBinarySearchTreeWithAddedInitialInputValues(1, 2, 3, 4, 5, 6, 7))).toBe("object");
    });
    
    test("The return type of function getBinarySearchTreeWithAddedInitialInputValues is an object if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and with an argument for the seventh parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("-1.0, 4.5, -5"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        buildTree: ((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: { data: -5, left: null, right: null }, right: { data: -1.0, left: null, right: null } }, right: { data: 3.5, left: null, right: { data: 4.5, left: null, right: null } } }));
      const mockCloneObjectBuildTreeMethod = jest.fn((array) => ({ data: 2.0, left: { data: -1.5, left: { data: -5, left: null, right: null }, right: { data: -1.0, left: null, right: null } }, right: { data: 3.5, left: null, right: { data: 4.5, left: null, right: null } } }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        buildTree: (mockCloneObjectBuildTreeMethod)
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([-1.0, 4.5, -5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["-1.0", "4.5", "-5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([-1.0, 4.5, -5]));
      expect(typeof(getBinarySearchTreeWithAddedInitialInputValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
      ))).toBe("object");
    });
  });

  describe("Testing the return values of function getBinarySearchTreeWithAddedInitialInputValues", () => {
    test("The function getBinarySearchTreeWithAddedInitialInputValues works correctly if the method is called without an argument", () => {
      expect(getBinarySearchTreeWithAddedInitialInputValues()).toStrictEqual(null);
    });

    test("The function getBinarySearchTreeWithAddedInitialInputValues works correctly if the method is called with arguments of the wrong type", () => {
      expect(getBinarySearchTreeWithAddedInitialInputValues(1, 2, 3, 4, 5, 6, 7)).toStrictEqual(null);
    });
    
    test("The function getBinarySearchTreeWithAddedInitialInputValues works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is of type string, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function and with an argument for the seventh parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("-1.0, 4.5, -5"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        buildTree: ((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: { data: -5, left: null, right: null }, right: { data: -1.0, left: null, right: null } }, right: { data: 3.5, left: null, right: { data: 4.5, left: null, right: null } } }));
      const mockCloneObjectBuildTreeMethod = jest.fn((array) => ({ data: 2.0, left: { data: -1.5, left: { data: -5, left: null, right: null }, right: { data: -1.0, left: null, right: null } }, right: { data: 3.5, left: null, right: { data: 4.5, left: null, right: null } } }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        buildTree: (mockCloneObjectBuildTreeMethod)
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([-1.0, 4.5, -5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["-1.0", "4.5", "-5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([-1.0, 4.5, -5]));
      expect(getBinarySearchTreeWithAddedInitialInputValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
        mockGetArrayWithStringNumbersConvertedToNumbersFromString, 
        mockDelimiter(), 
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
      )).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectBuildTreeMethod).toHaveBeenCalledWith([-1.0, 4.5, -5]);
      expect(mockCloneObjectBuildTreeMethod).toHaveBeenCalledTimes(1);
    });
  });
});
