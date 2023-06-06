import { getBinarySearchTreeWithRemovedInputValues } from "../getBinarySearchTreeWithRemovedInputValues.js";

describe("Testing the function getBinarySearchTreeWithRemovedInputValues", () => {
  describe("Testing the type of function getBinarySearchTreeWithRemovedInputValues", () => {
    test("The type of function getBinarySearchTreeWithRemovedInputValues is a function", () => {
      expect(typeof getBinarySearchTreeWithRemovedInputValues).toBe("function");
    });
  });

  describe("Testing the return type of function getBinarySearchTreeWithRemovedInputValues", () => {
    test("The return type of function getBinarySearchTreeWithRemovedInputValues is an object if the method is called without an argument", () => {
      expect(typeof(getBinarySearchTreeWithRemovedInputValues())).toBe("object");
    });

    test("The return type of function getBinarySearchTreeWithRemovedInputValues is an object if the method is called with arguments of the wrong type", () => {
      expect(typeof(getBinarySearchTreeWithRemovedInputValues(1, 2, 3, 4, 5, 6, 7, 8))).toBe("object");
    });

    test("The return type of function getBinarySearchTreeWithRemovedInputValues is an object if the method is called with arguments of the right type, with an argument for the first parameter that is of type string with one element that isn't in the binarySearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function and with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("10"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([10]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["10"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([10]));
      const mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod = jest.fn((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockGetBinarySearchTreeWithRemovedArrayElements = jest.fn(() => ({ 
        getRootNode: (mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod),
        deleteNode: (mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod)
      }));
      expect(typeof(getBinarySearchTreeWithRemovedInputValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockGetArrayWithStringNumbersConvertedToNumbersFromString,
        mockDelimiter(),
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetBinarySearchTreeWithRemovedArrayElements
      ))).toBe("object");
    });

    test("The return type of function getBinarySearchTreeWithRemovedInputValues is an object if the method is called with arguments of the right type, with an argument for the first parameter that is of type string with one element that is in the binarySearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function and with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("-1.5"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([-1.5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["-1.5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([-1.5]));
      const mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } }));
      const mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod = jest.fn((array) => ({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } }));
      const mockGetBinarySearchTreeWithRemovedArrayElements = jest.fn(() => ({ 
        getRootNode: (mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod),
        deleteNode: (mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod)
      }));
      expect(typeof(getBinarySearchTreeWithRemovedInputValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockGetArrayWithStringNumbersConvertedToNumbersFromString,
        mockDelimiter(),
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetBinarySearchTreeWithRemovedArrayElements
      ))).toBe("object");
    });

    test("The return type of function getBinarySearchTreeWithRemovedInputValues is an object if the method is called with arguments of the right type, with an argument for the first parameter that is of type string with multiple elements of which at least one isn't in the binarySearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function and with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("-1.5, 2.0, 10"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([-1.5, 2.0, 10]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["-1.5", "2.0", "10"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([-1.5, 2.0, 10]));
      const mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod = jest.fn(() => ({ data: 3.5, left: null, right: null }));
      const mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod = jest.fn((array) => ({ data: 3.5, left: null, right: null }));
      const mockGetBinarySearchTreeWithRemovedArrayElements = jest.fn(() => ({ 
        getRootNode: (mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod),
        deleteNode: (mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod)
      }));
      expect(typeof(getBinarySearchTreeWithRemovedInputValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockGetArrayWithStringNumbersConvertedToNumbersFromString,
        mockDelimiter(),
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetBinarySearchTreeWithRemovedArrayElements
      ))).toBe("object");
    });

    test("The return type of function getBinarySearchTreeWithRemovedInputValues is an object if the method is called with arguments of the right type, with an argument for the first parameter that is of type string with multiple elements which are all in the binarySearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function and with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("-1.5, 2.0"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([-1.5, 2.0]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["-1.5", "2.0"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([-1.5, 2.0]));
      const mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod = jest.fn(() => ({ data: 3.5, left: null, right: null }));
      const mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod = jest.fn((array) => ({ data: 3.5, left: null, right: null }));
      const mockGetBinarySearchTreeWithRemovedArrayElements = jest.fn(() => ({ 
        getRootNode: (mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod),
        deleteNode: (mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod)
      }));
      expect(typeof(getBinarySearchTreeWithRemovedInputValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockGetArrayWithStringNumbersConvertedToNumbersFromString,
        mockDelimiter(),
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetBinarySearchTreeWithRemovedArrayElements
      ))).toBe("object");
    });
  });

  describe("Testing the return values of function getBinarySearchTreeWithRemovedInputValues", () => {
    test("The function getBinarySearchTreeWithRemovedInputValues works correctly if the method is called without an argument", () => {
      expect(getBinarySearchTreeWithRemovedInputValues()).toStrictEqual(null);
    });

    test("The function getBinarySearchTreeWithRemovedInputValues works correctly if the method is called with arguments of the wrong type", () => {
      expect(getBinarySearchTreeWithRemovedInputValues(1, 2, 3, 4, 5, 6, 7, 8)).toStrictEqual(null);
    });

    test("The function getBinarySearchTreeWithRemovedInputValues works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is of type string with one element that isn't in the binarySearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function and with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("10"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([10]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["10"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([10]));
      const mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod = jest.fn((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }));
      const mockGetBinarySearchTreeWithRemovedArrayElements = jest.fn(() => ({ 
        getRootNode: (mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod),
        deleteNode: (mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod)
      }));
      expect(getBinarySearchTreeWithRemovedInputValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockGetArrayWithStringNumbersConvertedToNumbersFromString,
        mockDelimiter(),
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetBinarySearchTreeWithRemovedArrayElements
      )).toStrictEqual(mockGetBinarySearchTreeWithRemovedArrayElements());
    });

    test("The function getBinarySearchTreeWithRemovedInputValues works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is of type string with one element that is in the binarySearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function and with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("-1.5"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([-1.5]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["-1.5"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([-1.5]));
      const mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod = jest.fn(() => ({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } }));
      const mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod = jest.fn((array) => ({ data: 2.0, left: null, right: { data: 3.5, left: null, right: null } }));
      const mockGetBinarySearchTreeWithRemovedArrayElements = jest.fn(() => ({ 
        getRootNode: (mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod),
        deleteNode: (mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod)
      }));
      expect(getBinarySearchTreeWithRemovedInputValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockGetArrayWithStringNumbersConvertedToNumbersFromString,
        mockDelimiter(),
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetBinarySearchTreeWithRemovedArrayElements
      )).toStrictEqual(mockGetBinarySearchTreeWithRemovedArrayElements());
    });

    test("The function getBinarySearchTreeWithRemovedInputValues works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is of type string with multiple elements of which at least one isn't in the binarySearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function and with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("-1.5, 2.0, 10"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([-1.5, 2.0, 10]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["-1.5", "2.0", "10"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([-1.5, 2.0, 10]));
      const mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod = jest.fn(() => ({ data: 3.5, left: null, right: null }));
      const mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod = jest.fn((array) => ({ data: 3.5, left: null, right: null }));
      const mockGetBinarySearchTreeWithRemovedArrayElements = jest.fn(() => ({ 
        getRootNode: (mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod),
        deleteNode: (mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod)
      }));
      expect(getBinarySearchTreeWithRemovedInputValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockGetArrayWithStringNumbersConvertedToNumbersFromString,
        mockDelimiter(),
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetBinarySearchTreeWithRemovedArrayElements
      )).toStrictEqual(mockGetBinarySearchTreeWithRemovedArrayElements());
    });

    test("The function getBinarySearchTreeWithRemovedInputValues works correctly if the method is called with arguments of the right type, with an argument for the first parameter that is of type string with multiple elements which are all in the binarySearchTree, with an argument for the second parameter that is of type object, with an argument for the third parameter that is of type function, with an argument for the fourth parameter that is of type function, with an argument for the fifth parameter that is of type string, with an argument for the sixth parameter that is of type function, with an argument for the seventh parameter that is of type function and with an argument for the eighth parameter that is of type function", () => {
      const mockInput = jest.fn(() => ("-1.5, 2.0"));
      const mockBinarySearchTree = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((value) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockCloneObject = jest.fn(() => ({ 
        getRootNode: (() => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } })),
        deleteNode: ((array) => ({ data: 2.0, left: { data: -1.5, left: null, right: null }, right: { data: 3.5, left: null, right: null } }))
      }));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromString = jest.fn(() => ([-1.5, 2.0]));
      const mockDelimiter = jest.fn(() => (", "));
      const mockGetArrayFromString = jest.fn(() => (["-1.5", "2.0"]));
      const mockGetArrayWithStringNumbersConvertedToNumbersFromArray = jest.fn(() => ([-1.5, 2.0]));
      const mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod = jest.fn(() => ({ data: 3.5, left: null, right: null }));
      const mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod = jest.fn((array) => ({ data: 3.5, left: null, right: null }));
      const mockGetBinarySearchTreeWithRemovedArrayElements = jest.fn(() => ({ 
        getRootNode: (mockGetBinarySearchTreeWithRemovedArrayElementsGetRootNodeMethod),
        deleteNode: (mockGetBinarySearchTreeWithRemovedArrayElementsDeleteNodeMethod)
      }));
      expect(getBinarySearchTreeWithRemovedInputValues(
        mockInput(), 
        mockBinarySearchTree(), 
        mockCloneObject,
        mockGetArrayWithStringNumbersConvertedToNumbersFromString,
        mockDelimiter(),
        mockGetArrayFromString,
        mockGetArrayWithStringNumbersConvertedToNumbersFromArray,
        mockGetBinarySearchTreeWithRemovedArrayElements
      )).toStrictEqual(mockGetBinarySearchTreeWithRemovedArrayElements());
    });
  });
});
