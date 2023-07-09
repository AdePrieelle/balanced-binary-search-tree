export const getIsValidInputValueFindDepth = (
  input,
  binarySearchTree,
  cloneObject,
  isValidInputFormat,
  getFindNodeInBinarySearchTreeWithInputValue
) => {
  if (
       typeof(input) !== "string"
    || typeof(binarySearchTree) !== "object"
    || typeof(cloneObject) !== "function" 
    || typeof(isValidInputFormat) !== "boolean" 
    || typeof(getFindNodeInBinarySearchTreeWithInputValue) !== "function" 
  ) {
    return (false);
  };

  if (!isValidInputFormat) {
    return (false);
  };

  const nodeInBinarySearchTreeWithInputValue = getFindNodeInBinarySearchTreeWithInputValue(input, binarySearchTree, cloneObject)
  if (nodeInBinarySearchTreeWithInputValue === null) {
    return (false);
  };
  return (true);
};
