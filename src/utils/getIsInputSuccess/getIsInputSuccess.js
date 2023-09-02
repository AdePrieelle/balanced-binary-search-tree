export const getIsInputSuccess = (
  inputButtonClicked,
  isEmptyInput,
  isUpdatedBST,
  isValidInputFormat,
  isValidInputValue,
  isInputWithoutDuplicates,
  isLastUpdatedFieldset
) => {
  if (
       typeof(inputButtonClicked) !== "boolean"
    || typeof(isEmptyInput) !== "boolean"
    || typeof(isUpdatedBST) !== "boolean"
    || typeof(isValidInputFormat) !== "boolean"
    || typeof(isValidInputValue) !== "boolean"
    || typeof(isInputWithoutDuplicates) !== "boolean"
    || typeof(isLastUpdatedFieldset) !== "boolean"
  ) {
    return (false);
  };
  
  if (
       (isEmptyInput && !isLastUpdatedFieldset)
    || ((isEmptyInput && isLastUpdatedFieldset) && (!inputButtonClicked || isUpdatedBST)) 
    || (!isEmptyInput && isValidInputFormat && isValidInputValue && isInputWithoutDuplicates)
  ) {
    return (true);
  } 

  return (false);
};
