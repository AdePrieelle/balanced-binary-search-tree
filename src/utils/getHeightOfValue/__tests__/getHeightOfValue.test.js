import { getHeightOfValue } from "../getHeightOfValue.js";

describe("Testing the function getHeightOfValue", () => {
  describe("Testing the type of function getHeightOfValue", () => {
    test("The type of function getHeightOfValue is correct", () => {
      expect(typeof getHeightOfValue).toBe("function");
    });
  });

  describe("Testing the return values of function getHeightOfValue", () => {
    test("The return value of function getHeightOfValue is correct if the function is called without an argument", () => {
      expect(getHeightOfValue()).toBe("unknown");
    });

    test("The return value of function getHeightOfValue is correct if the function is called with arguments of the wrong type", () => {
      expect(getHeightOfValue(1, 2, 3, 4, 5)).toBe("unknown");
    });
    
    test("The return value of function getHeightOfValue is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function that returns an object with a height method that returns 0, 4th of type function that returns null and 5th of type string", () => {
      const mockInput = jest.fn(() => ("10"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -1.5, left: { data: -3.0, left: { data: -4.0, left: null, right: null }, right: null }, right: null }, right: { data: 3.5, left: null, right: null } }
      ));
      const mockBinarySearchTreeFindMethod = jest.fn((value) => (
        null
      ));
      const mockBinarySearchTreeHeightMethod = jest.fn(((node => (0))));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod),
        find: (mockBinarySearchTreeFindMethod),
        height: (mockBinarySearchTreeHeightMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -1.5, left: { data: -3.0, left: { data: -4.0, left: null, right: null }, right: null }, right: null }, right: { data: 3.5, left: null, right: null } }
      ));
      const mockCloneObjectFindMethod = jest.fn((value) => (
        null
      ));
      const mockCloneObjectHeightMethod = jest.fn(((node => (0))));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod),
        height: mockCloneObjectHeightMethod
      }));
      const mockGetFindNodeInBinarySearchTreeWithInputValue = jest.fn(() => (
        null
        ));
      const mockUnknownValue = jest.fn(() => ("unknown"));
      expect(getHeightOfValue(
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
      expect(mockCloneObjectHeightMethod.mock.calls).toHaveLength(0);
    });

    test("The return value of function getHeightOfValue is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function that returns an object with a height method that doensn't return 0, 4th of type function that doesn't return null and 5th of type string", () => {
      const mockInput = jest.fn(() => ("-1.5"));
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -1.5, left: { data: -3.0, left: { data: -4.0, left: null, right: null }, right: null }, right: null }, right: { data: 3.5, left: null, right: null } }
      ));
      const mockBinarySearchTreeFindMethod = jest.fn((value) => (
        { data: -1.5, left: { data: -3.0, left: { data: -4.0, left: null, right: null }, right: null }, right: null }
      ));
      const mockBinarySearchTreeHeightMethod = jest.fn(((node => (2))));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod),
        find: (mockBinarySearchTreeFindMethod),
        height: (mockBinarySearchTreeHeightMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -1.5, left: { data: -3.0, left: { data: -4.0, left: null, right: null }, right: null }, right: null }, right: { data: 3.5, left: null, right: null } }
      ));
      const mockCloneObjectFindMethod = jest.fn((value) => (
        { data: -1.5, left: { data: -3.0, left: { data: -4.0, left: null, right: null }, right: null }, right: null }
      ));
      const mockCloneObjectHeightMethod = jest.fn(((node => (2))));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod),
        height: mockCloneObjectHeightMethod
      }));
      const mockGetFindNodeInBinarySearchTreeWithInputValue = jest.fn(() => (
        { data: -1.5, left: { data: -3.0, left: { data: -4.0, left: null, right: null }, right: null }, right: null }
        ));
      const mockUnknownValue = jest.fn(() => ("unknown"));
      expect(getHeightOfValue(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockGetFindNodeInBinarySearchTreeWithInputValue,
        mockUnknownValue()
      )).toBe(mockCloneObjectHeightMethod());
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls).toHaveLength(1);
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][0]).toStrictEqual(mockInput());
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][1]).toStrictEqual(mockBinarySearchTree());
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.calls[0][2]).toStrictEqual(mockCloneObject);
      expect(mockGetFindNodeInBinarySearchTreeWithInputValue.mock.results[0].value).toStrictEqual(mockGetFindNodeInBinarySearchTreeWithInputValue());
      expect(mockCloneObject.mock.calls).toHaveLength(1);
      expect(mockCloneObject.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockCloneObject.mock.results[0].value).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectHeightMethod.mock.calls).toHaveLength(2);
      expect(mockCloneObjectHeightMethod.mock.calls[0][0]).toStrictEqual(mockGetFindNodeInBinarySearchTreeWithInputValue());
      expect(mockCloneObjectHeightMethod.mock.calls[1][0]).toStrictEqual(undefined);
      expect(mockCloneObjectHeightMethod.mock.results[0].value).toStrictEqual(mockCloneObjectHeightMethod());
      expect(mockCloneObjectHeightMethod.mock.results[1].value).toStrictEqual(mockCloneObjectHeightMethod());
    });
  });
});
