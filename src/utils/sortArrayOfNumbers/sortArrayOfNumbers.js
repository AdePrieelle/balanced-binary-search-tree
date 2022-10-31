export const sortArrayOfNumbers = (arr) => {
  let sortedArrayOfNumbers = [];
  
  if (!arr) {
    return sortedArrayOfNumbers;
  };

  sortedArrayOfNumbers = arr.sort((a, b) => (a - b));

  return sortedArrayOfNumbers;
};
