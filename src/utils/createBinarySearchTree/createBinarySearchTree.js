export const createBinarySearchTree = (
  input, 
  binarySearchTreeState, 
  setBinarySearchTreeState, 
  cloneObject,
  getArrayWithStringNumbersConvertedToNumbersFromString, 
  delimiter, 
  getArrayFromString, 
  getArrayWithStringNumbersConvertedToNumbersFromArray
) => {
  let newBinarySearchTreeState = cloneObject(binarySearchTreeState);
  const arrayWithStringNumbersConvertedToNumbersFromString = getArrayWithStringNumbersConvertedToNumbersFromString(input, delimiter, getArrayFromString, getArrayWithStringNumbersConvertedToNumbersFromArray);
  newBinarySearchTreeState.buildTree(arrayWithStringNumbersConvertedToNumbersFromString);
  setBinarySearchTreeState(newBinarySearchTreeState);
};
