export const getIsArrayWithValuesThatDontExistInBinarySearchTree = (array, binarySearchTree, cloneObject) => {
  if ((!Array.isArray(array)) || (typeof(binarySearchTree) !== "object") || (typeof(cloneObject) !== "function")) {
    return false;
  };

  let copyBinarySearchTreeState = cloneObject(binarySearchTree);
  const IsArrayWithValuesThatDontExistInBinarySearchTree = array.every((element) => {
    if (copyBinarySearchTreeState.find(element) === null) {
      return true;
    } 
    return false;
  });

  return IsArrayWithValuesThatDontExistInBinarySearchTree;
};
