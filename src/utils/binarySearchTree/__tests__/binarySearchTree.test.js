import { BinarySearchTree } from "../binarySearchTree.js";

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

    test("The insertNode method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.insertNode).toBe("function");
    });

    test("The deleteNodeRec method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.deleteNodeRec).toBe("function");
    });

    test("The deleteNode method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.deleteNode).toBe("function");
    });

    test("The find method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.find).toBe("function");
    });

    test("The levelOrder method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.levelOrder).toBe("function");
    });

    test("The preOrder method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.preOrder).toBe("function");
    });

    test("The inOrder method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.inOrder).toBe("function");
    });

    test("The postOrder method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.postOrder).toBe("function");
    });

    test("The height method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.height).toBe("function");
    });

    test("The depth method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.depth).toBe("function");
    });

    test("The isBalanced method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.isBalanced).toBe("function");
    });

    test("The rebalance method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.rebalance).toBe("function");
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

    test("The return type of the insertNode method of factory function BinarySearchTree is an object if the method is called without an argument", () => {
      expect(typeof binarySearchTree.insertNode()).toBe("object");
    });

    test("The return type of the insertNode method of factory function BinarySearchTree is an object if the method is called with an argument", () => {
      expect(typeof binarySearchTree.insertNode(1)).toBe("object");
    });

    test("The return type of the deleteNodeRec method of factory function BinarySearchTree is an object if the method is called without an argument", () => {
      expect(typeof binarySearchTree.deleteNodeRec()).toBe("object");
    });

    test("The return type of the deleteNodeRec method of factory function BinarySearchTree is an object if the method is called with an argument", () => {
      expect(typeof binarySearchTree.deleteNodeRec(1)).toBe("object");
    });

    test("The return type of the deleteNode method of factory function BinarySearchTree is an object if the method is called without an argument", () => {
      expect(typeof binarySearchTree.deleteNode()).toBe("object");
    });

    test("The return type of the deleteNode method of factory function BinarySearchTree is an object if the method is called with an argument", () => {
      expect(typeof binarySearchTree.deleteNode(1)).toBe("object");
    });

    test("The return type of the find method of factory function BinarySearchTree is an object if the method is called without an argument", () => {
      expect(typeof binarySearchTree.find()).toBe("object");
    });

    test("The return type of the find method of factory function BinarySearchTree is an object if the method is called with an argument", () => {
      expect(typeof binarySearchTree.find(1)).toBe("object");
    });

    test("The return type of the levelOrder method of factory function BinarySearchTree is an array if the method is called without an argument", () => {
      expect(Array.isArray(binarySearchTree.levelOrder())).toBe(true);
    });

    test("The return type of the levelOrder method of factory function BinarySearchTree is an array if the method is called with an argument that isn't a function", () => {
      expect(Array.isArray(binarySearchTree.levelOrder([1]))).toBe(true);
    });

    test("The return type of the levelOrder method of factory function BinarySearchTree is an object if the method is called with an argument that is a function", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      expect(typeof binarySearchTree.levelOrder(mockCallback)).toBe("object");
    });

    test("The return type of the preOrder method of factory function BinarySearchTree is an array if the method is called without an argument", () => {
      expect(Array.isArray(binarySearchTree.preOrder())).toBe(true);
    });

    test("The return type of the preOrder method of factory function BinarySearchTree is an array if the method is called with an argument that isn't a function", () => {
      expect(Array.isArray(binarySearchTree.preOrder([1]))).toBe(true);
    });

    test("The return type of the preOrder method of factory function BinarySearchTree is an object if the method is called with an argument that is a function", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      expect(typeof binarySearchTree.preOrder(mockCallback)).toBe("object");
    });

    test("The return type of the inOrder method of factory function BinarySearchTree is an array if the method is called without an argument", () => {
      expect(Array.isArray(binarySearchTree.inOrder())).toBe(true);
    });

    test("The return type of the inOrder method of factory function BinarySearchTree is an array if the method is called with an argument that isn't a function", () => {
      expect(Array.isArray(binarySearchTree.inOrder([1]))).toBe(true);
    });
    
    test("The return type of the inOrder method of factory function BinarySearchTree is an object if the method is called with an argument that is a function", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      expect(typeof binarySearchTree.inOrder(mockCallback)).toBe("object");
    });

    test("The return type of the postOrder method of factory function BinarySearchTree is an array if the method is called without an argument", () => {
      expect(Array.isArray(binarySearchTree.postOrder())).toBe(true);
    });

    test("The return type of the postOrder method of factory function BinarySearchTree is an array if the method is called with an argument that isn't a function", () => {
      expect(Array.isArray(binarySearchTree.postOrder([1]))).toBe(true);
    });
    
    test("The return type of the postOrder method of factory function BinarySearchTree is an object if the method is called with an argument that is a function", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      expect(typeof binarySearchTree.postOrder(mockCallback)).toBe("object");
    });

    test("The return type of the height method of factory function BinarySearchTree is a number if the method is called without an argument", () => {
      expect(typeof binarySearchTree.height()).toBe("number");
    });

    test("The return type of the height method of factory function BinarySearchTree is an object if the method is called with an argument that isn't an object", () => {
      expect(typeof binarySearchTree.height(10)).toBe("object");
    });

    test("The return type of the height method of factory function BinarySearchTree is a number if the method is called with an argument that is an object", () => {
      expect(typeof binarySearchTree.height({ data: 10, left: null, right: null })).toBe("number");
    });

    test("The return type of the depth method of factory function BinarySearchTree is a number if the method is called without an argument", () => {
      expect(typeof binarySearchTree.depth()).toBe("number");
    });

    test("The return type of the depth method of factory function BinarySearchTree is an object if the method is called with an argument that isn't an object", () => {
      expect(typeof binarySearchTree.depth(10)).toBe("object");
    });

    test("The return type of the depth method of factory function BinarySearchTree is an object if the method is called with an argument that is an object and the argument object is not in the binary search tree", () => {
      expect(typeof binarySearchTree.depth({ data: 10, left: null, right: null })).toBe("object");
    });

    test("The return type of the depth method of factory function BinarySearchTree is a number if the method is called with an argument that is an object and the argument object is in the binary search tree", () => {
      binarySearchTree.buildTree([10]);
      expect(typeof binarySearchTree.depth({ data: 10, left: null, right: null })).toBe("number");
    });

    test("The return type of the isBalanced method of factory function BinarySearchTree is a boolean if the method is called without an argument", () => {
      expect(typeof binarySearchTree.isBalanced()).toBe("boolean");
    });

    test("The return type of the rebalance method of factory function BinarySearchTree is an object if the method is called without an argument", () => {
      expect(typeof binarySearchTree.rebalance()).toBe("object");
    });
  });

  describe("Testing the return values of the methods of factory function BinarySearchTree", () => {
    test("The buildTree method of factory function BinarySearchTree works correctly if the method is called without an argument", () => {
      expect(binarySearchTree.buildTree()).toStrictEqual(null);
    });

    test("The buildTree method of factory function BinarySearchTree works correctly if the method is called with an argument of an array that contains one number", () => {
      expect(binarySearchTree.buildTree([1])).toStrictEqual(
        { 
          data: 1, 
          left: null,
          right: null
        }
      );
    });

    test("The buildTree method of factory function BinarySearchTree works correctly if the method is called with an argument of an array that contains 2 unsorted positive numbers", () => {
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

    test("The buildTree method of factory function BinarySearchTree works correctly if the method is called with an argument of an array that contains 3 unsorted positive numbers", () => {
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

    test("The buildTree method of factory function BinarySearchTree works correctly if the method is called with an argument of an array that contains unsorted negative numbers and unsorted positive numbers", () => {
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

    test("The buildTree method of factory function BinarySearchTree works correctly if the method is called with an argument of an array that contains unsorted duplicate negative numbers and unsorted duplicate positive numbers", () => {
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

    test("The getRootNode method of factory function BinarySearchTree works correctly if the the binary search tree is empty", () => {
      expect(binarySearchTree.getRootNode()).toStrictEqual(null);
    });

    test("The getRootNode method of factory function BinarySearchTree works correctly if the the binary search tree is not empty", () => {
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

    test("The insertNode method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.insertNode()).toStrictEqual(null);
    });

    test("The insertNode method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.insertNode()).toStrictEqual(
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

    test("The insertNode method of factory function BinarySearchTree works correctly if the method is called with a positive argument and the binary search tree is empty", () => {
      expect(binarySearchTree.insertNode(1)).toStrictEqual(
        { 
          data: 1, 
          left: null,
          right: null
        }
      );
    });

    test("The insertNode method of factory function BinarySearchTree works correctly if the method is called with a negative argument and the binary search tree is empty", () => {
      expect(binarySearchTree.insertNode(-1)).toStrictEqual(
        { 
          data: -1, 
          left: null,
          right: null
        }
      );
    });

    test("The insertNode method of factory function BinarySearchTree works correctly if the method is called with a positive argument and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.insertNode(4)).toStrictEqual(
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

    test("The insertNode method of factory function BinarySearchTree works correctly if the method is called with a negative argument and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.insertNode(-4)).toStrictEqual(
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

    test("The insertNode method of factory function BinarySearchTree works correctly if the method is called with a positive argument and the binary search tree is not empty and the argument is already in the binary search tree", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.insertNode(3)).toStrictEqual(
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

    test("The insertNode method of factory function BinarySearchTree works correctly if the method is called with a negative argument and the binary search tree is not empty and the argument is already in the binary search tree", () => {
      binarySearchTree.buildTree([2, -1, 3]);
      expect(binarySearchTree.insertNode(-1)).toStrictEqual(
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

    test("The insertNode method of factory function BinarySearchTree works correctly if the method is called with a positive argument, the binary search tree is not empty, the binary search tree has 2 leaf nodes, the argument is smaller than the root node and the argument is smaller than the left leaf node", () => {
      binarySearchTree.buildTree([4, 2, 6]);
      expect(binarySearchTree.insertNode(1)).toStrictEqual(
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

    test("The insertNode method of factory function BinarySearchTree works correctly if the method is called with a positive argument, the binary search tree is not empty, the binary search tree has 2 leaf nodes, the argument is smaller than the root node and the argument is bigger than the left leaf node", () => {
      binarySearchTree.buildTree([4, 2, 6]);
      expect(binarySearchTree.insertNode(3)).toStrictEqual(
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

    test("The insertNode method of factory function BinarySearchTree works correctly if the method is called with a positive argument, the binary search tree is not empty, the binary search tree has 2 leaf nodes, the argument is bigger than the root node and the argument is smaller than the right leaf node", () => {
      binarySearchTree.buildTree([4, 2, 6]);
      expect(binarySearchTree.insertNode(5)).toStrictEqual(
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

    test("The insertNode method of factory function BinarySearchTree works correctly if the method is called with a positive argument, the binary search tree is not empty, the binary search tree has 2 leaf nodes, the argument is bigger than the root node and the argument is bigger than the right leaf node", () => {
      binarySearchTree.buildTree([4, 2, 6]);
      expect(binarySearchTree.insertNode(7)).toStrictEqual(
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

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.deleteNodeRec()).toStrictEqual(null);
    });

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.deleteNodeRec()).toStrictEqual(
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

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.deleteNodeRec(1)).toStrictEqual(null);
    });

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with a negative argument and the binary search tree is empty", () => {
      expect(binarySearchTree.deleteNodeRec(-1)).toStrictEqual(null);
    });

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with a positive argument which exists in the binary search tree, the node with the value of the argument has no children, and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.deleteNodeRec(1)).toStrictEqual(
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

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with a positive argument which exists in the binary search tree, the node with the value of the argument is the root node, the node with the value of the argument has 2 children, and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.deleteNodeRec(2)).toStrictEqual(
        { 
          data: 3, 
          left: { 
            data: 1,
            left: null,
            right: null
          }, 
          right: null
        }
      );
    });

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with a positive argument which exists in the binary search tree, the node with the value of the argument is the root node, the node has no child nodes, and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([1]);
      expect(binarySearchTree.deleteNodeRec(1)).toStrictEqual(null);
    });

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with a positive argument which exists in the binary search tree, the node with the value of the argument is the root node, the node has 1 right child node, and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([1, 2]);
      expect(binarySearchTree.deleteNodeRec(1)).toStrictEqual(
        { 
          data: 2, 
          left: null, 
          right: null
        }
      );
    });

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with a positive argument which exists in the binary search tree, the node with the value of the argument is the root node, the node has 1 left child node, and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([1]);
      binarySearchTree.insertNode(-1);
      expect(binarySearchTree.deleteNodeRec(1)).toStrictEqual(
        { 
          data: -1, 
          left: null, 
          right: null
        }
      );
    });

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with a negative argument which exists in the binary search tree, the node with the value of the argument has no children, and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, -1, 3]);
      expect(binarySearchTree.deleteNodeRec(-1)).toStrictEqual(
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

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 1 left child node, the left child node of the node with the value of the argument doesn't have child nodes itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(1);
      expect(binarySearchTree.deleteNodeRec(2)).toStrictEqual(
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
            right: null
          } 
        }
      );
    });

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 1 right child node, the right child node of the node with the value of the argument doesn't have child nodes itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(3);
      expect(binarySearchTree.deleteNodeRec(2)).toStrictEqual(
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
            right: null
          } 
        }
      );
    });

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 1 left child node, the left child of the node of the node with the value of the argument has 2 child nodes itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(1);
      expect(binarySearchTree.deleteNodeRec(2)).toStrictEqual(
        { 
          data: 4, 
          left: { 
            data: 0, 
            left: {
              data: -1,
              left: null,
              right: null
            }, 
            right: {
              data: 1,
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

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 1 right child node, the right child of the node of the node with the value of the argument has 2 child nodes itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.deleteNodeRec(6)).toStrictEqual(
        { 
          data: 4, 
          left: { 
            data: 2, 
            left: null, 
            right: null 
          }, 
          right: { 
            data: 8, 
            left: {
              data: 7,
              left: null,
              right: null
            }, 
            right: {
              data: 9,
              left: null,
              right: null
            }
          } 
        }
      );
    });

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 2 child nodes, the 2 child nodes of the node with the value of the argument don't have child nodes themselves and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(1);
      binarySearchTree.insertNode(3);
      expect(binarySearchTree.deleteNodeRec(2)).toStrictEqual(
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
            left: null, 
            right: null
          }
        }
      );
    });

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 2 child nodes, the right child node has no left child node itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([4, 10, 16]);
      binarySearchTree.insertNode(2);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(8);
      expect(binarySearchTree.deleteNodeRec(4)).toStrictEqual(
        { 
          data: 10,
          left: {
            data: 5, 
            left: { 
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
            },
            right: {
              data: 7,
              left: {
                data: 6,
                left: null,
                right: null
              },
              right: {
                data: 8,
                left: null,
                right: null
              }
            } 
          },
          right: {
            data: 16,
            left: null,
            right: null
          } 
        }
      );
    });

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 2 child nodes, the right child node has a left child node itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([4, 10, 16]);
      binarySearchTree.insertNode(2);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.deleteNodeRec(4)).toStrictEqual(
        { 
          data: 10,
          left: {
            data: 5, 
            left: { 
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
            },
            right: {
              data: 6,
              left: null,
              right: {
                data: 8,
                left: {
                  data: 7,
                  left: null,
                  right: null
                },
                right: {
                  data: 9,
                  left: null,
                  right: null
                }
              }
            } 
          },
          right: {
            data: 16,
            left: null,
            right: null
          } 
        }
      );
    });

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 2 child nodes, the right child node has multiple nested left child nodes itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([4, 10, 16]);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(9);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(5);
      expect(binarySearchTree.deleteNodeRec(4)).toStrictEqual(
        { 
          data: 10, 
          left: {
            data: 5,
            left: {
              data: 3,
              left: null,
              right: null
            },
            right: {
              data: 8,
              left: {
                data: 7,
                left: {
                  data: 6,
                  left: null,
                  right: null
                },
                right: null
              },
              right: {
                data: 9,
                left: null,
                right: null
              }
            }
          },
          right: {
            data: 16,
            left: null,
            right: null
          }
        }
      );
    });

    test("The deleteNodeRec method of factory function BinarySearchTree works correctly if the method is called with an argument that doesn't exist in the binary search tree and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.deleteNodeRec(4)).toStrictEqual(
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

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.deleteNode()).toStrictEqual(null);
      expect(binarySearchTree.deleteNode()).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.deleteNode()).toStrictEqual(
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
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.deleteNode()).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.deleteNode(1)).toStrictEqual(null);
      expect(binarySearchTree.deleteNode(1)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with a positive argument which exists in the binary search tree, the node with the value of the argument has no children, and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.deleteNode(1)).toStrictEqual(
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
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.deleteNode(1)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with a positive argument which exists in the binary search tree, the node with the value of the argument is the root node, the node with the value of the argument has 2 children, and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.deleteNode(2)).toStrictEqual(
        { 
          data: 3, 
          left: { 
            data: 1,
            left: null,
            right: null
          }, 
          right: null
        }
      );
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.deleteNode(2)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with a positive argument which exists in the binary search tree, the node with the value of the argument is the root node, the node has no child nodes, and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([1]);
      expect(binarySearchTree.deleteNode(1)).toStrictEqual(null);
      binarySearchTree.buildTree([1]);
      expect(binarySearchTree.deleteNode(1)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with a positive argument which exists in the binary search tree, the node with the value of the argument is the root node, the node has 1 right child node, and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([1, 2]);
      expect(binarySearchTree.deleteNode(1)).toStrictEqual(
        { 
          data: 2, 
          left: null, 
          right: null
        }
      );
      binarySearchTree.buildTree([1, 2]);
      expect(binarySearchTree.deleteNode(1)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with a positive argument which exists in the binary search tree, the node with the value of the argument is the root node, the node has 1 left child node, and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([1]);
      binarySearchTree.insertNode(-1);
      expect(binarySearchTree.deleteNode(1)).toStrictEqual(
        { 
          data: -1, 
          left: null, 
          right: null
        }
      );
      binarySearchTree.buildTree([1]);
      binarySearchTree.insertNode(-1);
      expect(binarySearchTree.deleteNode(1)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with a negative argument which exists in the binary search tree, the node with the value of the argument has no children, and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, -1, 3]);
      expect(binarySearchTree.deleteNode(-1)).toStrictEqual(
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
      binarySearchTree.buildTree([2, -1, 3]);
      expect(binarySearchTree.deleteNode(-1)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 1 left child node, the left child node of the node with the value of the argument doesn't have child nodes itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(1);
      expect(binarySearchTree.deleteNode(2)).toStrictEqual(
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
            right: null
          } 
        }
      );
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(1);
      expect(binarySearchTree.deleteNode(2)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 1 right child node, the right child node of the node with the value of the argument doesn't have child nodes itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(3);
      expect(binarySearchTree.deleteNode(2)).toStrictEqual(
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
            right: null
          } 
        }
      );
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(3);
      expect(binarySearchTree.deleteNode(2)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 1 left child node, the left child of the node of the node with the value of the argument has 2 child nodes itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(1);
      expect(binarySearchTree.deleteNode(2)).toStrictEqual(
        { 
          data: 4, 
          left: { 
            data: 0, 
            left: {
              data: -1,
              left: null,
              right: null
            }, 
            right: {
              data: 1,
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
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(1);
      expect(binarySearchTree.deleteNode(2)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 1 right child node, the right child of the node of the node with the value of the argument has 2 child nodes itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.deleteNode(6)).toStrictEqual(
        { 
          data: 4, 
          left: { 
            data: 2, 
            left: null, 
            right: null 
          }, 
          right: { 
            data: 8, 
            left: {
              data: 7,
              left: null,
              right: null
            }, 
            right: {
              data: 9,
              left: null,
              right: null
            }
          } 
        }
      );
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.deleteNode(6)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 2 child nodes, the 2 child nodes of the node with the value of the argument don't have child nodes themselves and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(1);
      binarySearchTree.insertNode(3);
      expect(binarySearchTree.deleteNodeRec(2)).toStrictEqual(
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
            left: null, 
            right: null
          }
        }
      );
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(1);
      binarySearchTree.insertNode(3);
      expect(binarySearchTree.deleteNode(2)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 2 child nodes, the right child node has no left child node itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([4, 10, 16]);
      binarySearchTree.insertNode(2);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(8);
      expect(binarySearchTree.deleteNode(4)).toStrictEqual(
        { 
          data: 10,
          left: {
            data: 5, 
            left: { 
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
            },
            right: {
              data: 7,
              left: {
                data: 6,
                left: null,
                right: null
              },
              right: {
                data: 8,
                left: null,
                right: null
              }
            } 
          },
          right: {
            data: 16,
            left: null,
            right: null
          } 
        }
      );
      binarySearchTree.buildTree([4, 10, 16]);
      binarySearchTree.insertNode(2);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(8);
      expect(binarySearchTree.deleteNode(4)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 2 child nodes, the right child node has a left child node itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([4, 10, 16]);
      binarySearchTree.insertNode(2);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.deleteNode(4)).toStrictEqual(
        { 
          data: 10,
          left: {
            data: 5, 
            left: { 
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
            },
            right: {
              data: 6,
              left: null,
              right: {
                data: 8,
                left: {
                  data: 7,
                  left: null,
                  right: null
                },
                right: {
                  data: 9,
                  left: null,
                  right: null
                }
              }
            } 
          },
          right: {
            data: 16,
            left: null,
            right: null
          } 
        }
      );
      binarySearchTree.buildTree([4, 10, 16]);
      binarySearchTree.insertNode(2);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.deleteNode(4)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 2 child nodes, the right child node has multiple nested left child nodes itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([4, 10, 16]);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(9);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(5);
      expect(binarySearchTree.deleteNodeRec(4)).toStrictEqual(
        { 
          data: 10, 
          left: {
            data: 5,
            left: {
              data: 3,
              left: null,
              right: null
            },
            right: {
              data: 8,
              left: {
                data: 7,
                left: {
                  data: 6,
                  left: null,
                  right: null
                },
                right: null
              },
              right: {
                data: 9,
                left: null,
                right: null
              }
            }
          },
          right: {
            data: 16,
            left: null,
            right: null
          }
        }
      );
      binarySearchTree.buildTree([4, 10, 16]);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(9);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(5);
      expect(binarySearchTree.deleteNode(4)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with an argument that doesn't exist in the binary search tree and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.deleteNodeRec(4)).toStrictEqual(
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
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.deleteNode(4)).toStrictEqual(binarySearchTree.getRootNode());
    });

    test("The find method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.find()).toStrictEqual(null);
    });

    test("The find method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.find()).toStrictEqual(null);
    });

    test("The find method of factory function BinarySearchTree works correctly if the method is called with an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.find(1)).toStrictEqual(null);
    });

    test("The find method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't in the binary search tree and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.find(4)).toStrictEqual(null);
    });

    test("The find method of factory function BinarySearchTree works correctly if the method is called with a positive argument, the argument is in the binary search tree, the node with the argument doesn't have child nodes and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.find(3)).toStrictEqual(
        {
          data: 3,
          left: null,
          right: null
        }
      );
    });

    test("The find method of factory function BinarySearchTree works correctly if the method is called with a negative argument, the argument is in the binary search tree, the node with the argument doesn't have child nodes and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, -1, 3]);
      expect(binarySearchTree.find(-1)).toStrictEqual(
        {
          data: -1,
          left: null,
          right: null
        }
      );
    });

    test("The find method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is in the binary search tree, the node with the argument has 1 left child node and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(5);
      expect(binarySearchTree.find(6)).toStrictEqual(
        {
          data: 6,
          left: {
            data: 5,
            left: null,
            right: null
          },
          right: null
        }
      );
    });

    test("The find method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is in the binary search tree, the node with the argument has 1 right child node and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(7);
      expect(binarySearchTree.find(6)).toStrictEqual(
        {
          data: 6,
          left: null,
          right: {
            data: 7,
            left: null,
            right: null
          }
        }
      );
    });

    test("The find method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is in the binary search tree, the node with the argument has 2 child nodes and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(7);
      expect(binarySearchTree.find(6)).toStrictEqual(
        {
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
      );
    });

    test("The find method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is in the binary search tree, the node with the argument has 2 child nodes which have nested child nodes themselves aswell and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 10, 16]);
      binarySearchTree.insertNode(14);
      binarySearchTree.insertNode(18);
      binarySearchTree.insertNode(13);
      binarySearchTree.insertNode(15);
      binarySearchTree.insertNode(17);
      expect(binarySearchTree.find(16)).toStrictEqual(
        {
          data: 16,
          left: {
            data: 14,
            left: {
              data: 13,
              left: null,
              right: null
            },
            right: {
              data: 15,
              left: null,
              right: null
            }
          },
          right: {
            data: 18,
            left: {
              data: 17,
              left: null,
              right: null
            },
            right: null
          }
        }
      );
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.levelOrder()).toStrictEqual([]);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.levelOrder()).toStrictEqual([2]);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.levelOrder()).toStrictEqual([2, -2]);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.levelOrder()).toStrictEqual([2, 6]);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.levelOrder()).toStrictEqual([2, -2, 6]);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.levelOrder()).toStrictEqual([2, -2, 6, -4, 0, 3, 8, -1, 5, 7, 9]);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.levelOrder()).toStrictEqual([2, -2, 6, -4, -1, 3, 7, -5, -3, 5, 4]);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function and the binary search tree is empty", () => {
      expect(binarySearchTree.levelOrder(10)).toStrictEqual([]);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.levelOrder(10)).toStrictEqual([2]);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.levelOrder(10)).toStrictEqual([2, -2]);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.levelOrder(10)).toStrictEqual([2, 6]);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.levelOrder(10)).toStrictEqual([2, -2, 6]);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.levelOrder(10)).toStrictEqual([2, -2, 6, -4, 0, 3, 8, -1, 5, 7, 9]);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.levelOrder(10)).toStrictEqual([2, -2, 6, -4, -1, 3, 7, -5, -3, 5, 4]);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function and the binary search tree is empty", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      expect(binarySearchTree.levelOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(0);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.levelOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(1);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.levelOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(2);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      expect(mockCallback.mock.calls[1][0].data).toBe(-2);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
      expect(mockCallback.mock.results[1].value).toBe(8);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.levelOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(2);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      expect(mockCallback.mock.calls[1][0].data).toBe(6);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
      expect(mockCallback.mock.results[1].value).toBe(16);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.levelOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(3);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      expect(mockCallback.mock.calls[1][0].data).toBe(-2);
      expect(mockCallback.mock.calls[2][0].data).toBe(6);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
      expect(mockCallback.mock.results[1].value).toBe(8);
      expect(mockCallback.mock.results[2].value).toBe(16);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.levelOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(11);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      expect(mockCallback.mock.calls[1][0].data).toBe(-2);
      expect(mockCallback.mock.calls[2][0].data).toBe(6);
      expect(mockCallback.mock.calls[3][0].data).toBe(-4);
      expect(mockCallback.mock.calls[4][0].data).toBe(0);
      expect(mockCallback.mock.calls[5][0].data).toBe(3);
      expect(mockCallback.mock.calls[6][0].data).toBe(8);
      expect(mockCallback.mock.calls[7][0].data).toBe(-1);
      expect(mockCallback.mock.calls[8][0].data).toBe(5);
      expect(mockCallback.mock.calls[9][0].data).toBe(7);
      expect(mockCallback.mock.calls[10][0].data).toBe(9);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
      expect(mockCallback.mock.results[1].value).toBe(8);
      expect(mockCallback.mock.results[2].value).toBe(16);
      expect(mockCallback.mock.results[3].value).toBe(6);
      expect(mockCallback.mock.results[4].value).toBe(10);
      expect(mockCallback.mock.results[5].value).toBe(13);
      expect(mockCallback.mock.results[6].value).toBe(18);
      expect(mockCallback.mock.results[7].value).toBe(9);
      expect(mockCallback.mock.results[8].value).toBe(15);
      expect(mockCallback.mock.results[9].value).toBe(17);
      expect(mockCallback.mock.results[10].value).toBe(19);
    });

    test("The levelOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.levelOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(11);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      expect(mockCallback.mock.calls[1][0].data).toBe(-2);
      expect(mockCallback.mock.calls[2][0].data).toBe(6);
      expect(mockCallback.mock.calls[3][0].data).toBe(-4);
      expect(mockCallback.mock.calls[4][0].data).toBe(-1);
      expect(mockCallback.mock.calls[5][0].data).toBe(3);
      expect(mockCallback.mock.calls[6][0].data).toBe(7);
      expect(mockCallback.mock.calls[7][0].data).toBe(-5);
      expect(mockCallback.mock.calls[8][0].data).toBe(-3);
      expect(mockCallback.mock.calls[9][0].data).toBe(5);
      expect(mockCallback.mock.calls[10][0].data).toBe(4);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
      expect(mockCallback.mock.results[1].value).toBe(8);
      expect(mockCallback.mock.results[2].value).toBe(16);
      expect(mockCallback.mock.results[3].value).toBe(6);
      expect(mockCallback.mock.results[4].value).toBe(9);
      expect(mockCallback.mock.results[5].value).toBe(13);
      expect(mockCallback.mock.results[6].value).toBe(17);
      expect(mockCallback.mock.results[7].value).toBe(5);
      expect(mockCallback.mock.results[8].value).toBe(7);
      expect(mockCallback.mock.results[9].value).toBe(15);
      expect(mockCallback.mock.results[10].value).toBe(14);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.preOrder()).toStrictEqual([]);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.preOrder()).toStrictEqual([2]);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.preOrder()).toStrictEqual([2, -2]);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.preOrder()).toStrictEqual([2, 6]);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.preOrder()).toStrictEqual([2, -2, 6]);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.preOrder()).toStrictEqual([2, -2, -4, 0, -1, 6, 3, 5, 8, 7, 9]);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.preOrder()).toStrictEqual([2, -2, -4, -5, -3, -1, 6, 3, 5, 4, 7]);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function and the binary search tree is empty", () => {
      expect(binarySearchTree.preOrder(10)).toStrictEqual([]);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.preOrder(10)).toStrictEqual([2]);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.preOrder(10)).toStrictEqual([2, -2]);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.preOrder(10)).toStrictEqual([2, 6]);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.preOrder(10)).toStrictEqual([2, -2, 6]);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.preOrder(10)).toStrictEqual([2, -2, -4, 0, -1, 6, 3, 5, 8, 7, 9]);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.preOrder(10)).toStrictEqual([2, -2, -4, -5, -3, -1, 6, 3, 5, 4, 7]);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function and the binary search tree is empty", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      expect(binarySearchTree.preOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(0);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.preOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(1);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.preOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(2);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      expect(mockCallback.mock.calls[1][0].data).toBe(-2);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
      expect(mockCallback.mock.results[1].value).toBe(8);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.preOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(2);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      expect(mockCallback.mock.calls[1][0].data).toBe(6);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
      expect(mockCallback.mock.results[1].value).toBe(16);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.preOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(3);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      expect(mockCallback.mock.calls[1][0].data).toBe(-2);
      expect(mockCallback.mock.calls[2][0].data).toBe(6);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
      expect(mockCallback.mock.results[1].value).toBe(8);
      expect(mockCallback.mock.results[2].value).toBe(16);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.preOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(11);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      expect(mockCallback.mock.calls[1][0].data).toBe(-2);
      expect(mockCallback.mock.calls[2][0].data).toBe(-4);
      expect(mockCallback.mock.calls[3][0].data).toBe(0);
      expect(mockCallback.mock.calls[4][0].data).toBe(-1);
      expect(mockCallback.mock.calls[5][0].data).toBe(6);
      expect(mockCallback.mock.calls[6][0].data).toBe(3);
      expect(mockCallback.mock.calls[7][0].data).toBe(5);
      expect(mockCallback.mock.calls[8][0].data).toBe(8);
      expect(mockCallback.mock.calls[9][0].data).toBe(7);
      expect(mockCallback.mock.calls[10][0].data).toBe(9);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
      expect(mockCallback.mock.results[1].value).toBe(8);
      expect(mockCallback.mock.results[2].value).toBe(6);
      expect(mockCallback.mock.results[3].value).toBe(10);
      expect(mockCallback.mock.results[4].value).toBe(9);
      expect(mockCallback.mock.results[5].value).toBe(16);
      expect(mockCallback.mock.results[6].value).toBe(13);
      expect(mockCallback.mock.results[7].value).toBe(15);
      expect(mockCallback.mock.results[8].value).toBe(18);
      expect(mockCallback.mock.results[9].value).toBe(17);
      expect(mockCallback.mock.results[10].value).toBe(19);
    });

    test("The preOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.preOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(11);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      expect(mockCallback.mock.calls[1][0].data).toBe(-2);
      expect(mockCallback.mock.calls[2][0].data).toBe(-4);
      expect(mockCallback.mock.calls[3][0].data).toBe(-5);
      expect(mockCallback.mock.calls[4][0].data).toBe(-3);
      expect(mockCallback.mock.calls[5][0].data).toBe(-1);
      expect(mockCallback.mock.calls[6][0].data).toBe(6);
      expect(mockCallback.mock.calls[7][0].data).toBe(3);
      expect(mockCallback.mock.calls[8][0].data).toBe(5);
      expect(mockCallback.mock.calls[9][0].data).toBe(4);
      expect(mockCallback.mock.calls[10][0].data).toBe(7);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
      expect(mockCallback.mock.results[1].value).toBe(8);
      expect(mockCallback.mock.results[2].value).toBe(6);
      expect(mockCallback.mock.results[3].value).toBe(5);
      expect(mockCallback.mock.results[4].value).toBe(7);
      expect(mockCallback.mock.results[5].value).toBe(9);
      expect(mockCallback.mock.results[6].value).toBe(16);
      expect(mockCallback.mock.results[7].value).toBe(13);
      expect(mockCallback.mock.results[8].value).toBe(15);
      expect(mockCallback.mock.results[9].value).toBe(14);
      expect(mockCallback.mock.results[10].value).toBe(17);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.inOrder()).toStrictEqual([]);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.inOrder()).toStrictEqual([2]);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.inOrder()).toStrictEqual([-2, 2]);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.inOrder()).toStrictEqual([2, 6]);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.inOrder()).toStrictEqual([-2, 2, 6]);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.inOrder()).toStrictEqual([-4, -2, -1, 0, 2, 3, 5, 6, 7, 8, 9]);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.inOrder()).toStrictEqual([-5, -4, -3, -2, -1, 2, 3, 4, 5, 6, 7]);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function and the binary search tree is empty", () => {
      expect(binarySearchTree.inOrder(10)).toStrictEqual([]);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.inOrder(10)).toStrictEqual([2]);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.inOrder(10)).toStrictEqual([-2, 2]);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.inOrder(10)).toStrictEqual([2, 6]);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.inOrder(10)).toStrictEqual([-2, 2, 6]);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.inOrder(10)).toStrictEqual([-4, -2, -1, 0, 2, 3, 5, 6, 7, 8, 9]);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.inOrder(10)).toStrictEqual([-5, -4, -3, -2, -1, 2, 3, 4, 5, 6, 7]);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function and the binary search tree is empty", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      expect(binarySearchTree.inOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(0);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.inOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(1);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.inOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(2);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(-2);
      expect(mockCallback.mock.calls[1][0].data).toBe(2);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(8);
      expect(mockCallback.mock.results[1].value).toBe(12);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.inOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(2);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      expect(mockCallback.mock.calls[1][0].data).toBe(6);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
      expect(mockCallback.mock.results[1].value).toBe(16);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.inOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(3);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(-2);
      expect(mockCallback.mock.calls[1][0].data).toBe(2);
      expect(mockCallback.mock.calls[2][0].data).toBe(6);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(8);
      expect(mockCallback.mock.results[1].value).toBe(12);
      expect(mockCallback.mock.results[2].value).toBe(16);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.inOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(11);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(-4);
      expect(mockCallback.mock.calls[1][0].data).toBe(-2);
      expect(mockCallback.mock.calls[2][0].data).toBe(-1);
      expect(mockCallback.mock.calls[3][0].data).toBe(0);
      expect(mockCallback.mock.calls[4][0].data).toBe(2);
      expect(mockCallback.mock.calls[5][0].data).toBe(3);
      expect(mockCallback.mock.calls[6][0].data).toBe(5);
      expect(mockCallback.mock.calls[7][0].data).toBe(6);
      expect(mockCallback.mock.calls[8][0].data).toBe(7);
      expect(mockCallback.mock.calls[9][0].data).toBe(8);
      expect(mockCallback.mock.calls[10][0].data).toBe(9);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(6);
      expect(mockCallback.mock.results[1].value).toBe(8);
      expect(mockCallback.mock.results[2].value).toBe(9);
      expect(mockCallback.mock.results[3].value).toBe(10);
      expect(mockCallback.mock.results[4].value).toBe(12);
      expect(mockCallback.mock.results[5].value).toBe(13);
      expect(mockCallback.mock.results[6].value).toBe(15);
      expect(mockCallback.mock.results[7].value).toBe(16);
      expect(mockCallback.mock.results[8].value).toBe(17);
      expect(mockCallback.mock.results[9].value).toBe(18);
      expect(mockCallback.mock.results[10].value).toBe(19);
    });

    test("The inOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.inOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(11);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(-5);
      expect(mockCallback.mock.calls[1][0].data).toBe(-4);
      expect(mockCallback.mock.calls[2][0].data).toBe(-3);
      expect(mockCallback.mock.calls[3][0].data).toBe(-2);
      expect(mockCallback.mock.calls[4][0].data).toBe(-1);
      expect(mockCallback.mock.calls[5][0].data).toBe(2);
      expect(mockCallback.mock.calls[6][0].data).toBe(3);
      expect(mockCallback.mock.calls[7][0].data).toBe(4);
      expect(mockCallback.mock.calls[8][0].data).toBe(5);
      expect(mockCallback.mock.calls[9][0].data).toBe(6);
      expect(mockCallback.mock.calls[10][0].data).toBe(7);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(5);
      expect(mockCallback.mock.results[1].value).toBe(6);
      expect(mockCallback.mock.results[2].value).toBe(7);
      expect(mockCallback.mock.results[3].value).toBe(8);
      expect(mockCallback.mock.results[4].value).toBe(9);
      expect(mockCallback.mock.results[5].value).toBe(12);
      expect(mockCallback.mock.results[6].value).toBe(13);
      expect(mockCallback.mock.results[7].value).toBe(14);
      expect(mockCallback.mock.results[8].value).toBe(15);
      expect(mockCallback.mock.results[9].value).toBe(16);
      expect(mockCallback.mock.results[10].value).toBe(17);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.postOrder()).toStrictEqual([]);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.postOrder()).toStrictEqual([2]);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.postOrder()).toStrictEqual([-2, 2]);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.postOrder()).toStrictEqual([6, 2]);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.postOrder()).toStrictEqual([-2, 6, 2]);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.postOrder()).toStrictEqual([-4, -1, 0, -2, 5, 3, 7, 9, 8, 6, 2]);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.postOrder()).toStrictEqual([-5, -3, -4, -1, -2, 4, 5, 3, 7, 6, 2]);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function and the binary search tree is empty", () => {
      expect(binarySearchTree.postOrder(10)).toStrictEqual([]);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.postOrder(10)).toStrictEqual([2]);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.postOrder(10)).toStrictEqual([-2, 2]);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.postOrder(10)).toStrictEqual([6, 2]);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.postOrder(10)).toStrictEqual([-2, 6, 2]);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.postOrder(10)).toStrictEqual([-4, -1, 0, -2, 5, 3, 7, 9, 8, 6, 2]);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a function, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.postOrder(10)).toStrictEqual([-5, -3, -4, -1, -2, 4, 5, 3, 7, 6, 2]);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function and the binary search tree is empty", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      expect(binarySearchTree.postOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(0);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.postOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(1);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(2);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(12);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.postOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(2);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(-2);
      expect(mockCallback.mock.calls[1][0].data).toBe(2);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(8);
      expect(mockCallback.mock.results[1].value).toBe(12);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.postOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(2);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(6);
      expect(mockCallback.mock.calls[1][0].data).toBe(2);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(16);
      expect(mockCallback.mock.results[1].value).toBe(12);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.postOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(3);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(-2);
      expect(mockCallback.mock.calls[1][0].data).toBe(6);
      expect(mockCallback.mock.calls[2][0].data).toBe(2);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(8);
      expect(mockCallback.mock.results[1].value).toBe(16);
      expect(mockCallback.mock.results[2].value).toBe(12);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.postOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(11);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(-4);
      expect(mockCallback.mock.calls[1][0].data).toBe(-1);
      expect(mockCallback.mock.calls[2][0].data).toBe(0);
      expect(mockCallback.mock.calls[3][0].data).toBe(-2);
      expect(mockCallback.mock.calls[4][0].data).toBe(5);
      expect(mockCallback.mock.calls[5][0].data).toBe(3);
      expect(mockCallback.mock.calls[6][0].data).toBe(7);
      expect(mockCallback.mock.calls[7][0].data).toBe(9);
      expect(mockCallback.mock.calls[8][0].data).toBe(8);
      expect(mockCallback.mock.calls[9][0].data).toBe(6);
      expect(mockCallback.mock.calls[10][0].data).toBe(2);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(6);
      expect(mockCallback.mock.results[1].value).toBe(9);
      expect(mockCallback.mock.results[2].value).toBe(10);
      expect(mockCallback.mock.results[3].value).toBe(8);
      expect(mockCallback.mock.results[4].value).toBe(15);
      expect(mockCallback.mock.results[5].value).toBe(13);
      expect(mockCallback.mock.results[6].value).toBe(17);
      expect(mockCallback.mock.results[7].value).toBe(19);
      expect(mockCallback.mock.results[8].value).toBe(18);
      expect(mockCallback.mock.results[9].value).toBe(16);
      expect(mockCallback.mock.results[10].value).toBe(12);
    });

    test("The postOrder method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a function, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      const mockCallback = jest.fn((x) => (x.data + 10));
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.postOrder(mockCallback)).toStrictEqual(null);
      // amount of times that the callback function has been called
      expect(mockCallback.mock.calls.length).toBe(11);
      // the value of the data property of the first argument of the n-th callback function call
      expect(mockCallback.mock.calls[0][0].data).toBe(-5);
      expect(mockCallback.mock.calls[1][0].data).toBe(-3);
      expect(mockCallback.mock.calls[2][0].data).toBe(-4);
      expect(mockCallback.mock.calls[3][0].data).toBe(-1);
      expect(mockCallback.mock.calls[4][0].data).toBe(-2);
      expect(mockCallback.mock.calls[5][0].data).toBe(4);
      expect(mockCallback.mock.calls[6][0].data).toBe(5);
      expect(mockCallback.mock.calls[7][0].data).toBe(3);
      expect(mockCallback.mock.calls[8][0].data).toBe(7);
      expect(mockCallback.mock.calls[9][0].data).toBe(6);
      expect(mockCallback.mock.calls[10][0].data).toBe(2);
      // The return value of the n-th callback function call
      expect(mockCallback.mock.results[0].value).toBe(5);
      expect(mockCallback.mock.results[1].value).toBe(7);
      expect(mockCallback.mock.results[2].value).toBe(6);
      expect(mockCallback.mock.results[3].value).toBe(9);
      expect(mockCallback.mock.results[4].value).toBe(8);
      expect(mockCallback.mock.results[5].value).toBe(14);
      expect(mockCallback.mock.results[6].value).toBe(15);
      expect(mockCallback.mock.results[7].value).toBe(13);
      expect(mockCallback.mock.results[8].value).toBe(17);
      expect(mockCallback.mock.results[9].value).toBe(16);
      expect(mockCallback.mock.results[10].value).toBe(12);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.height()).toBe(0);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.height()).toBe(0);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.height()).toBe(1);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.height()).toBe(1);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.height()).toBe(1);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.height()).toBe(3);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.height()).toBe(4);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a node object and the binary search tree is empty", () => {
      expect(binarySearchTree.height(10)).toStrictEqual(null);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a node object, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.height(10)).toStrictEqual(null);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a node object, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.height(10)).toStrictEqual(null);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a node object, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.height(10)).toStrictEqual(null);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a node object, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.height(10)).toStrictEqual(null);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a node object, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.height(10)).toStrictEqual(null);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a node object, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.height(10)).toStrictEqual(null);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is the root node object and the binary search tree is empty", () => {
      expect(binarySearchTree.height(binarySearchTree.getRootNode())).toBe(0);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is the root node object, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.height(binarySearchTree.getRootNode())).toBe(0);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is the root node object, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.height(binarySearchTree.getRootNode())).toBe(1);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is the root node object, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.height(binarySearchTree.getRootNode())).toBe(1);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is the root node object, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.height(binarySearchTree.getRootNode())).toBe(1);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is the root node object, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.height(binarySearchTree.getRootNode())).toBe(3);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is the root node object, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.height(binarySearchTree.getRootNode())).toBe(4);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is not a sub node object of the root node object and the binary search tree is empty", () => {
      expect(binarySearchTree.height(
        { 
          data: 2, 
          left: null, 
          right: null 
        }
      )).toBe(0);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is not a sub node object of the root node object, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.height(
        { 
          data: 2, 
          left: { 
            data: -2, 
            left: null, 
            right: null 
          }, 
          right: { 
            data: 6,
            left: null,
            right: null
          } 
        }
      )).toBe(1);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is a sub node object of the root node object, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.height(
        {
          data: -2,
          left: null,
          right: null
        }
      )).toBe(0);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is a sub node object of the root node object, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.height(
        {
          data: 6,
          left: null,
          right: null
        }
      )).toBe(0);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is a sub node object of the root node object, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.height(
        {
          data: -2,
          left: null,
          right: null
        }
      )).toBe(0);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is a sub node object of the root node object, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.height(
        {
          data: -2,
          left: {
            data: -4,
            left: null,
            right: null
          },
          right: {
            data: 0,
            left: {
              data: -1,
              left: null,
              right: null
            },
            right: null
          }
        }
      )).toBe(2);
    });

    test("The height method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is a sub node object of the root node object, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.height(
        {
          data: 6,
          left: {
            data: 3,
            left: null,
            right: {
              data: 5,
              left: {
                data: 4,
                left: null,
                right: null
              },
              right: null
            }
          },
          right: {
            data: 7,
            left: null,
            right: null
          }
        }
      )).toBe(3);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.depth()).toBe(0);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.depth()).toBe(0);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.depth()).toBe(0);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.depth()).toBe(0);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.depth()).toBe(0);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.depth()).toBe(0);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.depth()).toBe(0);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a node object and the binary search tree is empty", () => {
      expect(binarySearchTree.depth(10)).toStrictEqual(null);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a node object, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.depth(10)).toStrictEqual(null);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a node object, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.depth(10)).toStrictEqual(null);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a node object, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.depth(10)).toStrictEqual(null);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a node object, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.depth(10)).toStrictEqual(null);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a node object, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.depth(10)).toStrictEqual(null);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument isn't a node object, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.depth(10)).toStrictEqual(null);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is the root node object and the binary search tree is empty", () => {
      expect(binarySearchTree.depth(binarySearchTree.getRootNode())).toBe(0);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is the root node object, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.depth(binarySearchTree.getRootNode())).toBe(0);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is the root node object, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.depth(binarySearchTree.getRootNode())).toBe(0);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is the root node object, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.depth(binarySearchTree.getRootNode())).toBe(0);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is the root node object, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.depth(binarySearchTree.getRootNode())).toBe(0);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is the root node object, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.depth(binarySearchTree.getRootNode())).toBe(0);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is the root node object, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.depth(binarySearchTree.getRootNode())).toBe(0);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is not a sub node object of the root node object and the binary search tree is empty", () => {
      expect(binarySearchTree.depth(
        { 
          data: 2, 
          left: null, 
          right: null 
        }
      )).toStrictEqual(null);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is not a sub node object of the root node object, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.depth(
        { 
          data: 2, 
          left: { 
            data: -2, 
            left: null, 
            right: null 
          }, 
          right: { 
            data: 6,
            left: null,
            right: null
          } 
        }
      )).toStrictEqual(null);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is a sub node object of the root node object, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.depth(
        {
          data: -2,
          left: null,
          right: null
        }
      )).toBe(1);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is a sub node object of the root node object, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.depth(
        {
          data: 6,
          left: null,
          right: null
        }
      )).toBe(1);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is a sub node object of the root node object, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.depth(
        {
          data: -2,
          left: null,
          right: null
        }
      )).toBe(1);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is a sub node object of the root node object, the argument doesn't have any child nodes and is a leaf sub node object of the root node, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.depth(
        {
          data: 7,
          left: null,
          right: null
        }
      )).toBe(3);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is a sub node object of the root node object, the argument doesn't have any child nodes and is a leaf sub node object of the root node, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.depth(
        {
          data: 4,
          left: null,
          right: null
        }
      )).toBe(4);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is a sub node object of the root node object, the argument has at least 1 child node and is not a leaf sub node object of the root node, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.depth(
        {
          data: 0,
          left: {
            data: -1,
            left: null,
            right: null
          },
          right: null
        }
      )).toBe(2);
    });

    test("The depth method of factory function BinarySearchTree works correctly if the method is called with an argument, the argument is a node object, the argument is not the root node object, the argument is a sub node object of the root node object, the argument has at least 1 child node and is not a leaf sub node object of the root node, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.depth(
        {
          data: -4,
          left: {
            data: -5,
            left: null,
            right: null
          },
          right: {
            data: -3,
            left: null,
            right: null
          }
        }
      )).toBe(2);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.isBalanced()).toBe(true);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.isBalanced()).toBe(true);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.isBalanced()).toBe(true);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.isBalanced()).toBe(true);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 left child node, the left child node has one left child node itself, the left child node of the left child node of the root node has no child nodes itself, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      binarySearchTree.insertNode(-4);
      expect(binarySearchTree.isBalanced()).toBe(false);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 left child node, the left child node has one right child node itself, the right child node of the left child node of the root node has no child nodes itself, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      binarySearchTree.insertNode(0);
      expect(binarySearchTree.isBalanced()).toBe(false);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 left child node, the left child node has 2 child nodes itself, the child nodes of the left child node of the root node have no child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      expect(binarySearchTree.isBalanced()).toBe(false);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 right child node, the right child node has one right child node itself, the right child node of the right child node of the root node has no child nodes itself, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(8);
      expect(binarySearchTree.isBalanced()).toBe(false);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 right child node, the right child node has one left child node itself, the left child node of the right child node of the root node has no child nodes itself, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.isBalanced()).toBe(false);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 right child node, the right child node has 2 child nodes itself, the child nodes of the right child node of the root node have no child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.isBalanced()).toBe(false);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.isBalanced()).toBe(true);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the left child node has 1 left child node itself, the left child node of the left child node of the root node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      expect(binarySearchTree.isBalanced()).toBe(true);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the left child node has 1 right child node itself, the right child node of the left child node of the root node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(0);
      expect(binarySearchTree.isBalanced()).toBe(true);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the left child node has 2 child nodes itself, the child nodes of the left child node of the root node have no child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      expect(binarySearchTree.isBalanced()).toBe(true);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the right child node has 1 right child node itself, the right child node of the right child node of the root node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(8);
      expect(binarySearchTree.isBalanced()).toBe(true);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the right child node has 1 left child node itself, the left child node of the right child node of the root node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.isBalanced()).toBe(true);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the right child node has 2 child nodes itself, the child nodes of the right child node of the root node have no child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.isBalanced()).toBe(true);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.isBalanced()).toBe(true);
    });

    test("The isBalanced method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.isBalanced()).toBe(false);
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.rebalance()).toStrictEqual(null);
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has no child nodes, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([2]);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: 2,
          left: null,
          right: null
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 left child node, the left child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: -2,
          left: null,
          right: {
            data: 2,
            left: null,
            right: null
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 right child node, the right child node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: 2,
          left: null,
          right: {
            data: 6,
            left: null,
            right: null
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 left child node, the left child node has one left child node itself, the left child node of the left child node of the root node has no child nodes itself, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      binarySearchTree.insertNode(-4);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: -2,
          left: {
            data: -4,
            left: null,
            right: null
          },
          right: {
            data: 2,
            left: null,
            right: null
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 left child node, the left child node has one right child node itself, the right child node of the left child node of the root node has no child nodes itself, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      binarySearchTree.insertNode(0);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: 0,
          left: {
            data: -2,
            left: null,
            right: null
          },
          right: {
            data: 2,
            left: null,
            right: null
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 left child node, the left child node has 2 child nodes itself, the child nodes of the left child node of the root node have no child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(-2);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: -2,
          left: {
            data: -4,
            left: null,
            right: null
          },
          right: {
            data: 0,
            left: null,
            right: {
              data: 2,
              left: null,
              right: null
            }
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 right child node, the right child node has one right child node itself, the right child node of the right child node of the root node has no child nodes itself, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(8);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: 6,
          left: {
            data: 2,
            left: null,
            right: null
          },
          right: {
            data: 8,
            left: null,
            right: null
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 right child node, the right child node has one left child node itself, the left child node of the right child node of the root node has no child nodes itself, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.rebalance()).toStrictEqual(
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
            right: null
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 1 right child node, the right child node has 2 child nodes itself, the child nodes of the right child node of the root node have no child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([2]);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.rebalance()).toStrictEqual(
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
              data: 8,
              left: null,
              right: null
            }
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the child nodes dont have child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 0", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: 2,
          left: {
            data: -2,
            left: null,
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

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the left child node has 1 left child node itself, the left child node of the left child node of the root node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: -2,
          left: {
            data: -4,
            left: null,
            right: null
          },
          right: {
            data: 2,
            left: null,
            right: {
              data: 6,
              left: null,
              right: null
            }
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the left child node has 1 right child node itself, the right child node of the left child node of the root node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(0);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: 0,
          left: {
            data: -2,
            left: null,
            right: null
          },
          right: {
            data: 2,
            left: null,
            right: {
              data: 6,
              left: null,
              right: null
            }
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the left child node has 2 child nodes itself, the child nodes of the left child node of the root node have no child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: 0,
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
              data: 6,
              left: null,
              right: null
            }
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the right child node has 1 right child node itself, the right child node of the right child node of the root node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(8);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: 2,
          left: {
            data: -2,
            left: null,
            right: null
          },
          right: {
            data: 6,
            left: null,
            right: {
              data: 8,
              left: null,
              right: null
            }
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the right child node has 1 left child node itself, the left child node of the right child node of the root node has no child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: 2,
          left: {
            data: -2,
            left: null,
            right: null
          },
          right: {
            data: 4,
            left: null,
            right: {
              data: 6,
              left: null,
              right: null
            }
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the right child node has 2 child nodes itself, the child nodes of the right child node of the root node have no child nodes themselves, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: 4,
          left: {
            data: -2,
            left: null,
            right: {
              data: 2,
              left: null,
              right: null
            }
          },
          right: {
            data: 6,
            left: null,
            right: {
              data: 8,
              left: null,
              right: null
            }
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, the 2 child nodes both have 2 child nodes themselves, the left child node of the left child node of the root node doesn't have any child nodes itself, the right child node of the left child node of the root node has 1 left child node itself, the left child node of the right child node of the root node has 1 right child node itself, the right child node of the right child node of the root node has 2 child nodes itself, the binary search tree is balanced and the difference between heights of left subtree and right subtree of every node is not more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(0);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(9);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: 3,
          left: {
            data: -1,
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
              data: 0,
              left: null,
              right: {
                data: 2,
                left: null,
                right: null
              }
            }
          },
          right: {
            data: 7,
            left: {
              data: 5,
              left: null,
              right: {
                data: 6,
                left: null,
                right: null
              }
            },
            right: {
              data: 8,
              left: null,
              right: {
                data: 9,
                left: null,
                right: null
              }
            }
          }
        }
      );
    });

    test("The rebalance method of factory function BinarySearchTree works correctly if the method is called without an argument, the binary search tree is not empty, the root node has 2 child nodes, both child nodes have (multiple nested) child nodes themselves, the binary search tree is not balanced and the difference between heights of left subtree and right subtree of at least 1 node is more than 1", () => {
      binarySearchTree.buildTree([-2, 2, 6]);
      binarySearchTree.insertNode(-1);
      binarySearchTree.insertNode(-4);
      binarySearchTree.insertNode(-3);
      binarySearchTree.insertNode(-5);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(5);
      binarySearchTree.insertNode(4);
      expect(binarySearchTree.rebalance()).toStrictEqual(
        {
          data: 2,
          left: {
            data: -3,
            left: {
              data: -5,
              left: null,
              right: {
                data: -4,
                left: null,
                right: null
              }
            },
            right: {
              data: -2,
              left: null,
              right: {
                data: -1,
                left: null,
                right: null
              }
            }
          },
          right: {
            data: 5,
            left: {
              data: 3,
              left: null,
              right: {
                data: 4,
                left: null,
                right: null
              }
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
        }
      );
    });
  });
});
