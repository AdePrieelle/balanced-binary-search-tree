export const getHeightOfValue = (
  input,
  binarySearchTree,
  cloneObject
) => {
  const unkownValue = "unkown";

  if (
       typeof(input) !== "string"
    || typeof(binarySearchTree) !== "object"
    || typeof(cloneObject) !== "function" 
  ) {
    return (unkownValue);
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  const nodeInBinarySearchTreeWithInputValue = copyBinarySearchTree.find(+input);
  if (nodeInBinarySearchTreeWithInputValue === null) {
    return (unkownValue);
  };
  const heightOfNodeInBinarySearchTreeWithInputValue = copyBinarySearchTree.height(nodeInBinarySearchTreeWithInputValue);

  return (heightOfNodeInBinarySearchTreeWithInputValue);
};
