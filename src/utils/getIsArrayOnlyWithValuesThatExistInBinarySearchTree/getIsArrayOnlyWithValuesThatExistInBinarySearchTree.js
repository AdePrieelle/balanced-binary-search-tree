export const getIsArrayOnlyWithValuesThatExistInBinarySearchTree = (array, binarySearchTree, cloneObject) => {
  if ((!Array.isArray(array)) || (typeof(binarySearchTree) !== "object") || (typeof(cloneObject) !== "function")) {
    return false;
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  const isArrayOnlyWithValuesThatExistInBinarySearchTree = array.every((element) => {
    if (copyBinarySearchTree.find(element) !== null) {
      return true;
    };
    return false;
  });

  return isArrayOnlyWithValuesThatExistInBinarySearchTree;
};
