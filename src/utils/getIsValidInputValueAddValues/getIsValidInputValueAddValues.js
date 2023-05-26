export const getIsValidInputValueAddValues = (
  input, 
  binarySearchTree,
  cloneObject,
  getArrayWithStringNumbersConvertedToNumbersFromString, 
  delimiter, 
  getArrayFromString, 
  getArrayWithStringNumbersConvertedToNumbersFromArray,
  getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree
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
  ) {
    return false;
  };

  const newBinarySearchTree = cloneObject(binarySearchTree);
  const arrayWithStringNumbersConvertedToNumbersFromString = getArrayWithStringNumbersConvertedToNumbersFromString(input, delimiter, getArrayFromString, getArrayWithStringNumbersConvertedToNumbersFromArray);
  const isValidInputValueAddValues = getIsArrayOnlyWithValuesThatDontExistInBinarySearchTree(arrayWithStringNumbersConvertedToNumbersFromString, newBinarySearchTree, cloneObject);

  return isValidInputValueAddValues;
};
