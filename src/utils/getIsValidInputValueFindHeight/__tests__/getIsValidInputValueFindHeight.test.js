import { getIsValidInputValueFindHeight } from "../getIsValidInputValueFindHeight.js";

describe("Testing the function getIsValidInputValueFindHeight", () => {
  describe("Testing the type of function getIsValidInputValueFindHeight", () => {
    test("The type of function getIsValidInputValueFindHeight is correct", () => {
      expect(typeof getIsValidInputValueFindHeight).toBe("function");
    });
  });

  describe("Testing the return values of function getIsValidInputValueFindHeight", () => {
    test("The return value of function getIsValidInputValueFindHeight is correct if the function is called without an argument", () => {
      expect(getIsValidInputValueFindHeight()).toBe(false);
    });

    test("The return value of function getIsValidInputValueFindHeight is correct if the function is called with arguments of the wrong type", () => {
      expect(getIsValidInputValueFindHeight(1, 2, 3, 4, 5)).toBe(false);
    });
    
    test("The return value of function getIsValidInputValueFindHeight is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function, 4th of type boolean that is false and 5th of type function that returns null", () => {
      const mockInput = jest.fn(() => ("10"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }
      ));
      const mockBinarySearchTreeFindMethod = jest.fn((value) => (
        null
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod),
        find: (mockBinarySearchTreeFindMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockCloneObjectFindMethod = jest.fn((value) => (
        null
      ));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod)
      }));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockGetFindNodeInBinarySearchTreeWithInputValue = jest.fn(() => (
        null
      ));
      expect(getIsValidInputValueFindHeight(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockIsValidInputFormat(),
        mockGetFindNodeInBinarySearchTreeWithInputValue
      )).toBe(false);
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls).toHaveLength(0);
    });

    test("The return value of function getIsValidInputValueFindHeight is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function, 4th of type boolean that is false and 5th of type function that doesn't return null", () => {
      const mockInput = jest.fn(() => ("3.5"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }
      ));
      const mockBinarySearchTreeFindMethod = jest.fn((value) => (
        { data: 3.5, left: null, right: null }
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod),
        find: (mockBinarySearchTreeFindMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockCloneObjectFindMethod = jest.fn((value) => (
        { data: 3.5, left: null, right: null }
      ));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod)
      }));
      const mockIsValidInputFormat = jest.fn(() => (false));
      const mockGetFindNodeInBinarySearchTreeWithInputValue = jest.fn(() => (
        { data: 3.5, left: null, right: null }
      ));
      expect(getIsValidInputValueFindHeight(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockIsValidInputFormat(),
        mockGetFindNodeInBinarySearchTreeWithInputValue
      )).toBe(false);
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls).toHaveLength(0);
    });

    test("The return value of function getIsValidInputValueFindHeight is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function, 4th of type boolean that is true and 5th of type function that returns null", () => {
      const mockInput = jest.fn(() => ("10"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }
      ));
      const mockBinarySearchTreeFindMethod = jest.fn((value) => (
        null
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod),
        find: (mockBinarySearchTreeFindMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockCloneObjectFindMethod = jest.fn((value) => (
        null
      ));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod)
      }));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockGetFindNodeInBinarySearchTreeWithInputValue = jest.fn(() => (
        null
      ));
      expect(getIsValidInputValueFindHeight(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockIsValidInputFormat(),
        mockGetFindNodeInBinarySearchTreeWithInputValue
      )).toBe(false);
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls).toHaveLength(1);
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][0]).toStrictEqual(mockInput());
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][1]).toStrictEqual(mockBinarySearchTree());
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][2]).toStrictEqual(mockCloneObject);
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.results[0].value).toStrictEqual(mockGetFindNodeInBinarySearchTreeWithInputValue());
    });

    test("The return value of function getIsValidInputValueFindHeight is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function, 4th of type boolean that is true and 5th of type function that doesn't return null", () => {
      const mockInput = jest.fn(() => ("3.5"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }
      ));
      const mockBinarySearchTreeFindMethod = jest.fn((value) => (
        { data: 3.5, left: null, right: null }
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod),
        find: (mockBinarySearchTreeFindMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockCloneObjectFindMethod = jest.fn((value) => (
        { data: 3.5, left: null, right: null }
      ));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod)
      }));
      const mockIsValidInputFormat = jest.fn(() => (true));
      const mockGetFindNodeInBinarySearchTreeWithInputValue = jest.fn(() => (
        { data: 3.5, left: null, right: null }
      ));
      expect(getIsValidInputValueFindHeight(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockIsValidInputFormat(),
        mockGetFindNodeInBinarySearchTreeWithInputValue
      )).toBe(true);
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls).toHaveLength(1);
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][0]).toStrictEqual(mockInput());
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][1]).toStrictEqual(mockBinarySearchTree());
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][2]).toStrictEqual(mockCloneObject);
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.results[0].value).toStrictEqual(mockGetFindNodeInBinarySearchTreeWithInputValue());
    });
  });
});
