export const createBinarySearchTree = (
  input, 
  binarySearchTree, 
  setBinarySearchTree, 
  cloneObject,
  getArrayWithStringNumbersConvertedToNumbersFromString, 
  delimiter, 
  getArrayFromString, 
  getArrayWithStringNumbersConvertedToNumbersFromArray
) => {
  let newBinarySearchTree = cloneObject(binarySearchTree);
  const arrayWithStringNumbersConvertedToNumbersFromString = getArrayWithStringNumbersConvertedToNumbersFromString(input, delimiter, getArrayFromString, getArrayWithStringNumbersConvertedToNumbersFromArray);
  newBinarySearchTree.buildTree(arrayWithStringNumbersConvertedToNumbersFromString);
  setBinarySearchTree(newBinarySearchTree);
};
