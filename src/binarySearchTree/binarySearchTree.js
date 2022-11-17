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

  const insert = (value, rootNode = root) => {
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
      rootNode.left = insert(value, rootNode.left);
    } else if (value > rootNode.data) {
      rootNode.right = insert(value, rootNode.right);
    };
    
    return rootNode;
  };

  const getRootNode = () => {
    return root;
  };

  return (Object.freeze({
    buildTree,
    prettyPrint,
    insert,
    getRootNode,
  }));
};

const result = BinarySearchTree([6, 2, 4]);
result.insert(3);
const result2 = result.getRootNode();

console.log(result);
console.log(result2);
