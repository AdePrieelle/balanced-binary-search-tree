import { BinarySearchTree } from "../binarySearchTree";

describe("Testing the factory function BinarySearchTree", () => {
  let binarySearchTree;
  beforeEach(() => {
    binarySearchTree = BinarySearchTree();
  });

  describe("Testing the type of factory function BinarySearchTree", () => {
    test("The type of factory function BinarySearchTree is a function", () => {
      expect(typeof BinarySearchTree).toBe("function");
    });
  });

  describe("Testing the method types of factory function BinarySearchTree", () => {
    test("The buildTree method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.buildTree).toBe("function");
    });
  });

  describe("Testing the return type of the methods of factory function BinarySearchTree", () => {
    test("The return type of the buildTree method of factory function BinarySearchTree is an object if the method is called without an argument", () => {
      expect(typeof binarySearchTree.buildTree()).toBe("object");
    });
    
    test("The return type of the buildTree method of factory function BinarySearchTree is an object if the method is called with an argument", () => {
      expect(typeof binarySearchTree.buildTree([2, 1, 3])).toBe("object");
    });
  });

  describe("Testing the return values of the methods of factory function BinarySearchTree", () => {
    test("The buildTree method of factory function LinkedList works correctly if the method is called without an argument", () => {
      expect(binarySearchTree.buildTree()).toStrictEqual(null);
    });

    test("The buildTree method of factory function LinkedList works correctly if the method is called with an argument of an array that contains one number", () => {
      expect(binarySearchTree.buildTree([1])).toStrictEqual(
        { data: 1, 
          left: null,
          right: null
        }
      );
    });

    test("The buildTree method of factory function LinkedList works correctly if the method is called with an argument of an array that contains 2 unsorted positive numbers", () => {
      expect(binarySearchTree.buildTree([2, 1])).toStrictEqual(
        { data: 1, 
          left: null,
          right: {
            data: 2,
            left: null,
            right: null
          }
        }
      );
    });

    test("The buildTree method of factory function LinkedList works correctly if the method is called with an argument of an array that contains 3 unsorted positive numbers", () => {
      expect(binarySearchTree.buildTree([2, 1, 3])).toStrictEqual(
        { data: 2, 
          left: { 
            data: 1, 
            left: null, 
            right: null 
          }, 
          right: { 
            data: 3, 
            left: null, 
            right: null 
          } 
        }
      );
    });

    test("The buildTree method of factory function LinkedList works correctly if the method is called with an argument of an array that contains unsorted negative numbers and unsorted positive numbers", () => {
      expect(binarySearchTree.buildTree([2, -4, 1, -2, 3])).toStrictEqual(
        { data: 1, 
          left: { 
            data: -4, 
            left: null, 
            right: { 
              data: -2, 
              left: null, 
              right: null 
            } 
          }, 
          right: { 
            data: 2, 
            left: null, 
            right: { 
              data: 3, 
              left: null, 
              right: null 
            } 
          } 
        }
      );
    });

    test("The buildTree method of factory function LinkedList works correctly if the method is called with an argument of an array that contains unsorted duplicate negative numbers and unsorted duplicate positive numbers", () => {
      expect(binarySearchTree.buildTree([2, -4, 1, -2, 3, 2, -4])).toStrictEqual(
        { data: 1, 
          left: { 
            data: -4, 
            left: null, 
            right: { 
              data: -2, 
              left: null, 
              right: null 
            } 
          }, 
          right: { 
            data: 2, 
            left: null, 
            right: { 
              data: 3, 
              left: null, 
              right: null 
            } 
          } 
        }
      );
    });
  });
});
