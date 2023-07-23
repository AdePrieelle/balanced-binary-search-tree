export const getIsBSTBalanced = (
  binarySearchTree,
  cloneObject
) => {
  if (
       typeof(binarySearchTree) !== "object"
    || typeof(cloneObject) !== "function"
  ) {
    return (false);
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  const isBSTBalanced = copyBinarySearchTree.isBalanced();

  return (isBSTBalanced);
};
