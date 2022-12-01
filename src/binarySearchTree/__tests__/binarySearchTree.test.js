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

    test("The insertNode method of factory function BinarySearchTree is a function", () => {
      expect(typeof binarySearchTree.insertNode).toBe("function");
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

    test("The return type of the levelOrder method of factory function BinarySearchTree is an object if the method is called with an argument that is a function", () => {
      const mockCallback = jest.fn(() => 1);
      expect(typeof binarySearchTree.levelOrder(mockCallback)).toBe("object");
    });

    test("The return type of the levelOrder method of factory function BinarySearchTree is an array if the method is called with an argument that isn't a function", () => {
      expect(Array.isArray(binarySearchTree.levelOrder([1]))).toBe(true);
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

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called without an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.deleteNode()).toStrictEqual(null);
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
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with an argument and the binary search tree is empty", () => {
      expect(binarySearchTree.deleteNode(1)).toStrictEqual(null);
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with a negative argument and the binary search tree is empty", () => {
      expect(binarySearchTree.deleteNode(-1)).toStrictEqual(null);
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
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 2 child nodes, the 2 child nodes of the node with the value of the argument don't have child nodes themselves and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 4, 6]);
      binarySearchTree.insertNode(1);
      binarySearchTree.insertNode(3);
      expect(binarySearchTree.deleteNode(2)).toStrictEqual(
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
    });

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with an argument which exists in the binary search tree, the node with the value of the argument has 2 child nodes, the right child node has multiple nested left child nodes itself and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([4, 10, 16]);
      binarySearchTree.insertNode(3);
      binarySearchTree.insertNode(8);
      binarySearchTree.insertNode(9);
      binarySearchTree.insertNode(7);
      binarySearchTree.insertNode(6);
      binarySearchTree.insertNode(5);
      expect(binarySearchTree.deleteNode(4)).toStrictEqual(
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

    test("The deleteNode method of factory function BinarySearchTree works correctly if the method is called with an argument that doesn't exist in the binary search tree and the binary search tree is not empty", () => {
      binarySearchTree.buildTree([2, 1, 3]);
      expect(binarySearchTree.deleteNode(4)).toStrictEqual(
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
  });
});
