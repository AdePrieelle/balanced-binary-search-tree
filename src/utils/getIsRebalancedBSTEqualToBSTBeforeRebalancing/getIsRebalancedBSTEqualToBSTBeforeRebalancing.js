export const getIsRebalancedBSTEqualToBSTBeforeRebalancing = (
  binarySearchTree,
  BinarySearchTree,
  getAreObjectValuesEqual,
  getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues
) => {
  if (
       typeof(binarySearchTree) !== "object"
    || typeof(BinarySearchTree) !== "function"
    || typeof(getAreObjectValuesEqual) !== "function"
    || typeof(getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues) !== "function"
  ) {
    return (false);
  };
  
  const newCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues = getNewCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues(binarySearchTree, BinarySearchTree);
  const isRebalancedBSTEqualToBSTBeforeRebalancing = getAreObjectValuesEqual(binarySearchTree.getRootNode(), newCreatedBalancedBinarySearchTreeFromBinarySearchTreeDataValues.getRootNode());

  return (isRebalancedBSTEqualToBSTBeforeRebalancing);
};
