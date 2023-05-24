import { getIsArrayWithValuesThatDontExistInBinarySearchTree } from "../getIsArrayWithValuesThatDontExistInBinarySearchTree.js";

describe("Testing the function getIsArrayWithValuesThatDontExistInBinarySearchTree", () => {
  describe("Testing the type of function getIsArrayWithValuesThatDontExistInBinarySearchTree", () => {
    test("The type of function getIsArrayWithValuesThatDontExistInBinarySearchTree is a function", () => {
      expect(typeof getIsArrayWithValuesThatDontExistInBinarySearchTree).toBe("function");
    });
  });

  describe("Testing the return type of function getIsArrayWithValuesThatDontExistInBinarySearchTree", () => {
    test("The return type of function getIsArrayWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called without an argument", () => {
      expect(typeof(getIsArrayWithValuesThatDontExistInBinarySearchTree()) === "boolean").toBe(true);
    });

    test("The return type of function getIsArrayWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called with an argument for the first parameter that isn't of type array, without an argument for the second parameter and without an argument for the third parameter", () => {
      expect(typeof(getIsArrayWithValuesThatDontExistInBinarySearchTree(1)) === "boolean").toBe(true);
    });
    
    test("The return type of function getIsArrayWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called with an argument for the first parameter that is of type array, without an argument for the second parameter and without an argument for the third parameter", () => {
      expect(typeof(getIsArrayWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0])) === "boolean").toBe(true);
    });

    test("The return type of function getIsArrayWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that isn't of type object and without an argument for the third parameter", () => {
      expect(typeof(getIsArrayWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], 2)) === "boolean").toBe(true);
    });

    test("The return type of function getIsArrayWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object and without an argument for the third parameter", () => {
      const mockFindMethodBST = jest.fn(() => ({ find: (node) => null}));
      expect(typeof(getIsArrayWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockFindMethodBST())) === "boolean").toBe(true);
    });

    test("The return type of function getIsArrayWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object and with an argument for the third parameter that isn't of type function", () => {
      const mockFindMethodBST = jest.fn(() => ({ find: (node) => null}));
      expect(typeof(getIsArrayWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockFindMethodBST(), 3)) === "boolean").toBe(true);
    });

    test("The return type of function getIsArrayWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object with a method that doesn't return null and with an argument for the third parameter that is of type function that returns an object with a method that doesn't return null", () => {
      const mockFindMethodBST = jest.fn(() => ({ find: (node) => ({"data": 2, "left": null, "right": null})}));
      const mockCopyObject = jest.fn(() => ({ find: (node) => ({"data": 2, "left": null, "right": null})}));
      expect(typeof(getIsArrayWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockFindMethodBST(), mockCopyObject)) === "boolean").toBe(true);
    });

    test("The return type of function getIsArrayWithValuesThatDontExistInBinarySearchTree is a boolean if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object with a method that returns null and with an argument for the third parameter that is of type function that returns an object with a method that returns null", () => {
      const mockFindMethodBST = jest.fn(() => ({ find: (node) => null}));
      const mockCopyObject = jest.fn(() => ({ find: (node) => null}));
      expect(typeof(getIsArrayWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockFindMethodBST(), mockCopyObject)) === "boolean").toBe(true);
    });    
  });

  describe("Testing the return values of function getIsArrayWithValuesThatDontExistInBinarySearchTree", () => {
    test("The function getIsArrayWithValuesThatDontExistInBinarySearchTree works correctly if the method is called without an argument", () => {
      expect(getIsArrayWithValuesThatDontExistInBinarySearchTree()).toBe(false);
    });

    test("The function getIsArrayWithValuesThatDontExistInBinarySearchTree works correctly if the method is called with an argument for the first parameter that isn't of type array, without an argument for the second parameter and without an argument for the third parameter", () => {
      expect(getIsArrayWithValuesThatDontExistInBinarySearchTree(1)).toBe(false);
    });
    
    test("The function getIsArrayWithValuesThatDontExistInBinarySearchTree works correctly if the method is called with an argument for the first parameter that is of type array, without an argument for the second parameter and without an argument for the third parameter", () => {
      expect(getIsArrayWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0])).toBe(false);
    });

    test("The function getIsArrayWithValuesThatDontExistInBinarySearchTree works correctly if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that isn't of type object and without an argument for the third parameter", () => {
      expect(getIsArrayWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], 2)).toBe(false);
    });

    test("The function getIsArrayWithValuesThatDontExistInBinarySearchTree works correctly if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object and without an argument for the third parameter", () => {
      const mockFindMethodBST = jest.fn(() => ({ find: (node) => null}));
      expect(getIsArrayWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockFindMethodBST())).toBe(false);
    });

    test("The function getIsArrayWithValuesThatDontExistInBinarySearchTree works correctly if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object and with an argument for the third parameter that isn't of type function", () => {
      const mockFindMethodBST = jest.fn(() => ({ find: (node) => null}));
      expect(getIsArrayWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockFindMethodBST(), 3)).toBe(false);
    });

    test("The function getIsArrayWithValuesThatDontExistInBinarySearchTree works correctly if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object with a method that doesn't return null and with an argument for the third parameter that is of type function that returns an object with a method that doesn't return null", () => {
      const mockFindMethodBST = jest.fn(() => ({ find: (node) => ({"data": 2, "left": null, "right": null})}));
      const mockCopyObject = jest.fn(() => ({ find: (node) => ({"data": 2, "left": null, "right": null})}));
      expect(getIsArrayWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockFindMethodBST(), mockCopyObject)).toBe(false);
    });

    test("The function getIsArrayWithValuesThatDontExistInBinarySearchTree works correctly if the method is called with an argument for the first parameter that is of type array, with an argument for the second parameter that is of type object with a method that returns null and with an argument for the third parameter that is of type function that returns an object with a method that returns null", () => {
      const mockFindMethodBST = jest.fn(() => ({ find: (node) => null}));
      const mockCopyObject = jest.fn(() => ({ find: (node) => null}));
      expect(getIsArrayWithValuesThatDontExistInBinarySearchTree(["a", -3.5, 2.0], mockFindMethodBST(), mockCopyObject)).toBe(true);
    });
  });
});
