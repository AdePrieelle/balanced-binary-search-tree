import { getIsArrayOnlyWithValuesThatExistInBinarySearchTree } from "../getIsArrayOnlyWithValuesThatExistInBinarySearchTree.js";

describe("Testing the function getIsArrayOnlyWithValuesThatExistInBinarySearchTree", () => {
  describe("Testing the type of function getIsArrayOnlyWithValuesThatExistInBinarySearchTree", () => {
    test("The type of function getIsArrayOnlyWithValuesThatExistInBinarySearchTree is a function", () => {
      expect(typeof getIsArrayOnlyWithValuesThatExistInBinarySearchTree).toBe("function");
    });
  });

  describe("Testing the return type of function getIsArrayOnlyWithValuesThatExistInBinarySearchTree", () => {
    test("The return type of function getIsArrayOnlyWithValuesThatExistInBinarySearchTree is a boolean if the method is called without an argument", () => {
      expect(typeof(getIsArrayOnlyWithValuesThatExistInBinarySearchTree())).toBe("boolean");
    });

    test("The return type of function getIsArrayOnlyWithValuesThatExistInBinarySearchTree is a boolean if the method is called with arguments of the wrong type", () => {
      expect(typeof(getIsArrayOnlyWithValuesThatExistInBinarySearchTree(1, 2, 3))).toBe("boolean");
    });

    test("The return type of function getIsArrayOnlyWithValuesThatExistInBinarySearchTree is a boolean if the method is called with arguments of the right type, with an argument for the first parameter that is an array with one element that isn't in the binarSearchTree, with the argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([10]));
      const mockBinarySearchTree = jest.fn(() => ({
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: ((value) => (null))
      }));
      const mockCopyObjectFindMethod = jest.fn().mockImplementationOnce((value) => null);
      const mockCopyObject = jest.fn(() => ({
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: (mockCopyObjectFindMethod)
      }));
      expect(typeof(getIsArrayOnlyWithValuesThatExistInBinarySearchTree(mockArray(), mockBinarySearchTree(), mockCopyObject))).toBe("boolean");
    });

    test("The return type of function getIsArrayOnlyWithValuesThatExistInBinarySearchTree is a boolean if the method is called with arguments of the right type, with an argument for the first parameter that is an array with one element that is in the binarSearchTree, with the argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([-1.5]));
      const mockBinarySearchTree = jest.fn(() => ({
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCopyObjectFindMethod = jest
        .fn()
        .mockImplementationOnce((value) => ({ data: -1.5, left: null, right: null }));
      const mockCopyObject = jest.fn(() => ({
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: (mockCopyObjectFindMethod)
      }));
      expect(typeof(getIsArrayOnlyWithValuesThatExistInBinarySearchTree(mockArray(), mockBinarySearchTree(), mockCopyObject))).toBe("boolean");
    });

    test("The return type of function getIsArrayOnlyWithValuesThatExistInBinarySearchTree is a boolean if the method is called with arguments of the right type, with an argument for the first parameter that is an array with multiple elements of which at least one isn't in the binarSearchTree, with the argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([-1.5, 2.0, 10]));
      const mockBinarySearchTree = jest.fn(() => ({
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: ((value) => (null))
      }));
      const mockCopyObjectFindMethod = jest
      .fn()
      .mockImplementationOnce((value) => ({ data: -1.5, left: null, right: null }))
      .mockImplementationOnce((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      .mockImplementationOnce((value) => (null));
      const mockCopyObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: null, right: null })), 
        find: (mockCopyObjectFindMethod)
      }));
      expect(typeof(getIsArrayOnlyWithValuesThatExistInBinarySearchTree(mockArray(), mockBinarySearchTree(), mockCopyObject))).toBe("boolean");
    });

    test("The return type of function getIsArrayOnlyWithValuesThatExistInBinarySearchTree is a boolean if the method is called with arguments of the right type, with an argument for the first parameter that is an array with multiple elements which are all in the binarSearchTree, with the argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([-1.5, 2.0]));
      const mockBinarySearchTree = jest.fn(() => ({
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: ((value) => (null))
      }));
      const mockCopyObjectFindMethod = jest
      .fn()
      .mockImplementationOnce((value) => ({ data: -1.5, left: null, right: null }))
      .mockImplementationOnce((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockCopyObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: null, right: null })), 
        find: (mockCopyObjectFindMethod)
      }));
      expect(typeof(getIsArrayOnlyWithValuesThatExistInBinarySearchTree(mockArray(), mockBinarySearchTree(), mockCopyObject))).toBe("boolean");
    });
  });

  describe("Testing the return values of function getIsArrayOnlyWithValuesThatExistInBinarySearchTree", () => {
    test("The function getIsArrayOnlyWithValuesThatExistInBinarySearchTree works correctly if the method is called without an argument", () => {
      expect(getIsArrayOnlyWithValuesThatExistInBinarySearchTree()).toBe(false);
    });

    test("The function getIsArrayOnlyWithValuesThatExistInBinarySearchTree if the method is called with arguments of the wrong type", () => {
      expect(getIsArrayOnlyWithValuesThatExistInBinarySearchTree(1, 2, 3)).toBe(false);
    });

    test("The function getIsArrayOnlyWithValuesThatExistInBinarySearchTree if the method is called with arguments of the right type, with an argument for the first parameter that is an array with one element that isn't in the binarSearchTree, with the argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([10]));
      const mockBinarySearchTree = jest.fn(() => ({
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: ((value) => (null))
      }));
      const mockCopyObjectFindMethod = jest.fn().mockImplementationOnce((value) => null);
      const mockCopyObject = jest.fn(() => ({
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: (mockCopyObjectFindMethod)
      }));
      expect(getIsArrayOnlyWithValuesThatExistInBinarySearchTree(mockArray(), mockBinarySearchTree(), mockCopyObject)).toBe(false);
      expect(mockCopyObjectFindMethod.mock.calls).toHaveLength(1);
      expect(mockCopyObjectFindMethod.mock.calls[0][0]).toBe(10);
      expect(mockCopyObjectFindMethod.mock.results[0].value).toStrictEqual(null);
    });

    test("The function getIsArrayOnlyWithValuesThatExistInBinarySearchTree if the method is called with arguments of the right type, with an argument for the first parameter that is an array with one element that is in the binarSearchTree, with the argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([-1.5]));
      const mockBinarySearchTree = jest.fn(() => ({
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCopyObjectFindMethod = jest
        .fn()
        .mockImplementationOnce((value) => ({ data: -1.5, left: null, right: null }));
      const mockCopyObject = jest.fn(() => ({
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: (mockCopyObjectFindMethod)
      }));
      expect(getIsArrayOnlyWithValuesThatExistInBinarySearchTree(mockArray(), mockBinarySearchTree(), mockCopyObject)).toBe(true);
      expect(mockCopyObjectFindMethod.mock.calls).toHaveLength(1);
      expect(mockCopyObjectFindMethod.mock.calls[0][0]).toBe(-1.5);
      expect(mockCopyObjectFindMethod.mock.results[0].value).toStrictEqual({ data: -1.5, left: null, right: null });
    });

    test("The function getIsArrayOnlyWithValuesThatExistInBinarySearchTree if the method is called with arguments of the right type, with an argument for the first parameter that is an array with multiple elements of which at least one isn't in the binarSearchTree, with the argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([-1.5, 2.0, 10]));
      const mockBinarySearchTree = jest.fn(() => ({
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: ((value) => (null))
      }));
      const mockCopyObjectFindMethod = jest
      .fn()
      .mockImplementationOnce((value) => ({ data: -1.5, left: null, right: null }))
      .mockImplementationOnce((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      .mockImplementationOnce((value) => (null));
      const mockCopyObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: null, right: null })), 
        find: (mockCopyObjectFindMethod)
      }));
      expect(getIsArrayOnlyWithValuesThatExistInBinarySearchTree(mockArray(), mockBinarySearchTree(), mockCopyObject)).toBe(false);
      expect(mockCopyObjectFindMethod.mock.calls).toHaveLength(3);
      expect(mockCopyObjectFindMethod.mock.calls[0][0]).toBe(-1.5);
      expect(mockCopyObjectFindMethod.mock.calls[1][0]).toBe(2.0);
      expect(mockCopyObjectFindMethod.mock.calls[2][0]).toBe(10);
      expect(mockCopyObjectFindMethod.mock.results[0].value).toStrictEqual({ data: -1.5, left: null, right: null });
      expect(mockCopyObjectFindMethod.mock.results[1].value).toStrictEqual({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } });
      expect(mockCopyObjectFindMethod.mock.results[2].value).toStrictEqual(null);
    });

    test.only("The function getIsArrayOnlyWithValuesThatExistInBinarySearchTree if the method is called with arguments of the right type, with an argument for the first parameter that is an array with multiple elements which are all in the binarSearchTree, with the argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([-1.5, 2.0]));
      const mockBinarySearchTree = jest.fn(() => ({
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        find: ((value) => (null))
      }));
      const mockCopyObjectFindMethod = jest
      .fn()
      .mockImplementationOnce((value) => ({ data: -1.5, left: null, right: null }))
      .mockImplementationOnce((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockCopyObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: null, right: null })), 
        find: (mockCopyObjectFindMethod)
      }));
      expect(getIsArrayOnlyWithValuesThatExistInBinarySearchTree(mockArray(), mockBinarySearchTree(), mockCopyObject)).toBe(true);
      expect(mockCopyObjectFindMethod.mock.calls).toHaveLength(2);
      expect(mockCopyObjectFindMethod.mock.calls[0][0]).toBe(-1.5);
      expect(mockCopyObjectFindMethod.mock.calls[1][0]).toBe(2.0);
      expect(mockCopyObjectFindMethod.mock.results[0].value).toStrictEqual({ data: -1.5, left: null, right: null });
      expect(mockCopyObjectFindMethod.mock.results[1].value).toStrictEqual({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } });
    });
  });
});
