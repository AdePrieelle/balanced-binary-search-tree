import { getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree } from "../getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree.js";

describe("Testing the function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree", () => {
  describe("Testing the type of function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree", () => {
    test("The type of function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree is a function", () => {
      expect(typeof getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree).toBe("function");
    });
  });

  describe("Testing the return type of function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree", () => {
    test("The return type of function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called without an argument", () => {
      expect(typeof(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree())).toBe("boolean");
    });

    test("The return type of function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called with an argument for the first parameter that isn't of type array, without an argument for the second parameter and without an argument for the third parameter", () => {
      expect(typeof(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(1))).toBe("boolean");
    });
    
    test("The return type of function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called with an argument for the first parameter that is of type array, without an argument for the second parameter and without an argument for the third parameter", () => {
      expect(typeof(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0]))).toBe("boolean");
    });

    test("The return type of function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that isn't of type object and without an argument for the third parameter", () => {
      expect(typeof(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], 2))).toBe("boolean");
    });

    test("The return type of function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object and without an argument for the third parameter", () => {
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 1.0, left: null, right: null })), 
        find: ((value) => (null))
      }));
      expect(typeof(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockBinarySearchTree()))).toBe("boolean");
    });

    test("The return type of function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object and with an argument for the third parameter that isn't of type function", () => {
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 1.0, left: null, right: null })), 
        find: ((value) => (null))
      }));
      expect(typeof(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockBinarySearchTree(), 3))).toBe("boolean");
    });

    test("The return type of function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object with a method that doesn't return null and with an argument for the third parameter that is of type function that returns an object with a method that doesn't return null", () => {
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: null, right: null })), 
        find: ((value) => ({data: 2.0, left: null, right: null }))
      }));
      const mockCopyObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: null, right: null })), 
        find: ((value) => ({data: 2.0, left: null, right: null }))
      }));
      expect(typeof(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockBinarySearchTree(), mockCopyObject))).toBe("boolean");
    });

    test("The return type of function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object with a method that returns null and with an argument for the third parameter that is of type function that returns an object with a method that returns null", () => {
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 1.0, left: null, right: null })), 
        find: ((value) => (null))
      }));
      const mockCopyObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 1.0, left: null, right: null })), 
        find: ((value) => (null))
      }));
      expect(typeof(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockBinarySearchTree(), mockCopyObject))).toBe("boolean");
    });    
  });

  describe("Testing the return values of function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree", () => {
    test("The function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree works correctly if the method is called without an argument", () => {
      expect(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree()).toBe(false);
    });

    test("The function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree works correctly if the method is called with an argument for the first parameter that isn't of type array, without an argument for the second parameter and without an argument for the third parameter", () => {
      expect(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(1)).toBe(false);
    });
    
    test("The function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree works correctly if the method is called with an argument for the first parameter that is of type array, without an argument for the second parameter and without an argument for the third parameter", () => {
      expect(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0])).toBe(false);
    });

    test("The function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree works correctly if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that isn't of type object and without an argument for the third parameter", () => {
      expect(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], 2)).toBe(false);
    });

    test("The function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree works correctly if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object and without an argument for the third parameter", () => {
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 1.0, left: null, right: null })), 
        find: ((value) => (null))
      }));
      expect(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockBinarySearchTree())).toBe(false);
    });

    test("The function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree works correctly if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object and with an argument for the third parameter that isn't of type function", () => {
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 1.0, left: null, right: null })), 
        find: ((value) => (null))
      }));
      expect(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockBinarySearchTree(), 3)).toBe(false);
    });

    test("The function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree works correctly if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object with a method that doesn't return null and with an argument for the third parameter that is of type function that returns an object with a method that doesn't return null", () => {
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: null, right: null })), 
        find: ((value) => ({ data: 2.0, left: null, right: null }))
      }));
      const mockCopyObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: null, right: null })), 
        find: ((value) => ({ data: 2.0, left: null, right: null }))
      }));
      expect(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockBinarySearchTree(), mockCopyObject)).toBe(false);
    });

    test("The function getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree works correctly if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object with a method that returns null and with an argument for the third parameter that is of type function that returns an object with a method that returns null", () => {
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 1.0, left: null, right: null })), 
        find: ((value) => (null))
      }));
      const mockCopyObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 1.0, left: null, right: null })), 
        find: ((value) => (null))
      }));
      expect(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockBinarySearchTree(), mockCopyObject)).toBe(true);
    });
  });
});
