export const getIsValidInputValueAddAdditionalValues = (
  input, 
  binarySearchTree,
  cloneObject,
  getArrayWithStringNumbersConvertedToNumbersFromString, 
  delimiter, 
  getArrayFromString, 
  getArrayWithStringNumbersConvertedToNumbersFromArray,
  getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree,
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
      || typeof(getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree) !== "function" 
      || typeof(isValidInputFormat) !== "boolean" 
  ) {
    return (false);
  };

  if (!isValidInputFormat) {
    return (false);
  };

  const copyBinarySearchTree = cloneObject(binarySearchTree);
  const arrayWithStringNumbersConvertedToNumbersFromString = getArrayWithStringNumbersConvertedToNumbersFromString(input, delimiter, getArrayFromString, getArrayWithStringNumbersConvertedToNumbersFromArray);
  const isArrayOnlyWithValuesThatDontExistInBinarySearchTree = getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(arrayWithStringNumbersConvertedToNumbersFromString, copyBinarySearchTree, cloneObject);

  return isArrayOnlyWithValuesThatDontExistInBinarySearchTree;
};
