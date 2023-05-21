export const getArrayWithStringNumbersConvertedToNumbersFromArray = (array) => {
  if (Array.isArray(array) === false) {
    return [];
  };

  const copyArray = [...array];
  const arrayWithStringNumbersConvertedToNumbersFromArray = copyArray.map(element => {
    if (isNaN(element)) {
      return element;
    };
    return +element;
  });
  
  return arrayWithStringNumbersConvertedToNumbersFromArray;
};
