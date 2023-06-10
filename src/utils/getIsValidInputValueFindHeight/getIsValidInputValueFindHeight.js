export const getIsValidInputValueFindHeight = (
  input,
  binarySearchTree,
  cloneObject
) => {
  if (
       typeof(input) !== "string"
    || typeof(binarySearchTree) !== "object"
    || typeof(cloneObject) !== "function" 
  ) {
    return false;
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  const nodeInBinarySearchTreeWithInputValue = copyBinarySearchTree.find(+input);
  if (nodeInBinarySearchTreeWithInputValue === null) {
    return false;
  };
  return true;
};
