export const getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues = (binarySearchTree, BinarySearchTree) => {
  if (
       typeof(binarySearchTree) !== "object"
    || typeof(BinarySearchTree) !== "function"
  ) {
    return (null);
  };

  const binarySearchTreeDataValuesArray = binarySearchTree.inOrder();
  const newCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues = BinarySearchTree(binarySearchTreeDataValuesArray);

  return (newCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues);
};
