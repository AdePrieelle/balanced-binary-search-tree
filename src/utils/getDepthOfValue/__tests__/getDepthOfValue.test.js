import { getDepthOfValue } from "../getDepthOfValue.js";

describe("Testing the function getDepthOfValue", () => {
  describe("Testing the type of function getDepthOfValue", () => {
    test("The type of function getDepthOfValue is correct", () => {
      expect(typeof getDepthOfValue).toBe("function");
    });
  });

  describe("Testing the return values of function getDepthOfValue", () => {
    test("The return value of function getDepthOfValue is correct if the function is called without an argument", () => {
      expect(getDepthOfValue()).toBe("unknown");
    });

    test("The return value of function getDepthOfValue is correct if the function is called with arguments of the wrong type", () => {
      expect(getDepthOfValue(1, 2, 3, 4, 5)).toBe("unknown");
    });
    
    test("The return value of function getDepthOfValue is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function that returns an object with a depth method that returns 0, 4th of type function that returns null and 5th of type string", () => {
      const mockInput = jest.fn(() => ("10"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -1.5, left: { data: -3.0, left: { data: -4.0, left: null, right: null }, right: null }, right: null }, right: { data: 3.5, left: null, right: null } }
      ));
      const mockBinarySearchTreeFindMethod = jest.fn((value) => (
        null
      ));
      const mockBinarySearchTreeDepthMethod = jest.fn(((node => (0))));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod),
        find: (mockBinarySearchTreeFindMethod),
        depth: (mockBinarySearchTreeDepthMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -1.5, left: { data: -3.0, left: { data: -4.0, left: null, right: null }, right: null }, right: null }, right: { data: 3.5, left: null, right: null } }
      ));
      const mockCloneObjectFindMethod = jest.fn((value) => (
        null
      ));
      const mockCloneObjectDepthMethod = jest.fn(((node => (0))));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod),
        depth: mockCloneObjectDepthMethod
      }));
      const mockGetFindNodeInBinarySearchTreeWithInputValue = jest.fn(() => (
        null
        ));
      const mockUnknownValue = jest.fn(() => ("unknown"));
      expect(getDepthOfValue(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockGetFindNodeInBinarySearchTreeWithInputValue,
        mockUnknownValue()
      )).toBe(mockUnknownValue());
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls).toHaveLength(1);
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][0]).toStrictEqual(mockInput());
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][1]).toStrictEqual(mockBinarySearchTree());
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][2]).toStrictEqual(mockCloneObject);
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.results[0].value).toStrictEqual(mockGetFindNodeInBinarySearchTreeWithInputValue());
      expect(mockCloneObject.mock.calls).toHaveLength(0);
      expect(mockCloneObjectDepthMethod.mock.calls).toHaveLength(0);
    });

    test("The return value of function getDepthOfValue is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function that returns an object with a depth method that doensn't return 0, 4th of type function that doesn't return null and 5th of type string", () => {
      const mockInput = jest.fn(() => ("-4.0"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -1.5, left: { data: -3.0, left: { data: -4.0, left: null, right: null }, right: null }, right: null }, right: { data: 3.5, left: null, right: null } }
      ));
      const mockBinarySearchTreeFindMethod = jest.fn((value) => (
        { data: -4.0, left: null, right: null }
      ));
      const mockBinarySearchTreeDepthMethod = jest.fn(((node => (3))));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod),
        find: (mockBinarySearchTreeFindMethod),
        depth: (mockBinarySearchTreeDepthMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -1.5, left: { data: -3.0, left: { data: -4.0, left: null, right: null }, right: null }, right: null }, right: { data: 3.5, left: null, right: null } }
      ));
      const mockCloneObjectFindMethod = jest.fn((value) => (
        { data: -4.0, left: null, right: null }
      ));
      const mockCloneObjectDepthMethod = jest.fn(((node => (3))));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod),
        depth: mockCloneObjectDepthMethod
      }));
      const mockGetFindNodeInBinarySearchTreeWithInputValue = jest.fn(() => (
        { data: -4.0, left: null, right: null }
        ));
      const mockUnknownValue = jest.fn(() => ("unknown"));
      expect(getDepthOfValue(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockGetFindNodeInBinarySearchTreeWithInputValue,
        mockUnknownValue()
      )).toBe(mockCloneObjectDepthMethod());
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls).toHaveLength(1);
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][0]).toStrictEqual(mockInput());
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][1]).toStrictEqual(mockBinarySearchTree());
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][2]).toStrictEqual(mockCloneObject);
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.results[0].value).toStrictEqual(mockGetFindNodeInBinarySearchTreeWithInputValue());
      expect(mockCloneObject.mock.calls).toHaveLength(1);
      expect(mockCloneObject.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockCloneObject.mock.results[0].value).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectDepthMethod.mock.calls).toHaveLength(2);
      expect(mockCloneObjectDepthMethod.mock.calls[0][0]).toStrictEqual(mockGetFindNodeInBinarySearchTreeWithInputValue());
      expect(mockCloneObjectDepthMethod.mock.calls[1][0]).toStrictEqual(undefined);
      expect(mockCloneObjectDepthMethod.mock.results[0].value).toStrictEqual(mockCloneObjectDepthMethod());
      expect(mockCloneObjectDepthMethod.mock.results[1].value).toStrictEqual(mockCloneObjectDepthMethod());
    });
  });
});
