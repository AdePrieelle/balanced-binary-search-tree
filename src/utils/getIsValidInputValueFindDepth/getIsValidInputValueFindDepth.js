export const getIsValidInputValueFindDepth = (
  input,
  binarySearchTree,
  cloneObject,
  isValidInputFormat
) => {
  if (
       typeof(input) !== "string"
    || typeof(binarySearchTree) !== "object"
    || typeof(cloneObject) !== "function" 
    || typeof(isValidInputFormat) !== "boolean" 
  ) {
    return (false);
  };

  if (!isValidInputFormat) {
    return (false);
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  const nodeInBinarySearchTreeWithInputValue = copyBinarySearchTree.find(+input);
  if (nodeInBinarySearchTreeWithInputValue === null) {
    return (false);
  };
  return (true);
};
