import { BinarySearchTreeNode } from '../binarySearchTreeNode/binarySearchTreeNode.js';
import { getAreObjectValuesEqual } from '../getAreObjectValuesEqual/getAreObjectValuesEqual.js';
import { removeDuplicatesFromArray } from '../removeDuplicatesFromArray/removeDuplicatesFromArray.js';
import { sortArrayOfNumbers } from '../sortArrayOfNumbers/sortArrayOfNumbers.js';

export const BinarySearchTree = (arr) => {
  let root = null;

  const buildTree = (arr) => {
    /*
    builds a balanced binary search tree from a given array of data values and 
    returns the root node from the balanced binary search tree. 
    Return null if no array or an empty array is given.
    */
    if ((!Array.isArray(arr)) || (arr.length === 0)) {
      return null;
    };

    const arrayWithoutDuplicates = removeDuplicatesFromArray(arr);
    const sortedArrayWithoutDuplicates = sortArrayOfNumbers(arrayWithoutDuplicates);

    const midIndex = Math.floor((sortedArrayWithoutDuplicates.length - 1) / 2);
    const left = sortedArrayWithoutDuplicates.slice(0, midIndex);
    const right = sortedArrayWithoutDuplicates.slice((midIndex + 1));
    root = BinarySearchTreeNode(sortedArrayWithoutDuplicates[midIndex], buildTree(left), buildTree(right));

    return root;
  };

  root = buildTree(arr);

  const prettyPrint = (node = root, prefix = '', isLeft = true) => {
    /*
    logs a visual representation of a given node in a structured format to the console. 
    If the method is called without a node as an argument, use the root node as the default argument.
    */
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    };
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    };
  };
  
  const getRootNode = () => {
    /*
    returns the root node.
    */
    return root;
  };

  const insertNode = (value, rootNode = root) => {
    /*
    inserts a new node with a given data value into the binary search tree. 
    Returns the root node of the binary search tree. 
    Return the root node of the binary search tree if the method is called without an argument.
    */
    if (value === undefined) {
      return rootNode;
    };

    if (rootNode === null) {
      rootNode = BinarySearchTreeNode(value);
      return rootNode;
    };

    if (rootNode.data === value) {
      return rootNode;
    } else if (value < rootNode.data) {
      rootNode.left = insertNode(value, rootNode.left);
    } else if (value > rootNode.data) {
      rootNode.right = insertNode(value, rootNode.right);
    };
    
    return rootNode;
  };

  const deleteNode = (value, rootNode = root) => {
    /*
    deletes the node with the given data value from the binary search tree. 
    Returns the root node of the binary search tree. 
    Return the root node of the binary search tree if there doesn't exist any node with the given data value in the binary search tree, 
    if the method is called without an argument or if the root node is equal to null.
    */
    if ((value === undefined) || (rootNode === null)) {
      return rootNode;
    };

    if (rootNode.data > value) {
      rootNode.left = deleteNode(value, rootNode.left);
    } else if (rootNode.data < value) {
      rootNode.right = deleteNode(value, rootNode.right);
    } else {
      // the node to be deleted
      if (rootNode.left === null) {
        return rootNode.right;
      } else if (rootNode.right === null) {
        return rootNode.left;
      } else if ((rootNode.left !== null) && (rootNode.right !== null)) {
        let succParent = rootNode;
        let succ = rootNode.right;
    
        while (succ.left !== null) {
          succParent = succ;
          succ = succ.left;
        };
    
        if (succParent === rootNode) {
          succParent.right = succ.right;
        } else {
          succParent.left = succ.right;
        };
    
        rootNode.data = succ.data;
      };
    };

    return rootNode;
  };

  const find = (value, rootNode = root) => {
    /*
    returns the node with the given data value. 
    Return null if there is no data value given, 
    if the root node is equal to null 
    or if there doesn't exist any node with the given data value in the binary search tree.
    */
    if ((value === undefined) || (rootNode === null)) {
      return null;
    };

    if (rootNode.data === value) {
      return rootNode;
    } else if (rootNode.data > value) {
      return find(value, rootNode.left);
    } else if (rootNode.data < value) {
      return find(value, rootNode.right);
    };

    return null;
  };

  const levelOrder = (callback) => {
    /*
    traverses each node of the binary search tree in levelorder. 
    Returns an array in the order of each visited node's data values if no callback argument is given. 
    If a callback is given and the callback is a function, 
    call the callback function with each node as an argument while traversing the binary search tree and return null. 
    Return null if the root node is null and the callback is a function. 
    Return an empty array if the root node is null and a callback is given but the callback isn't a function. 
    If the root node isn't null and a callback is given but the given callback isn't a function, 
    return an array in the order of each visited node's data values.
    */
    const callbackIsAFunction = (typeof callback === "function");

    if (root === null) {
      if (callbackIsAFunction) {
        return null;
      } else {
        return ([]);
      };
    };

    let queue = [root];
    let currentNode = root;
    let levelOrderListDataValues = [];
    while (queue.length) {
      currentNode = queue.shift();
      if (callbackIsAFunction) {
        callback(currentNode);
      } else {
        levelOrderListDataValues.push(currentNode.data);
      };
      if (currentNode.left) {
        queue.push(currentNode.left);
      };
      if (currentNode.right) {
        queue.push(currentNode.right);
      };
    };

    if (callbackIsAFunction) {
      return null;
    } else {
      return levelOrderListDataValues;
    };
  };

  const preOrder = (callback, rootNode = root, preOrderListDataValues = []) => {
    /*
    traverses each node of the binary search tree in preorder. 
    Returns an array in the order of each visited node's data values if no callback argument is given. 
    If a callback is given and the callback is a function, 
    call the callback function with each node as an argument while traversing the binary search tree and return null. 
    Return null if the root node is null and the callback is a function. 
    Return an empty array if the root node is null and a callback is given but the callback isn't a function. 
    If the root node isn't null and a callback is given but the given callback isn't a function, 
    return an array in the order of each visited node's data values.
    */
    const callbackIsAFunction = (typeof callback === "function");

    if (rootNode === null) {
      if (callbackIsAFunction) {
        return null;
      } else {
        return ([]);
      };
    };

    if (callbackIsAFunction) {
      callback(rootNode);
    } else {
      preOrderListDataValues.push(rootNode.data);
    };
    preOrder(callback, rootNode.left, preOrderListDataValues);
    preOrder(callback, rootNode.right, preOrderListDataValues);

    if (callbackIsAFunction) {
      return null;
    } else {
      return preOrderListDataValues;
    };
  };

  const inOrder = (callback, rootNode = root, inOrderListDataValues = []) => {
    /*
    traverses each node of the binary search tree in inorder. 
    Returns an array in the order of each visited node's data values if no callback argument is given. 
    If a callback is given and the callback is a function, 
    call the callback function with each node as an argument while traversing the binary search tree and return null. 
    Return null if the root node is null and the callback is a function. 
    Return an empty array if the root node is null and a callback is given but the callback isn't a function. 
    If the root node isn't null and a callback is given but the given callback isn't a function, 
    return an array in the order of each visited node's data values.
    */
    const callbackIsAFunction = (typeof callback === "function");

    if (rootNode === null) {
      if (callbackIsAFunction) {
        return null;
      } else {
        return ([]);
      };
    };

    inOrder(callback, rootNode.left, inOrderListDataValues);
    if (callbackIsAFunction) {
      callback(rootNode);
    } else {
      inOrderListDataValues.push(rootNode.data);
    };
    inOrder(callback, rootNode.right, inOrderListDataValues);

    if (callbackIsAFunction) {
      return null;
    } else {
      return inOrderListDataValues;
    };
  };

  const postOrder = (callback, rootNode = root, postOrderListDataValues = []) => {
    /*
    traverses each node of the binary search tree in postorder. 
    Returns an array in the order of each visited node's data values if no callback argument is given. 
    If a callback is given and the callback is a function, 
    call the callback function with each node as an argument while traversing the binary search tree and return null. 
    Return null if the root node is null and the callback is a function. 
    Return an empty array if the root node is null and a callback is given but the callback isn't a function. 
    If the root node isn't null and a callback is given but the given callback isn't a function, 
    return an array in the order of each visited node's data values.
    */
    const callbackIsAFunction = (typeof callback === "function");

    if (rootNode === null) {
      if (callbackIsAFunction) {
        return null;
      } else {
        return ([]);
      };
    };

    postOrder(callback, rootNode.left, postOrderListDataValues);
    postOrder(callback, rootNode.right, postOrderListDataValues);
    if (callbackIsAFunction) {
      callback(rootNode);
    } else {
      postOrderListDataValues.push(rootNode.data);
    };

    if (callbackIsAFunction) {
      return null;
    } else {
      return postOrderListDataValues;
    };
  };

  const height = (rootNode = root) => {
    /*
    returns the height of a node. 
    The height of a node is the largest number of edges in a path from a node to the deepest leaf node. 
    Return null if the given node isn't an object. 
    Return 0 if the root node is equal to null. 
    If the method is called without a node as an argument, 
    use the root node as a default argument and return the height of the root node of the binary search tree.
    */
    if (typeof rootNode !== "object") {
      return null;
    };

    if (rootNode === null) {
      return 0;
    };

    const leftHeight = ((rootNode.left !== null) ? (height(rootNode.left) + 1) : 0);
    const rightHeight = ((rootNode.right !== null) ? (height(rootNode.right) + 1) : 0);

    return (Math.max(leftHeight, rightHeight));
  };

  const depth = (rootNode = root) => {
    /*
    returns the depth of a node. 
    The depth of a node is the number of edges in a path from a given node to the root node. 
    Return null if the given node argument isn't an object. 
    Return 0 if the root node is equal to null or if the given node argument is equal to the root node. 
    Return null if the given node from the argument doesn't exist in the binary search tree. 
    If the method is called without a node as an argument, 
    use the root node as a default argument and return the depth of the root node of the binary search tree.
    */
    if (typeof rootNode !== "object") {
      return null;
    };

    if (rootNode === null) {
      return 0;
    };
    
    const nodeWithRootNodeDataValueInBST = find(rootNode.data);
    const isRootNodeInBST = getAreObjectValuesEqual(nodeWithRootNodeDataValueInBST, rootNode);  

    let count = 0;
    let current = root;
    if (!isRootNodeInBST) {
      return null;
    } else {
      while (current.data !== rootNode.data) {
        count += 1;
        if (current.data > rootNode.data) {
          current = current.left;
        } else {
          current = current.right;
        };
      };
      return count;
    };
  };

  const isBalanced = () => {
    /*
    returns true/false based on whether or not the binary search tree is balanced. 
    A binary search tree is balanced if the difference between heights of left subtree and right subtree of every node is not more than 1. 
    Return true if the root node is equal to null.
    */
    if (root === null) {
      return true;
    };

    let queue = [root];
    let current;
    let leftHeight;
    let rightHeight;
    let diffHeightLeftRightSubtree;
    while (queue.length > 0) {
      current = queue.shift();

      if (current.left === null) {
        leftHeight = height(current.left);
      } else {
        // add 1 because current.left is already 1 level under the current node
        leftHeight = (height(current.left) + 1);
      };
      if (current.right === null) {
        rightHeight = height(current.right);
      } else {
        // add 1 because current.right is already 1 level under the current node
        rightHeight = (height(current.right) + 1);
      };

      diffHeightLeftRightSubtree = Math.abs(leftHeight - rightHeight);
      if (diffHeightLeftRightSubtree > 1) {
        return false;
      };

      if (current.left !== null) {
        queue.push(current.left);
      };
      if (current.right !== null) {
        queue.push(current.right);
      };
    };

    return true;
  };

  const rebalance = () => {
    /*
    rebalances the tree and returns the root node. 
    Calls the inOrder method without and argument to get an array of all the node's data values in the binary search tree. 
    Calls the buildTree method with the array of all the node's data values to build a new balanced binary search tree 
    and updates the root node with the newly constructed balanced binary search tree. 
    Returns null if the root node is equal to null.
    */
    if (root === null) {
      return null;
    };

    const arrayOfNodeDataValues = inOrder();
    const rebalancedRootTree = buildTree(arrayOfNodeDataValues);
    root = rebalancedRootTree;
    
    return root;
  };

  return (Object.freeze({
    buildTree,
    prettyPrint,
    getRootNode,
    insertNode,
    deleteNode,
    find,
    levelOrder,
    preOrder,
    inOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    rebalance
  }));
};
