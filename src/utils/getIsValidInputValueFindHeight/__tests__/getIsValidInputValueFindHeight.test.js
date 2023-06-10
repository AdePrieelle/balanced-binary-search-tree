import { getIsValidInputValueFindHeight } from "../getIsValidInputValueFindHeight.js";

describe("Testing the function getIsValidInputValueFindHeight", () => {
  describe("Testing the type of function getIsValidInputValueFindHeight", () => {
    test("The type of function getIsValidInputValueFindHeight is a function", () => {
      expect(typeof getIsValidInputValueFindHeight).toBe("function");
    });
  });

  describe("Testing the return type of function getIsValidInputValueFindHeight", () => {
    test("The return type of function getIsValidInputValueFindHeight is a boolean if the method is called without an argument", () => {
      expect(typeof(getIsValidInputValueFindHeight())).toBe("boolean");
    });

    test("The return type of function getIsValidInputValueFindHeight is a boolean if the method is called with arguments of the wrong type", () => {
      expect(typeof(getIsValidInputValueFindHeight([1], 2, 3))).toBe("boolean");
    });
    
    test("The return type of function getIsValidInputValueFindHeight is a boolean if the method is called with arguments of the right type, with an argument for the first parameter that is of type string and the string value number isn't in the binarySearchTree, with an argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("10"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: ((value) => (null))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockCloneObjectFindMethod = jest.fn((value) => (null));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod)
      }));
      expect(typeof(getIsValidInputValueFindHeight(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject
      ))).toBe("boolean");
    });

    test("The return type of function getIsValidInputValueFindHeight is a boolean if the method is called with arguments of the right type, with an argument for the first parameter that is of type string and the string value number is in the binarySearchTree, with an argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("3.5"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: ((value) => ({ data: 3.5, left: null, right: null }))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockCloneObjectFindMethod = jest.fn((value) => ({ data: 3.5, left: null, right: null }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod)
      }));
      expect(typeof(getIsValidInputValueFindHeight(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject
      ))).toBe("boolean");
    });
  });

  describe("Testing the return values of function getIsValidInputValueFindHeight", () => {
    test("The function getIsValidInputValueFindHeight works correctly if the method is called without an argument", () => {
      expect(getIsValidInputValueFindHeight()).toBe(false);
    });

    test("The function getIsValidInputValueFindHeight works correctly if the method is called with arguments of the wrong type", () => {
      expect(getIsValidInputValueFindHeight([1], 2, 3)).toBe(false);
    });
    
    test("The function getIsValidInputValueFindHeight works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is of type string and the string value number isn't in the binarySearchTree, with an argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("10"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: ((value) => (null))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockCloneObjectFindMethod = jest.fn((value) => (null));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod)
      }));
      expect(getIsValidInputValueFindHeight(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject
      )).toBe(false);
      expect(mockCloneObjectFindMethod.mock.calls).toHaveLength(1);
      expect(mockCloneObjectFindMethod.mock.calls[0][0]).toBe(10);
      expect(mockCloneObjectFindMethod.mock.results[0].value).toStrictEqual(null);
    });

    test("The function getIsValidInputValueFindHeight works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is of type string and the string value number is in the binarySearchTree, with an argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("3.5"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: ((value) => ({ data: 3.5, left: null, right: null }))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockCloneObjectFindMethod = jest.fn((value) => ({ data: 3.5, left: null, right: null }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod)
      }));
      expect(getIsValidInputValueFindHeight(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject
      )).toBe(true);
      expect(mockCloneObjectFindMethod.mock.calls).toHaveLength(1);
      expect(mockCloneObjectFindMethod.mock.calls[0][0]).toBe(3.5);
      expect(mockCloneObjectFindMethod.mock.results[0].value).toStrictEqual({ data: 3.5, left: null, right: null });
    });
  });
});
