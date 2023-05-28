export const getBinarySearchTreeWithAddedInitialInputValues = (
  input, 
  binarySearchTree, 
  cloneObject,
  getArrayWithStringNumbersConvertedToNumbersFromString, 
  delimiter, 
  getArrayFromString, 
  getArrayWithStringNumbersConvertedToNumbersFromArray
) => {
  if (
       typeof(input) !== "string" 
    || typeof(binarySearchTree) !== "object" 
    || typeof(cloneObject) !== "function" 
    || typeof(getArrayWithStringNumbersConvertedToNumbersFromString) !== "function" 
    || typeof(delimiter) !== "string" 
    || typeof(getArrayFromString) !== "function" 
    || typeof(getArrayWithStringNumbersConvertedToNumbersFromArray) !== "function" 
  ) {
    return null;
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  const arrayWithStringNumbersConvertedToNumbersFromString = getArrayWithStringNumbersConvertedToNumbersFromString(input, delimiter, getArrayFromString, getArrayWithStringNumbersConvertedToNumbersFromArray);
  copyBinarySearchTree.buildTree(arrayWithStringNumbersConvertedToNumbersFromString);

  return copyBinarySearchTree;
};
