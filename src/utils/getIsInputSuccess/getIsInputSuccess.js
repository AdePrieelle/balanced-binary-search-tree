export const getIsInputSuccess = (
  inputButtonClicked,
  isEmptyInput,
  isUpdatedBST,
  isValidInputFormat,
  isValidInputValue
) => {
  if (
       typeof(inputButtonClicked) !== "boolean"
    || typeof(isEmptyInput) !== "boolean"
    || typeof(isUpdatedBST) !== "boolean"
    || typeof(isValidInputFormat) !== "boolean"
    || typeof(isValidInputValue) !== "boolean"
  ) {
    return (false);
  };
  
  if (
       ((isEmptyInput) && (!inputButtonClicked || isUpdatedBST)) 
    || (!isEmptyInput && isValidInputFormat && isValidInputValue)
  ) {
    return (true);
  } 

  return (false);
};
