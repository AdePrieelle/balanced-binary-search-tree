export const removeDuplicatesFromArray = (arr) => {
  let removedDuplicatesFromArray = null;

  if (!arr) {
    return removedDuplicatesFromArray;
  };

  removedDuplicatesFromArray = [...new Set(arr)];
  
  return removedDuplicatesFromArray;
};
