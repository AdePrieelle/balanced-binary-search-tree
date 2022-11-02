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

  return (Object.freeze({
    buildTree,
  }));
};

const result = BinarySearchTree();

console.log(result);
