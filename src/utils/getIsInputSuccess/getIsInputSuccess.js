export const getIsInputSuccess = (
  inputButtonClicked,
  isEmptyInput,
  isUpdatedBST,
  isValidInputFormat,
  isValidInputValue,
  isInputWithoutDuplicates
) => {
  if (
       typeof(inputButtonClicked) !== "boolean"
    || typeof(isEmptyInput) !== "boolean"
    || typeof(isUpdatedBST) !== "boolean"
    || typeof(isValidInputFormat) !== "boolean"
    || typeof(isValidInputValue) !== "boolean"
    || typeof(isInputWithoutDuplicates) !== "boolean"
  ) {
    return (false);
  };
  
  if (
       ((isEmptyInput) && (!inputButtonClicked || isUpdatedBST)) 
    || (!isEmptyInput && isValidInputFormat && isValidInputValue && isInputWithoutDuplicates)
  ) {
    return (true);
  } 

  return (false);
};
