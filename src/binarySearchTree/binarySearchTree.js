import { BinarySearchTreeNode } from '../binarySearchTreeNode/binarySearchTreeNode';
import { getAreObjectValuesEqual } from '../utils/getAreObjectValuesEqual/getAreObjectValuesEqual';
import { removeDuplicatesFromArray } from '../utils/removeDuplicatesFromArray/removeDuplicatesFromArray';
import { sortArrayOfNumbers } from '../utils/sortArrayOfNumbers/sortArrayOfNumbers';

export const BinarySearchTree = (arr) => {
  let root = null;

  const buildTree = (arr) => {
    if ((arr === undefined) || (arr.length === 0)) {
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
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    };
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    };
  };
  
  const getRootNode = () => {
    return root;
  };

  const insertNode = (value, rootNode = root) => {
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
    depth
  }));
};
