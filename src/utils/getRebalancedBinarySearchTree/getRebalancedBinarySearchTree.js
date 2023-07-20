export const getRebalancedBinarySearchTree = (binarySearchTree, cloneObject) => {
  if (
       typeof(binarySearchTree) !== "object"
    || typeof(cloneObject) !== "function"
  ) {
    return (null);
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  copyBinarySearchTree.rebalance();

  return (copyBinarySearchTree);
};
