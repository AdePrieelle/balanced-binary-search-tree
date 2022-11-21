import { BinarySearchTreeNode } from '../binarySearchTreeNode/binarySearchTreeNode';
import { removeDuplicatesFromArray } from '../utils/removeDuplicatesFromArray/removeDuplicatesFromArray';
import { sortArrayOfNumbers } from '../utils/sortArrayOfNumbers/sortArrayOfNumbers';

export const BinarySearchTree = (arr) => {
  let root = null;

  const buildTree = (arr) => {
    if (!arr) {
      return null;
    };

    if (arr.length === 0) {
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
    
        if (succParent === rootNode)  {
          succParent.right = succ.right;
        } else {
          succParent.left = succ.right;
        };
    
        rootNode.data = succ.data;
      };
    };

    return rootNode;
  };

  return (Object.freeze({
    buildTree,
    prettyPrint,
    getRootNode,
    insertNode,
    deleteNode
  }));
};

const result = BinarySearchTree([6, 2, 4]);
result.insertNode(3);
const result2 = result.getRootNode();

console.log(result);
console.log(result2);
