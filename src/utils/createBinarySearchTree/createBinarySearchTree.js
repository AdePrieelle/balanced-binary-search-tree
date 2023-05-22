export const createBinarySearchTree = (
  input, 
  binarySearchTreeState, 
  setBinarySearchTreeState, 
  getArrayWithStringNumbersConvertedToNumbersFromString, 
  delimiter, 
  getArrayFromString, 
  getArrayWithStringNumbersConvertedToNumbersFromArray
) => {
  let newBinarySearchTreeState = {...binarySearchTreeState};
  const arrayWithStringNumbersConvertedToNumbersFromString = getArrayWithStringNumbersConvertedToNumbersFromString(input, delimiter, getArrayFromString, getArrayWithStringNumbersConvertedToNumbersFromArray);
  newBinarySearchTreeState.buildTree(arrayWithStringNumbersConvertedToNumbersFromString);
  setBinarySearchTreeState(newBinarySearchTreeState);
};
