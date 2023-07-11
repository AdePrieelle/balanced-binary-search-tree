import { getFindNodeInBinarySearchTreeWithInputValue } from "../getFindNodeInBinarySearchTreeWithInputValue.js";

describe("Testing the function getFindNodeInBinarySearchTreeWithInputValue", () => {
  describe("Testing the type of function getFindNodeInBinarySearchTreeWithInputValue", () => {
    test("The type of function getFindNodeInBinarySearchTreeWithInputValue is correct", () => {
      expect(typeof getFindNodeInBinarySearchTreeWithInputValue).toBe("function");
    });
  });

  describe("Testing the return values of function getFindNodeInBinarySearchTreeWithInputValue", () => {
    test("The return value of function getFindNodeInBinarySearchTreeWithInputValue is correct if the function is called without an argument", () => {
      expect(getFindNodeInBinarySearchTreeWithInputValue()).toStrictEqual(null);
    });

    test("The return value of function getFindNodeInBinarySearchTreeWithInputValue is correct if the function is called with arguments of the wrong type", () => {
      expect(getFindNodeInBinarySearchTreeWithInputValue(1, 2, 3)).toStrictEqual(null);
    });
    
    test("The return value of function getFindNodeInBinarySearchTreeWithInputValue is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object with a find method that returns null and 3rd of type function that returns an object with a find method that returns null", () => {
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
      expect(getFindNodeInBinarySearchTreeWithInputValue(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
      )).toStrictEqual(null);
      expect(mockCloneObject.mock.calls).toHaveLength(1);
      expect(mockCloneObject.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockCloneObject.mock.results[0].value).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectFindMethod.mock.calls).toHaveLength(1);
      expect(mockCloneObjectFindMethod.mock.calls[0][0]).toStrictEqual(+(mockInput()));
      expect(mockCloneObjectFindMethod.mock.results[0].value).toStrictEqual(mockCloneObjectFindMethod());
    });

    test("The return value of function getFindNodeInBinarySearchTreeWithInputValue is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object with a find method that doesn't return null and 3rd of type function that returns an object with a find method that doesn't return null", () => {
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
      expect(getFindNodeInBinarySearchTreeWithInputValue(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
      )).toStrictEqual(mockCloneObjectFindMethod());
      expect(mockCloneObject.mock.calls).toHaveLength(1);
      expect(mockCloneObject.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockCloneObject.mock.results[0].value).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectFindMethod.mock.calls).toHaveLength(2);
      expect(mockCloneObjectFindMethod.mock.calls[0][0]).toStrictEqual(+(mockInput()));
      expect(mockCloneObjectFindMethod.mock.calls[1][0]).toStrictEqual(undefined);
      expect(mockCloneObjectFindMethod.mock.results[0].value).toStrictEqual(mockCloneObjectFindMethod());
      expect(mockCloneObjectFindMethod.mock.results[1].value).toStrictEqual(mockCloneObjectFindMethod());
    });
  });
});
