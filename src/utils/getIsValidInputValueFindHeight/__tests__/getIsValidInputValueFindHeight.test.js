import { getIsValidInputValueFindHeight } from "../getIsValidInputValueFindHeight.js";

describe("Testing the function getIsValidInputValueFindHeight", () => {
  describe("Testing the type of function getIsValidInputValueFindHeight", () => {
    test("The type of function getIsValidInputValueFindHeight is correct", () => {
      expect(typeof getIsValidInputValueFindHeight).toBe("function");
    });
  });

  describe("Testing the return values of function getIsValidInputValueFindHeight", () => {
    test("The return value of function getIsValidInputValueFindHeight is correct if the function is called without an argument", () => {
      expect(getIsValidInputValueFindHeight()).toBe(false);
    });

    test("The return value of function getIsValidInputValueFindHeight is correct if the function is called with arguments of the wrong type", () => {
      expect(getIsValidInputValueFindHeight(1, 2, 3, 4)).toBe(false);
    });
    
    test("The return value of function getIsValidInputValueFindHeight is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function that returns null and 4th of type boolean that is false", () => {
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
      const mockCloneObjectFindMethod = jest.fn((value) => (null));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod)
      }));
      const mockIsValidInputFormat = jest.fn(() => (false));
      expect(getIsValidInputValueFindHeight(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockIsValidInputFormat()
      )).toBe(false);
      expect(mockCloneObjectFindMethod.mock.calls).toHaveLength(0);
      expect(mockCloneObjectFindMethod.mock.calls).toHaveLength(0);
    });

    test("The return value of function getIsValidInputValueFindHeight is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function that returns null and 4th of type boolean that is true", () => {
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
      const mockCloneObjectFindMethod = jest.fn((value) => (null));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod)
      }));
      const mockIsValidInputFormat = jest.fn(() => (true));
      expect(getIsValidInputValueFindHeight(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockIsValidInputFormat()
      )).toBe(false);
      expect(mockCloneObject.mock.calls).toHaveLength(1);
      expect(mockCloneObject.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockCloneObject.mock.results[0].value).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectFindMethod.mock.calls).toHaveLength(1);
      expect(mockCloneObjectFindMethod.mock.calls[0][0]).toStrictEqual(+(mockInput()));
      expect(mockCloneObjectFindMethod.mock.results[0].value).toStrictEqual(mockCloneObjectFindMethod());
    });

    test("The return value of function getIsValidInputValueFindHeight is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function that doesn't return null and 4th of type boolean that is false", () => {
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
      const mockCloneObjectFindMethod = jest.fn((value) => ({ data: 3.5, left: null, right: null }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod)
      }));
      const mockIsValidInputFormat = jest.fn(() => (false));
      expect(getIsValidInputValueFindHeight(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockIsValidInputFormat()
      )).toBe(false);
      expect(mockCloneObject.mock.calls).toHaveLength(0);
      expect(mockCloneObjectFindMethod.mock.calls).toHaveLength(0);
    });

    test("The return value of function getIsValidInputValueFindHeight is correct if the function is called with arguments of the right type, 1st of type string, 2nd of type object, 3rd of type function that doesn't return null and 4th of type boolean that is true", () => {
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
      const mockCloneObjectFindMethod = jest.fn((value) => ({ data: 3.5, left: null, right: null }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        find: (mockCloneObjectFindMethod)
      }));
      const mockIsValidInputFormat = jest.fn(() => (true));
      expect(getIsValidInputValueFindHeight(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockIsValidInputFormat()
      )).toBe(true);
      expect(mockCloneObject.mock.calls).toHaveLength(1);
      expect(mockCloneObject.mock.calls[0][0]).toStrictEqual(mockBinarySearchTree());
      expect(mockCloneObject.mock.results[0].value).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectFindMethod.mock.calls).toHaveLength(1);
      expect(mockCloneObjectFindMethod.mock.calls[0][0]).toStrictEqual(+(mockInput()));
      expect(mockCloneObjectFindMethod.mock.results[0].value).toStrictEqual(mockCloneObjectFindMethod());
    });
  });
});
