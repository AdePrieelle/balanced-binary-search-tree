import { getBinarySearchTreeWithAddedArrayElements } from "../getBinarySearchTreeWithAddedArrayElements.js";

describe("Testing the function getBinarySearchTreeWithAddedArrayElements", () => {
  describe("Testing the type of function getBinarySearchTreeWithAddedArrayElements", () => {
    test("The type of function getBinarySearchTreeWithAddedArrayElements is a function", () => {
      expect(typeof getBinarySearchTreeWithAddedArrayElements).toBe("function");
    });
  });

  describe("Testing the return type of function getBinarySearchTreeWithAddedArrayElements", () => {
    test("The return type of function getBinarySearchTreeWithAddedArrayElements is an object if the method is called without an argument", () => {
      expect(typeof(getBinarySearchTreeWithAddedArrayElements())).toBe("object");
    });

    test("The return type of function getBinarySearchTreeWithAddedArrayElements is an object if the method is called with arguments of the wrong type", () => {
      expect(typeof(getBinarySearchTreeWithAddedArrayElements(1, 2, 3))).toBe("object");
    });
    
    test("The return type of function getBinarySearchTreeWithAddedArrayElements is an object if the method is called with arguments of the right type, with an argument for the first parameter that is an array, with an argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([-1.0, 4.5, -5]));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        insertNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: { data: -5, left: null, right: null }, right: { data: -1.0, left: null, right: null } }, right: { data: 3.5, left: null, right: { data: 4.5, left: null, right: null } } }));
      const mockCloneObjectInsertNodeMethod = jest.fn((value) => ({ data: 2.0, left: { data: -1.5, left: { data: -5, left: null, right: null }, right: { data: -1.0, left: null, right: null } }, right: { data: 3.5, left: null, right: { data: 4.5, left: null, right: null } } }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        insertNode: (mockCloneObjectInsertNodeMethod)
      }));
      expect(typeof(getBinarySearchTreeWithAddedArrayElements(
        mockArray(), 
        mockBinarySearchTree(), 
        mockCloneObject
      ))).toBe("object");
    });
  });

  describe("Testing the return values of function getBinarySearchTreeWithAddedArrayElements", () => {
    test("The function getBinarySearchTreeWithAddedArrayElements works correctly if the method is called without an argument", () => {
      expect(getBinarySearchTreeWithAddedArrayElements()).toStrictEqual(null);
    });

    test("The function getBinarySearchTreeWithAddedArrayElements works correctly if the method is called with arguments of the wrong type", () => {
      expect(getBinarySearchTreeWithAddedArrayElements(1, 2, 3)).toStrictEqual(null);
    });
    
    test("The function getBinarySearchTreeWithAddedArrayElements works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is an array, with an argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([-1.0, 4.5, -5]));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        insertNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: { data: -5, left: null, right: null }, right: { data: -1.0, left: null, right: null } }, right: { data: 3.5, left: null, right: { data: 4.5, left: null, right: null } } }));
      const mockCloneObjectInsertNodeMethod = jest.fn((value) => ({ data: 2.0, left: { data: -1.5, left: { data: -5, left: null, right: null }, right: { data: -1.0, left: null, right: null } }, right: { data: 3.5, left: null, right: { data: 4.5, left: null, right: null } } }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        insertNode: (mockCloneObjectInsertNodeMethod)
      }));
      expect(getBinarySearchTreeWithAddedArrayElements(
        mockArray(), 
        mockBinarySearchTree(), 
        mockCloneObject, 
      )).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectInsertNodeMethod).toHaveBeenCalledWith(-1.0);
      expect(mockCloneObjectInsertNodeMethod).toHaveBeenCalledWith(4.5);
      expect(mockCloneObjectInsertNodeMethod).toHaveBeenCalledWith(-5);
      expect(mockCloneObjectInsertNodeMethod).toHaveBeenCalledTimes(3);
    });
  });
});
