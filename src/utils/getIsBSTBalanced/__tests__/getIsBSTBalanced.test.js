import { getIsBSTBalanced } from "../getIsBSTBalanced.js";

describe("Testing the function getIsBSTBalanced", () => {
  describe("Testing the type of function getIsBSTBalanced", () => {
    test("The type of function getIsBSTBalanced is correct", () => {
      expect(typeof getIsBSTBalanced).toBe("function");
    });
  });

  describe("Testing the return values of function getIsBSTBalanced", () => {
    test("The return value of function getIsBSTBalanced is correct if the function is called without an argument", () => {
      expect(getIsBSTBalanced()).toBe(false);
    });

    test("The return value of function getIsBSTBalanced is correct if the function is called with arguments of the wrong type", () => {
      expect(getIsBSTBalanced(1, 2)).toBe(false);
    });
    
    test("The return value of function getIsBSTBalanced is correct if the function is called with arguments of the right type, 1st of type object, 2nd of type function that returns an object with an isBalanced method that returns false", () => {
      const mockBinarySearchTreeIsBalancedMethod = jest.fn(() => (
        false
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        isBalanced: (mockBinarySearchTreeIsBalancedMethod),
      }));
      const mockCloneObjectIsBalancedMethod = jest.fn(() => (
        false
      ));
      const mockCloneObject = jest.fn(() => ({ 
        isBalanced: (mockCloneObjectIsBalancedMethod),
      }));
      expect(getIsBSTBalanced(
        mockBinarySearchTree(), 
        mockCloneObject,
      )).toBe(mockCloneObjectIsBalancedMethod());
      expect(mockCloneObject.mock.calls).toHaveLength(1);
      expect(mockCloneObject.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockCloneObject.mock.results[0].value).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectIsBalancedMethod.mock.calls).toHaveLength(2);
      expect(mockCloneObjectIsBalancedMethod.mock.calls[0][0]).toStrictEqual(undefined);
      expect(mockCloneObjectIsBalancedMethod.mock.calls[1][0]).toStrictEqual(undefined);
      expect(mockCloneObjectIsBalancedMethod.mock.results[0].value).toStrictEqual(mockCloneObjectIsBalancedMethod());
      expect(mockCloneObjectIsBalancedMethod.mock.results[1].value).toStrictEqual(mockCloneObjectIsBalancedMethod());
    });

    test("The return value of function getIsBSTBalanced is correct if the function is called with arguments of the right type, 1st of type object, 2nd of type function that returns an object with an isBalanced method that returns true", () => {
      const mockBinarySearchTreeIsBalancedMethod = jest.fn(() => (
        true
      ));
      const mockBinarySearchTree = jest.fn(() => ({ 
        isBalanced: (mockBinarySearchTreeIsBalancedMethod),
      }));
      const mockCloneObjectIsBalancedMethod = jest.fn(() => (
        true
      ));
      const mockCloneObject = jest.fn(() => ({ 
        isBalanced: (mockCloneObjectIsBalancedMethod),
      }));
      expect(getIsBSTBalanced(
        mockBinarySearchTree(), 
        mockCloneObject,
      )).toBe(mockCloneObjectIsBalancedMethod());
      expect(mockCloneObject.mock.calls).toHaveLength(1);
      expect(mockCloneObject.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockCloneObject.mock.results[0].value).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectIsBalancedMethod.mock.calls).toHaveLength(2);
      expect(mockCloneObjectIsBalancedMethod.mock.calls[0][0]).toStrictEqual(undefined);
      expect(mockCloneObjectIsBalancedMethod.mock.calls[1][0]).toStrictEqual(undefined);
      expect(mockCloneObjectIsBalancedMethod.mock.results[0].value).toStrictEqual(mockCloneObjectIsBalancedMethod());
      expect(mockCloneObjectIsBalancedMethod.mock.results[1].value).toStrictEqual(mockCloneObjectIsBalancedMethod());
    });
  });
});
