export const getBinarySearchTreeWithAddedArrayElements = (array, binarySearchTree, cloneObject) => {
  if (
       !Array.isArray(array)
    || typeof(binarySearchTree) !== "object"
    || typeof(cloneObject) !== "function"
  ) {
    return null;
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  for (const element of array) {
    copyBinarySearchTree.insertNode(element);
  };

  return copyBinarySearchTree;
};
