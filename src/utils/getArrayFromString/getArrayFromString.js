export const getArrayFromString = (string) => {
  if (string === undefined) {
    return [];
  };
  const copyString = string;
  const arrayFromString = copyString.split(", ");
  const arrayFromStringWithNumbers = arrayFromString.map(element => {
    if (isNaN(element)) {
      return element;
    };
    return +element;
  });

  return arrayFromStringWithNumbers;
};
