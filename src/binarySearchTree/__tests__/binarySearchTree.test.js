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

    test("The getRootNode method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.getRootNode).toBe("function");
    });

    test("The insert method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.insert).toBe("function");
    });

    test("The delete method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.delete).toBe("function");
    });
  });

  describe("Testing the return type of the methods of factory function BinarySearchTree", () => {
    test("The return type of the buildTree method of factory function BinarySearchTree is an object if the method is called without an argument", () => {
      expect(typeof binarySearchTree.buildTree()).toBe("object");
    });
    
    test("The return type of the buildTree method of factory function BinarySearchTree is an object if the method is called with an argument", () => {
      expect(typeof binarySearchTree.buildTree([2, 1, 3])).toBe("object");
    });

    test("The return type of the getRootNode method of factory function BinarySearchTree is an object", () => {
      expect(typeof binarySearchTree.getRootNode()).toBe("object");
    });

    test("The return type of the insert method of factory function BinarySearchTree is an object if the method is called without an argument", () => {
      expect(typeof binarySearchTree.insert()).toBe("object");
    });

    test("The return type of the insert method of factory function BinarySearchTree is an object if the method is called with an argument", () => {
      expect(typeof binarySearchTree.insert(1)).toBe("object");
    });

    test("The return type of the delete method of factory function BinarySearchTree is an object if the method is called without an argument", () => {
      expect(typeof binarySearchTree.delete()).toBe("object");
    });

    test("The return type of the delete method of factory function BinarySearchTree is an object if the method is called with an argument", () => {
      expect(typeof binarySearchTree.delete(1)).toBe("object");
    });

  });

  describe("Testing the return values of the methods of factory function BinarySearchTree", () => {
    test("The buildTree method of factory function LinkedList works correctly if the method is called without an argument", () => {
      expect(binarySearchTree.buildTree()).toStrictEqual(null);
    });

    test("The buildTree method of factory function LinkedList works correctly if the method is called with an argument of an array that contains one number", () => {
      expect(binarySearchTree.buildTree([1])).toStrictEqual(
        { 
          data: 1, 
          left: null,
          right: null
        }
      );
    });

    test("The buildTree method of factory function LinkedList works correctly if the method is called with an argument of an array that contains 2 unsorted positive numbers", () => {
      expect(binarySearchTree.buildTree([2, 1])).toStrictEqual(
        { 
          data: 1, 
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
        { 
          data: 2, 
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
        { 
          data: 1, 
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
        { 
          data: 1, 
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

    test("The getRootNode method of factory function LinkedList works correctly if the the binary search tree is empty", () => {
      expect(binarySearchTree.getRootNode()).toStrictEqual(null);
    });

    test("The getRootNode method of factory function LinkedList works correctly if the the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.getRootNode()).toStrictEqual(
        { 
          data: 2, 
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

    test("The insert method of factory function LinkedList works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.insert()).toStrictEqual(null);
    });

    test("The insert method of factory function LinkedList works correctly if the method is called without an argument and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.insert()).toStrictEqual(
        { 
          data: 2, 
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

    test("The insert method of factory function LinkedList works correctly if the method is called with a positive argument and the binary search tree is empty", () => {
      expect(binarySearchTree.insert(1)).toStrictEqual(
        { 
          data: 1, 
          left: null,
          right: null
        }
      );
    });

    test("The insert method of factory function LinkedList works correctly if the method is called with a negative argument and the binary search tree is empty", () => {
      expect(binarySearchTree.insert(-1)).toStrictEqual(
        { 
          data: -1, 
          left: null,
          right: null
        }
      );
    });

    test("The insert method of factory function LinkedList works correctly if the method is called with a positive argument and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.insert(4)).toStrictEqual(
        { 
          data: 2, 
          left: { 
            data: 1, 
            left: null, 
            right: null 
          }, 
          right: { 
            data: 3, 
            left: null, 
            right: {
              data: 4,
              left: null,
              right: null
            } 
          } 
        }
      );
    });

    test("The insert method of factory function LinkedList works correctly if the method is called with a negative argument and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.insert(-4)).toStrictEqual(
        { 
          data: 2, 
          left: { 
            data: 1, 
            left: {
              data: -4,
              left: null,
              right: null
            }, 
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

    test("The insert method of factory function LinkedList works correctly if the method is called with a positive argument and the binary search tree is not empty and the argument is already in the binary search tree", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.insert(3)).toStrictEqual(
        { 
          data: 2, 
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

    test("The insert method of factory function LinkedList works correctly if the method is called with a negative argument and the binary search tree is not empty and the argument is already in the binary search tree", () => {
      binarySearchTree.buildTree([2, -1, 3]);
      expect(binarySearchTree.insert(-1)).toStrictEqual(
        { 
          data: 2, 
          left: { 
            data: -1, 
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

    test("The insert method of factory function LinkedList works correctly if the method is called with a positive argument, the binary search tree is not empty, the binary search tree has 2 leaf nodes, the argument is smaller than the root node and the argument is smaller than the left leaf node", () => {
      binarySearchTree.buildTree([4, 2, 6]);
      expect(binarySearchTree.insert(1)).toStrictEqual(
        { 
          data: 4, 
          left: { 
            data: 2, 
            left: {
              data: 1,
              left: null,
              right: null
            }, 
            right: null 
          }, 
          right: { 
            data: 6, 
            left: null, 
            right: null
          }
        }
      );
    });

    test("The insert method of factory function LinkedList works correctly if the method is called with a positive argument, the binary search tree is not empty, the binary search tree has 2 leaf nodes, the argument is smaller than the root node and the argument is bigger than the left leaf node", () => {
      binarySearchTree.buildTree([4, 2, 6]);
      expect(binarySearchTree.insert(3)).toStrictEqual(
        { 
          data: 4, 
          left: { 
            data: 2, 
            left: null,
            right: {
              data: 3,
              left: null,
              right: null
            } 
          }, 
          right: { 
            data: 6, 
            left: null, 
            right: null
          }
        }
      );
    });

    test("The insert method of factory function LinkedList works correctly if the method is called with a positive argument, the binary search tree is not empty, the binary search tree has 2 leaf nodes, the argument is bigger than the root node and the argument is smaller than the right leaf node", () => {
      binarySearchTree.buildTree([4, 2, 6]);
      expect(binarySearchTree.insert(5)).toStrictEqual(
        { 
          data: 4, 
          left: { 
            data: 2, 
            left: null,
            right: null 
          }, 
          right: { 
            data: 6, 
            left: {
              data: 5,
              left: null,
              right: null
            }, 
            right: null
          }
        }
      );
    });

    test("The insert method of factory function LinkedList works correctly if the method is called with a positive argument, the binary search tree is not empty, the binary search tree has 2 leaf nodes, the argument is bigger than the root node and the argument is bigger than the right leaf node", () => {
      binarySearchTree.buildTree([4, 2, 6]);
      expect(binarySearchTree.insert(7)).toStrictEqual(
        { 
          data: 4, 
          left: { 
            data: 2, 
            left: null,
            right: null 
          }, 
          right: { 
            data: 6, 
            left: null,
            right: {
              data: 7,
              left: null,
              right: null
            }
          }
        }
      );
    });

    test("The delete method of factory function LinkedList works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.delete()).toStrictEqual(null);
    });

    test("The delete method of factory function LinkedList works correctly if the method is called without an argument and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.delete()).toStrictEqual(
        { 
          data: 2, 
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

    test("The delete method of factory function LinkedList works correctly if the method is called with an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.delete(1)).toStrictEqual(null);
    });

    test("The delete method of factory function LinkedList works correctly if the method is called with a negative argument and the binary search tree is empty", () => {
      expect(binarySearchTree.delete(-1)).toStrictEqual(null);
    });

    test("The delete method of factory function LinkedList works correctly if the method is called with a positive argument which exists in the binary search tree, the node with the value of the argument has no children, and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.delete(1)).toStrictEqual(
        { 
          data: 2, 
          left: null, 
          right: { 
            data: 3, 
            left: null, 
            right: null
          } 
        }
      );
    });

    test("The delete method of factory function LinkedList works correctly if the method is called with a negative argument which exists in the binary search tree, the node with the value of the argument has no children, and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, -1, 3]);
      expect(binarySearchTree.delete(-1)).toStrictEqual(
        { 
          data: 2, 
          left: null, 
          right: { 
            data: 3, 
            left: null, 
            right: null
          } 
        }
      );
    });

    test("The delete method of factory function LinkedList works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 1 left child node and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([6, 4, 2, 1, 7]);
      expect(binarySearchTree.delete(2)).toStrictEqual(
        { 
          data: 4, 
          left: { 
            data: 1, 
            left: null, 
            right: null 
          }, 
          right: { 
            data: 6, 
            left: null, 
            right: {
              data: 7,
              left: null,
              right: null
            } 
          } 
        }
      );
    });

    test("The delete method of factory function LinkedList works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 1 right child node and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([6, 4, 2, 3, 7]);
      expect(binarySearchTree.delete(2)).toStrictEqual(
        { 
          data: 4, 
          left: { 
            data: 3, 
            left: null, 
            right: null 
          }, 
          right: { 
            data: 6, 
            left: null, 
            right: {
              data: 7,
              left: null,
              right: null
            } 
          } 
        }
      );
    });

    test("The delete method of factory function LinkedList works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 2 child nodes and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([6, 4, 2, 3, 7, 1, 5]);
      expect(binarySearchTree.delete(2)).toStrictEqual(
        { 
          data: 4, 
          left: { 
            data: 3, 
            left: {
              data: 1,
              left: null,
              right: null
            }, 
            right: null 
          }, 
          right: { 
            data: 6, 
            left: {
              data: 5,
              left: null,
              right: null
            }, 
            right: {
              data: 7,
              left: null,
              right: null
            } 
          } 
        }
      );
    });

    test("The delete method of factory function LinkedList works correctly if the method is called with an argument that doesn't exist in the binary search tree and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.delete(4)).toStrictEqual(
        { 
          data: 2, 
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
  });
});
