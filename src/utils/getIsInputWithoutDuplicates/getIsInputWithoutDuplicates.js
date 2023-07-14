export const getIsInputWithoutDuplicates = (
  input,
  delimiter,
  getArrayFromString, 
  getIsArrayWithoutDuplicates
) => {
  if (
       typeof(input) !== "string"
    || typeof(delimiter) !== "string"
    || typeof(getArrayFromString) !== "function"
    || typeof(getIsArrayWithoutDuplicates) !== "function"
  ) {
    return (false);
  };

  const copyString = input;
  const arrayFromString = getArrayFromString(copyString, delimiter);
  const isInputWithoutDuplicates = getIsArrayWithoutDuplicates(arrayFromString);

  return (isInputWithoutDuplicates);
};
