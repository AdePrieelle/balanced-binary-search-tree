export const getBinarySearchTreeWithRemovedInputValues = (
  input, 
  binarySearchTree,
  cloneObject,
  getArrayWithStringNumbersConvertedToNumbersFromString, 
  delimiter, 
  getArrayFromString, 
  getArrayWithStringNumbersConvertedToNumbersFromArray,
  getBinarySearchTreeWithRemovedArrayElements
) => {
  if (
       typeof(input) !== "string"
    || typeof(binarySearchTree) !== "object"
    || typeof(cloneObject) !== "function" 
    || typeof(getArrayWithStringNumbersConvertedToNumbersFromString) !== "function" 
    || typeof(delimiter) !== "string" 
    || typeof(getArrayFromString) !== "function" 
    || typeof(getArrayWithStringNumbersConvertedToNumbersFromArray) !== "function" 
    || typeof(getBinarySearchTreeWithRemovedArrayElements) !== "function" 
  ) {
    return null;
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  const arrayWithStringNumbersConvertedToNumbersFromString = getArrayWithStringNumbersConvertedToNumbersFromString(input, delimiter, getArrayFromString, getArrayWithStringNumbersConvertedToNumbersFromArray);
  const binarySearchTreeWithRemovedArrayElements = getBinarySearchTreeWithRemovedArrayElements(arrayWithStringNumbersConvertedToNumbersFromString, copyBinarySearchTree, cloneObject);

  return binarySearchTreeWithRemovedArrayElements;
};
