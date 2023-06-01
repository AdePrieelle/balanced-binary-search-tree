export const getBinarySearchTreeWithAddedAdditionalInputValues = (
  input, 
  binarySearchTree,
  cloneObject,
  getArrayWithStringNumbersConvertedToNumbersFromString, 
  delimiter, 
  getArrayFromString, 
  getArrayWithStringNumbersConvertedToNumbersFromArray,
  getBinarySearchTreeWithAddedArrayElements
) => {
  if (
       typeof(input) !== "string"
    || typeof(binarySearchTree) !== "object"
    || typeof(cloneObject) !== "function" 
    || typeof(getArrayWithStringNumbersConvertedToNumbersFromString) !== "function" 
    || typeof(delimiter) !== "string" 
    || typeof(getArrayFromString) !== "function" 
    || typeof(getArrayWithStringNumbersConvertedToNumbersFromArray) !== "function" 
    || typeof(getBinarySearchTreeWithAddedArrayElements) !== "function" 
  ) {
    return null;
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  const arrayWithStringNumbersConvertedToNumbersFromString = getArrayWithStringNumbersConvertedToNumbersFromString(input, delimiter, getArrayFromString, getArrayWithStringNumbersConvertedToNumbersFromArray);
  const binarySearchTreeWithAddedArrayElements = getBinarySearchTreeWithAddedArrayElements(arrayWithStringNumbersConvertedToNumbersFromString, copyBinarySearchTree, cloneObject);

  return binarySearchTreeWithAddedArrayElements;
};
