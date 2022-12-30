import { BinarySearchTree } from "../binarySearchTree/binarySearchTree.js";
import { createArrayOfRandomNumbers } from "../utils/createArrayOfRandomNumbers/createArrayOfRandomNumbers.js";

const logBinarySearchTreeInfo = (binarySearchTree, title) => {
  console.group(title);
  console.log("Visual representation of the binary search tree:\n");
  binarySearchTree.prettyPrint(binarySearchTree.getRootNode());
  console.log("");
  console.log(`Is the binary search tree balanced?\n ${binarySearchTree.isBalanced() ? "Yes" : "No"}`);
  console.log(`The levelOrder traversal of the binary search tree is:\n ${binarySearchTree.levelOrder()}`);
  console.log(`The preOrder traversal of the binary search tree is:\n ${binarySearchTree.preOrder()}`);
  console.log(`The inOrder traversal of the binary search tree is:\n ${binarySearchTree.inOrder()}`);
  console.log(`The postOrder traversal of the binary search tree is:\n ${binarySearchTree.postOrder()}\n`);
  console.groupEnd();
};

const driverScript = () => {
  const arrayOfRandomNumbers = createArrayOfRandomNumbers(10, 0, 10);
  console.log(`Data values used to construct the binary search tree:\n ${arrayOfRandomNumbers}\n`);

  const binarySearchTree = BinarySearchTree(arrayOfRandomNumbers);
  logBinarySearchTreeInfo(binarySearchTree, "Constructed binary search tree:");

  binarySearchTree.insertNode(200);
  binarySearchTree.insertNode(300);
  binarySearchTree.insertNode(400);
  logBinarySearchTreeInfo(binarySearchTree, "Binary search tree after the insertion of node data values 200, 300 and 400:");

  binarySearchTree.rebalance();
  logBinarySearchTreeInfo(binarySearchTree, "Binary search tree after rebalancing the binary search tree:");
};

driverScript();
