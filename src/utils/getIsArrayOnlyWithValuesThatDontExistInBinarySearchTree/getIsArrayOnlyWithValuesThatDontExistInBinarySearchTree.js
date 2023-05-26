export const getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree = (array, binarySearchTree, cloneObject) => {
  if ((!Array.isArray(array)) || (typeof(binarySearchTree) !== "object") || (typeof(cloneObject) !== "function")) {
    return false;
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  const isArrayOnlyWithValuesThatDontExistInBinarySearchTree = array.every((element) => {
    if (copyBinarySearchTree.find(element) === null) {
      return true;
    };
    return false;
  });

  return isArrayOnlyWithValuesThatDontExistInBinarySearchTree;
};
