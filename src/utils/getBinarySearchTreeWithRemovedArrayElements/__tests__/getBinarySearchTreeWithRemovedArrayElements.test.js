import { getBinarySearchTreeWithRemovedArrayElements } from "../getBinarySearchTreeWithRemovedArrayElements.js";

describe("Testing the function getBinarySearchTreeWithRemovedArrayElements", () => {
  describe("Testing the type of function getBinarySearchTreeWithRemovedArrayElements", () => {
    test("The type of function getBinarySearchTreeWithRemovedArrayElements is a function", () => {
      expect(typeof getBinarySearchTreeWithRemovedArrayElements).toBe("function");
    });
  });

  describe("Testing the return type of function getBinarySearchTreeWithRemovedArrayElements", () => {
    test("The return type of function getBinarySearchTreeWithRemovedArrayElements is an object if the method is called without an argument", () => {
      expect(typeof(getBinarySearchTreeWithRemovedArrayElements())).toBe("object");
    });

    test("The return type of function getBinarySearchTreeWithRemovedArrayElements is an object if the method is called with arguments of the wrong type", () => {
      expect(typeof(getBinarySearchTreeWithRemovedArrayElements(1, 2, 3))).toBe("object");
    });
    
    test("The return type of function getBinarySearchTreeWithRemovedArrayElements is an object if the method is called with arguments of the right type, with an argument for the first parameter that is an array with one element that isn't in the binarySearchTree, with an argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([10]));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockCloneObjectDeleteNodeMethod = jest
      .fn()
      .mockImplementationOnce((value) => (null));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        deleteNode: (mockCloneObjectDeleteNodeMethod)
      }));
      expect(typeof(getBinarySearchTreeWithRemovedArrayElements(
        mockArray(), 
        mockBinarySearchTree(), 
        mockCloneObject
      ))).toBe("object");
    });

    test("The return type of function getBinarySearchTreeWithRemovedArrayElements is an object if the method is called with arguments of the right type, with an argument for the first parameter that is an array with one element that is in the binarySearchTree, with an argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([-1.5]));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } }));
      const mockCloneObjectDeleteNodeMethod = jest
      .fn()
      .mockImplementationOnce((value) => ({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        deleteNode: (mockCloneObjectDeleteNodeMethod)
      }));
      expect(typeof(getBinarySearchTreeWithRemovedArrayElements(
        mockArray(), 
        mockBinarySearchTree(), 
        mockCloneObject
      ))).toBe("object");
    });

    test("The return type of function getBinarySearchTreeWithRemovedArrayElements is an object if the method is called with arguments of the right type, with an argument for the first parameter that is an array with multiple elements of which at least one isn't in the binarySearchTree, with an argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([-1.5, 2.0, 10]));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 3.5, left: null, right: null }));
      const mockCloneObjectDeleteNodeMethod = jest
      .fn()
      .mockImplementationOnce((value) => ({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } }))
      .mockImplementationOnce((value) => ({ data: 3.5, left: null, right: null }))
      .mockImplementationOnce((value) => (null));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        deleteNode: (mockCloneObjectDeleteNodeMethod)
      }));
      expect(typeof(getBinarySearchTreeWithRemovedArrayElements(
        mockArray(), 
        mockBinarySearchTree(), 
        mockCloneObject
      ))).toBe("object");
    });

    test("The return type of function getBinarySearchTreeWithRemovedArrayElements is an object if the method is called with arguments of the right type, with an argument for the first parameter that is an array with multiple elements which are all in the binarySearchTree, with an argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([-1.5, 2.0]));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 3.5, left: null, right: null }));
      const mockCloneObjectDeleteNodeMethod = jest
      .fn()
      .mockImplementationOnce((value) => ({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } }))
      .mockImplementationOnce((value) => ({ data: 3.5, left: null, right: null }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        deleteNode: (mockCloneObjectDeleteNodeMethod)
      }));
      expect(typeof(getBinarySearchTreeWithRemovedArrayElements(
        mockArray(), 
        mockBinarySearchTree(), 
        mockCloneObject
      ))).toBe("object");
    });
  });

  describe("Testing the return values of function getBinarySearchTreeWithRemovedArrayElements", () => {
    test("The function getBinarySearchTreeWithRemovedArrayElements works correctly if the method is called without an argument", () => {
      expect(getBinarySearchTreeWithRemovedArrayElements()).toStrictEqual(null);
    });

    test("The function getBinarySearchTreeWithRemovedArrayElements works correctly if the method is called with arguments of the wrong type", () => {
      expect(getBinarySearchTreeWithRemovedArrayElements(1, 2, 3)).toStrictEqual(null);
    });
    
    test("The function getBinarySearchTreeWithRemovedArrayElements works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is an array with one element that isn't in the binarySearchTree, with an argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([10]));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockCloneObjectDeleteNodeMethod = jest
      .fn()
      .mockImplementationOnce((value) => (null));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        deleteNode: (mockCloneObjectDeleteNodeMethod)
      }));
      expect(getBinarySearchTreeWithRemovedArrayElements(
        mockArray(), 
        mockBinarySearchTree(), 
        mockCloneObject
      )).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectDeleteNodeMethod.mock.calls).toHaveLength(1);
      expect(mockCloneObjectDeleteNodeMethod.mock.calls[0][0]).toBe(10);
      expect(mockCloneObjectDeleteNodeMethod.mock.results[0].value).toStrictEqual(null);
    });

    test("The function getBinarySearchTreeWithRemovedArrayElements works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is an array with one element that is in the binarySearchTree, with an argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([-1.5]));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } }));
      const mockCloneObjectDeleteNodeMethod = jest
      .fn()
      .mockImplementationOnce((value) => ({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        deleteNode: (mockCloneObjectDeleteNodeMethod)
      }));
      expect(getBinarySearchTreeWithRemovedArrayElements(
        mockArray(), 
        mockBinarySearchTree(), 
        mockCloneObject
      )).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectDeleteNodeMethod.mock.calls).toHaveLength(1);
      expect(mockCloneObjectDeleteNodeMethod.mock.calls[0][0]).toBe(-1.5);
      expect(mockCloneObjectDeleteNodeMethod.mock.results[0].value).toStrictEqual({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } });
    });

    test("The function getBinarySearchTreeWithRemovedArrayElements works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is an array with multiple elements of which at least one isn't in the binarySearchTree, with an argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([-1.5, 2.0, 10]));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 3.5, left: null, right: null }));
      const mockCloneObjectDeleteNodeMethod = jest
      .fn()
      .mockImplementationOnce((value) => ({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } }))
      .mockImplementationOnce((value) => ({ data: 3.5, left: null, right: null }))
      .mockImplementationOnce((value) => (null));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        deleteNode: (mockCloneObjectDeleteNodeMethod)
      }));
      expect(getBinarySearchTreeWithRemovedArrayElements(
        mockArray(), 
        mockBinarySearchTree(), 
        mockCloneObject
      )).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectDeleteNodeMethod.mock.calls).toHaveLength(3);
      expect(mockCloneObjectDeleteNodeMethod.mock.calls[0][0]).toBe(-1.5);
      expect(mockCloneObjectDeleteNodeMethod.mock.calls[1][0]).toBe(2.0);
      expect(mockCloneObjectDeleteNodeMethod.mock.calls[2][0]).toBe(10);
      expect(mockCloneObjectDeleteNodeMethod.mock.results[0].value).toStrictEqual({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } });
      expect(mockCloneObjectDeleteNodeMethod.mock.results[1].value).toStrictEqual({ data: 3.5, left: null, right: null });
      expect(mockCloneObjectDeleteNodeMethod.mock.results[2].value).toStrictEqual(null);
    });

    test("The function getBinarySearchTreeWithRemovedArrayElements works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is an array with multiple elements which are all in the binarySearchTree, with an argument for the second parameter that is of type object and with an argument for the third parameter that is of type function", () => {
      const mockArray = jest.fn(() => ([-1.5, 2.0]));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObjectGetRootNodeMethod = jest.fn(() => ({ data: 3.5, left: null, right: null }));
      const mockCloneObjectDeleteNodeMethod = jest
      .fn()
      .mockImplementationOnce((value) => ({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } }))
      .mockImplementationOnce((value) => ({ data: 3.5, left: null, right: null }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (mockCloneObjectGetRootNodeMethod),
        deleteNode: (mockCloneObjectDeleteNodeMethod)
      }));
      expect(getBinarySearchTreeWithRemovedArrayElements(
        mockArray(), 
        mockBinarySearchTree(), 
        mockCloneObject
      )).toStrictEqual(mockCloneObject());
      expect(mockCloneObjectDeleteNodeMethod.mock.calls).toHaveLength(2);
      expect(mockCloneObjectDeleteNodeMethod.mock.calls[0][0]).toBe(-1.5);
      expect(mockCloneObjectDeleteNodeMethod.mock.calls[1][0]).toBe(2.0);
      expect(mockCloneObjectDeleteNodeMethod.mock.results[0].value).toStrictEqual({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } });
      expect(mockCloneObjectDeleteNodeMethod.mock.results[1].value).toStrictEqual({ data: 3.5, left: null, right: null });
    });
  });
});
