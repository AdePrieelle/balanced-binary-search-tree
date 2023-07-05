export const getIsValidInputValueRemoveValues = (
  input, 
  binarySearchTree,
  cloneObject,
  getArrayWithStringNumbersConvertedToNumbersFromString, 
  delimiter, 
  getArrayFromString, 
  getArrayWithStringNumbersConvertedToNumbersFromArray,
  getIsArrayOnlyWithValuesThatExistInBinarySearchTree,
  isValidInputFormat
) => {
  if (
         typeof(input) !== "string" 
      || typeof(binarySearchTree) !== "object" 
      || typeof(cloneObject) !== "function" 
      || typeof(getArrayWithStringNumbersConvertedToNumbersFromString) !== "function" 
      || typeof(delimiter) !== "string" 
      || typeof(getArrayFromString) !== "function" 
      || typeof(getArrayWithStringNumbersConvertedToNumbersFromArray) !== "function" 
      || typeof(getIsArrayOnlyWithValuesThatExistInBinarySearchTree) !== "function" 
      || typeof(isValidInputFormat) !== "boolean" 
  ) {
    return false;
  };

  if (!isValidInputFormat) {
    return (false);
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  const arrayWithStringNumbersConvertedToNumbersFromString = getArrayWithStringNumbersConvertedToNumbersFromString(input, delimiter, getArrayFromString, getArrayWithStringNumbersConvertedToNumbersFromArray);
  const isArrayOnlyWithValuesThatExistInBinarySearchTree = getIsArrayOnlyWithValuesThatExistInBinarySearchTree(arrayWithStringNumbersConvertedToNumbersFromString, copyBinarySearchTree, cloneObject);

  return isArrayOnlyWithValuesThatExistInBinarySearchTree;
};
