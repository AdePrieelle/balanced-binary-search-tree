export const getFindNodeInBinarySearchTreeWithInputValue = (
  input, 
  binarySearchTree, 
  cloneObject
) => {
  if (
       typeof(input) !== "string"
    || typeof(binarySearchTree) !== "object"
    || typeof(cloneObject) !== "function" 
  ) {
    return (null);
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  const nodeInBinarySearchTreeWithInputValue = copyBinarySearchTree.find(+input);

  return (nodeInBinarySearchTreeWithInputValue);
};
