export const removeDuplicatesFromArray = (arr) => {
  let arrayWithoutDuplicates = [];

  if (!arr) {
    return arrayWithoutDuplicates;
  };

  arrayWithoutDuplicates = [...new Set(arr)];
  
  return arrayWithoutDuplicates;
};
