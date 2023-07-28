import { getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues } from "../getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.js";

describe("Testing the function getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues", () => {
  describe("Testing the type of function getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues", () => {
    test("The type of function getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues is correct", () => {
      expect(typeof getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues).toBe("function");
    });
  });

  describe("Testing the return values of function getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues", () => {
    test("The return value of function getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues is correct if the function is called without an argument", () => {
      expect(getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues()).toStrictEqual(null);
    });

    test("The return value of function getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues is correct if the function is called with arguments of the wrong type", () => {
      expect(getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues(1, 2)).toStrictEqual(null);
    });

    test("The return value of function getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues is correct if the function is called with arguments of the right type, 1st of type object, 2nd of type function that returns an object", () => {
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: -3.0, left: { data: -5.0, left: null, right: { data: -4.0, left: null, right: null } }, right: { data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } } }
      ));
      const mockBinarySearchTreeInOrderMethod = jest.fn(() => (
        [-5.0, -4.0, -3.0, -1.5, 2.0, 3.5]
      ));
      const mockBinarySearchTree = jest.fn(() => ({
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod),
        inOrder: (mockBinarySearchTreeInOrderMethod)
      }));
      const mockBinarySearchTreeFactoryFunctionGetRootNodeMethod = jest.fn(() => (
        { data: -3.0, left: { data: -5.0, left: null, right: { data: -4.0, left: null, right: null } }, right: { data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } } }
      ));
      const mockBinarySearchTreeFactoryFunction = jest.fn((obj) => ({
        getRootNode: (mockBinarySearchTreeFactoryFunctionGetRootNodeMethod)
      }));
      expect(getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues(
        mockBinarySearchTree(), 
        mockBinarySearchTreeFactoryFunction, 
      )).toStrictEqual(mockBinarySearchTreeFactoryFunction());
      expect(mockBinarySearchTreeInOrderMethod.mock.calls).toHaveLength(1);
      expect(mockBinarySearchTreeInOrderMethod.mock.calls[0][0]).toStrictEqual(undefined);
      expect(mockBinarySearchTreeInOrderMethod.mock.results[0].value).toStrictEqual(mockBinarySearchTreeInOrderMethod());
      expect(mockBinarySearchTreeFactoryFunction.mock.calls).toHaveLength(2);
      expect(mockBinarySearchTreeFactoryFunction.mock.calls[0][0]).toStrictEqual(mockBinarySearchTreeInOrderMethod());
      expect(mockBinarySearchTreeFactoryFunction.mock.calls[1][0]).toStrictEqual(undefined);
      expect(mockBinarySearchTreeFactoryFunction.mock.results[0].value).toStrictEqual(mockBinarySearchTreeFactoryFunction());
      expect(mockBinarySearchTreeFactoryFunction.mock.results[1].value).toStrictEqual(mockBinarySearchTreeFactoryFunction());
      expect(mockBinarySearchTreeGetRootNodeMethod() === mockBinarySearchTreeFactoryFunctionGetRootNodeMethod()).toBe(false);
    });
  });
});
