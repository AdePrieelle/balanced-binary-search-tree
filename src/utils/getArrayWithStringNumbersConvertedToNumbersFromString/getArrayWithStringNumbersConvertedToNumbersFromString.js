export const getArrayWithStringNumbersConvertedToNumbersFromString = (string, delimiter, getArrayFromString, getArrayWithStringNumbersConvertedToNumbersFromArray) => {
  if ((typeof(string) !== "string") || ((typeof(getArrayFromString) !== "function") || (typeof(getArrayWithStringNumbersConvertedToNumbersFromArray) !== "function"))) {
    return [];
  };

  const arrayFromString = getArrayFromString(string, delimiter);
  const arrayWithStringNumbersConvertedToNumbersFromArray = getArrayWithStringNumbersConvertedToNumbersFromArray(arrayFromString);

  return arrayWithStringNumbersConvertedToNumbersFromArray;
};
