import { getRebalancedBinarySearchTree } from "../getRebalancedBinarySearchTree.js";

describe("Testing the function getRebalancedBinarySearchTree", () => {
  describe("Testing the type of function getRebalancedBinarySearchTree", () => {
    test("The type of function getRebalancedBinarySearchTree is correct", () => {
      expect(typeof getRebalancedBinarySearchTree).toBe("function");
    });
  });

  describe("Testing the return values of function getRebalancedBinarySearchTree", () => {
    test("The return value of function getRebalancedBinarySearchTree is correct if the function is called without an argument", () => {
      expect(getRebalancedBinarySearchTree()).toStrictEqual(null);
    });

    test("The return value of function getRebalancedBinarySearchTree is correct if the function is called with arguments of the wrong type", () => {
      expect(getRebalancedBinarySearchTree(1, 2)).toStrictEqual(null);
    });

    test("The return value of function getRebalancedBinarySearchTree is correct if the function is called with arguments of the right type, 1st of type object, 2nd of type function", () => {
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -1.5, left: { data: -3.0, left: { data: -4.0, left: { data: -5.0, left: null, right: null }, right: null }, right: null }, right: null }, right: { data: 3.5, left: null, right: null } }
      ));
      const mockBinarySearchTreeRebalanceMethod = jest.fn(() => (
        { data: -3.0, left: { data: -5.0, left: null, right: { data: -4.0, left: null, right: null } }, right: { data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } } }
      ));
      const mockBinarySearchTree = jest.fn(() => ({
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod),
        rebalance: (mockBinarySearchTreeRebalanceMethod)
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => (
        { data: 2.0, left: { data: -1.5, left: { data: -3.0, left: { data: -4.0, left: { data: -5.0, left: null, right: null }, right: null }, right: null }, right: null }, right: { data: 3.5, left: null, right: null } }
      ));
      const mockCloneObjectRebalanceMethod = jest.fn(() => (
        { data: -3.0, left: { data: -5.0, left: null, right: { data: -4.0, left: null, right: null } }, right: { data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } } }
      ));
      const mockCloneObject = jest.fn((obj) => ({
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        rebalance: (mockCloneObjectRebalanceMethod)
      }));
      expect(getRebalancedBinarySearchTree(
        mockBinarySearchTree(), 
        mockCloneObject, 
      )).toStrictEqual(mockCloneObject());
      expect(mockCloneObject.mock.calls).toHaveLength(2);
      expect(mockCloneObject.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockCloneObject.mock.calls[1][0]).toStrictEqual(undefined);
      expect(mockCloneObject.mock.results[0].value).toStrictEqual(mockCloneObject());
      expect(mockCloneObject.mock.results[1].value).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectRebalanceMethod.mock.calls).toHaveLength(1);
      expect(mockCloneObjectRebalanceMethod.mock.calls[0][0]).toStrictEqual(undefined);
      expect(mockCloneObjectRebalanceMethod.mock.results[0].value).toStrictEqual(mockCloneObjectRebalanceMethod());
    });
  });
});
