export const getHeightOfValue = (
  input,
  binarySearchTree,
  cloneObject,
  getFindNodeInBinarySearchTreeWithInputValue,
  unknownValue
) => {
  if (
       typeof(input) !== "string"
    || typeof(binarySearchTree) !== "object"
    || typeof(cloneObject) !== "function" 
    || typeof(getFindNodeInBinarySearchTreeWithInputValue) !== "function" 
    || typeof(unknownValue) !== "string" 
  ) {
    return ("unknown");
  };

  const nodeInBinarySearchTreeWithInputValue = getFindNodeInBinarySearchTreeWithInputValue(input, binarySearchTree, cloneObject);
  if (nodeInBinarySearchTreeWithInputValue === null) {
    return (unknownValue);
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  const heightOfNodeInBinarySearchTreeWithInputValue = copyBinarySearchTree.height(nodeInBinarySearchTreeWithInputValue);

  return (heightOfNodeInBinarySearchTreeWithInputValue);
};
