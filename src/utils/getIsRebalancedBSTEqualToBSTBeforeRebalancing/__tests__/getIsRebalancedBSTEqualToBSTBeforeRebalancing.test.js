import { getIsRebalancedBSTEqualToBSTBeforeRebalancing } from "../getIsRebalancedBSTEqualToBSTBeforeRebalancing.js";

describe("Testing the function getIsRebalancedBSTEqualToBSTBeforeRebalancing", () => {
  describe("Testing the type of function getIsRebalancedBSTEqualToBSTBeforeRebalancing", () => {
    test("The type of function getIsRebalancedBSTEqualToBSTBeforeRebalancing is correct", () => {
      expect(typeof getIsRebalancedBSTEqualToBSTBeforeRebalancing).toBe("function");
    });
  });

  describe("Testing the return values of function getIsRebalancedBSTEqualToBSTBeforeRebalancing", () => {
    test("The return value of function getIsRebalancedBSTEqualToBSTBeforeRebalancing is correct if the function is called without an argument", () => {
      expect(getIsRebalancedBSTEqualToBSTBeforeRebalancing()).toBe(false);
    });

    test("The return value of function getIsRebalancedBSTEqualToBSTBeforeRebalancing is correct if the function is called with arguments of the wrong type", () => {
      expect(getIsRebalancedBSTEqualToBSTBeforeRebalancing(1, 2, 3, 4)).toBe(false);
    });

    test("The return value of function getIsRebalancedBSTEqualToBSTBeforeRebalancing is correct if the function is called with arguments of the right type, 1st of type object with a getRootNode method that returns an object that isn't balanced, 2nd of type function that returns an object with a getRootNode method that is balanced, 3rd of type function that returns false, 4th of a function that returns an object with a getRootNode method that is balanced", () => {
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2, left: { data: -1, left: null, right: null }, right: { data: 3, left: null, right: { data: 4, left: null, right: { data: 5, left: null, right: null } } } }
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod),
      }));
      const mockBinarySearchTreeFactoryFunctionGetRootNodeMethod = jest.fn(() => (
        { data: 3, left: { data: -1, left: null, right: { data: 2, left: null, right: null } }, right: { data: 4, left: null, right: { data: 5, left: null, right: null } } }
      ));
      const mockBinarySearchTreeFactoryFunction = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeFactoryFunctionGetRootNodeMethod),
      }));
      const mockGetAreObjectValuesEqual = jest.fn(() => (
        false
      ));
      const mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValuesGetRootNodeMethod = jest.fn(() => (
        { data: 3, left: { data: -1, left: null, right: { data: 2, left: null, right: null } }, right: { data: 4, left: null, right: { data: 5, left: null, right: null } } }
      ));
      const mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues = jest.fn(() => ({
        getRootNode: (mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValuesGetRootNodeMethod),
      }));
      expect(getIsRebalancedBSTEqualToBSTBeforeRebalancing(
        mockBinarySearchTree(), 
        mockBinarySearchTreeFactoryFunction,
        mockGetAreObjectValuesEqual,
        mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues
      )).toBe(mockGetAreObjectValuesEqual());      
      expect(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.mock.calls).toHaveLength(1);
      expect(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.mock.calls[0][1]).toStrictEqual(mockBinarySearchTreeFactoryFunction);
      expect(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.mock.results[0].value).toStrictEqual(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues());
      expect(mockGetAreObjectValuesEqual.mock.calls).toHaveLength(2);
      expect(mockGetAreObjectValuesEqual.mock.calls[0][0]).toStrictEqual(mockBinarySearchTreeGetRootNodeMethod());
      expect(mockGetAreObjectValuesEqual.mock.calls[0][1]).toStrictEqual(mockBinarySearchTreeFactoryFunctionGetRootNodeMethod());
      expect(mockGetAreObjectValuesEqual.mock.results[0].value).toStrictEqual(mockGetAreObjectValuesEqual());
      expect(mockGetAreObjectValuesEqual.mock.calls[1][0]).toStrictEqual(undefined);
      expect(mockGetAreObjectValuesEqual.mock.calls[1][1]).toStrictEqual(undefined);
      expect(mockGetAreObjectValuesEqual.mock.results[1].value).toStrictEqual(mockGetAreObjectValuesEqual());
    });

    test("The return value of function getIsRebalancedBSTEqualToBSTBeforeRebalancing is correct if the function is called with arguments of the right type, 1st of type object with a getRootNode method that returns an object that is balanced, 2nd of type function that returns an object with a getRootNode method that is balanced, 3rd of type function that returns false, 4th of a function that returns an object with a getRootNode method that is balanced", () => {
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 2, left: { data: -1, left: null, right: { data: 1, left: null, right: null } }, right: { data: 3, left: null, right: null } }
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod),
      }));
      const mockBinarySearchTreeFactoryFunctionGetRootNodeMethod = jest.fn(() => (
        { data: 1, left: { data: -1, left: null, right: null }, right: { data: 2, left: null, right: { data: 3, left: null, right: null } } }
      ));
      const mockBinarySearchTreeFactoryFunction = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeFactoryFunctionGetRootNodeMethod),
      }));
      const mockGetAreObjectValuesEqual = jest.fn(() => (
        false
      ));
      const mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValuesGetRootNodeMethod = jest.fn(() => (
        { data: 1, left: { data: -1, left: null, right: null }, right: { data: 2, left: null, right: { data: 3, left: null, right: null } } }
      ));
      const mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues = jest.fn(() => ({
        getRootNode: (mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValuesGetRootNodeMethod),
      }));
      expect(getIsRebalancedBSTEqualToBSTBeforeRebalancing(
        mockBinarySearchTree(), 
        mockBinarySearchTreeFactoryFunction,
        mockGetAreObjectValuesEqual,
        mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues
      )).toBe(mockGetAreObjectValuesEqual());      
      expect(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.mock.calls).toHaveLength(1);
      expect(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.mock.calls[0][1]).toStrictEqual(mockBinarySearchTreeFactoryFunction);
      expect(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.mock.results[0].value).toStrictEqual(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues());
      expect(mockGetAreObjectValuesEqual.mock.calls).toHaveLength(2);
      expect(mockGetAreObjectValuesEqual.mock.calls[0][0]).toStrictEqual(mockBinarySearchTreeGetRootNodeMethod());
      expect(mockGetAreObjectValuesEqual.mock.calls[0][1]).toStrictEqual(mockBinarySearchTreeFactoryFunctionGetRootNodeMethod());
      expect(mockGetAreObjectValuesEqual.mock.results[0].value).toStrictEqual(mockGetAreObjectValuesEqual());
      expect(mockGetAreObjectValuesEqual.mock.calls[1][0]).toStrictEqual(undefined);
      expect(mockGetAreObjectValuesEqual.mock.calls[1][1]).toStrictEqual(undefined);
      expect(mockGetAreObjectValuesEqual.mock.results[1].value).toStrictEqual(mockGetAreObjectValuesEqual());
    });

    test("The return value of function getIsRebalancedBSTEqualToBSTBeforeRebalancing is correct if the function is called with arguments of the right type, 1st of type object with a getRootNode method that returns an object that is balanced, 2nd of type function that returns an object with a getRootNode method that is balanced, 3rd of type function that returns true, 4th of a function that returns an object with a getRootNode method that is balanced", () => {
      const mockBinarySearchTreeGetRootNodeMethod = jest.fn(() => (
        { data: 1, left: { data: -1, left: null, right: null }, right: { data: 2, left: null, right: { data: 3, left: null, right: null } } }
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeGetRootNodeMethod),
      }));
      const mockBinarySearchTreeFactoryFunctionGetRootNodeMethod = jest.fn(() => (
        { data: 1, left: { data: -1, left: null, right: null }, right: { data: 2, left: null, right: { data: 3, left: null, right: null } } }
      ));
      const mockBinarySearchTreeFactoryFunction = jest.fn(() => ({ 
        getRootNode: (mockBinarySearchTreeFactoryFunctionGetRootNodeMethod),
      }));
      const mockGetAreObjectValuesEqual = jest.fn(() => (
        true
      ));
      const mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValuesGetRootNodeMethod = jest.fn(() => (
        { data: 1, left: { data: -1, left: null, right: null }, right: { data: 2, left: null, right: { data: 3, left: null, right: null } } }
      ));
      const mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues = jest.fn(() => ({
        getRootNode: (mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValuesGetRootNodeMethod),
      }));
      expect(getIsRebalancedBSTEqualToBSTBeforeRebalancing(
        mockBinarySearchTree(), 
        mockBinarySearchTreeFactoryFunction,
        mockGetAreObjectValuesEqual,
        mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues
      )).toBe(mockGetAreObjectValuesEqual());      
      expect(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.mock.calls).toHaveLength(1);
      expect(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.mock.calls[0][1]).toStrictEqual(mockBinarySearchTreeFactoryFunction);
      expect(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.mock.results[0].value).toStrictEqual(mockGetNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues());
      expect(mockGetAreObjectValuesEqual.mock.calls).toHaveLength(2);
      expect(mockGetAreObjectValuesEqual.mock.calls[0][0]).toStrictEqual(mockBinarySearchTreeGetRootNodeMethod());
      expect(mockGetAreObjectValuesEqual.mock.calls[0][1]).toStrictEqual(mockBinarySearchTreeFactoryFunctionGetRootNodeMethod());
      expect(mockGetAreObjectValuesEqual.mock.results[0].value).toStrictEqual(mockGetAreObjectValuesEqual());
      expect(mockGetAreObjectValuesEqual.mock.calls[1][0]).toStrictEqual(undefined);
      expect(mockGetAreObjectValuesEqual.mock.calls[1][1]).toStrictEqual(undefined);
      expect(mockGetAreObjectValuesEqual.mock.results[1].value).toStrictEqual(mockGetAreObjectValuesEqual());
    });
  });
});
