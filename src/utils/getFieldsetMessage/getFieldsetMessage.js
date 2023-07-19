export const getFieldsetMessage = (
  fieldsetMessageEmptyInputErrorValue,
  fieldsetMessageEmptyInputSuccessValue,
  fieldsetMessageInputFormatErrorValue,
  fieldsetMessageInputValueErrorValue,
  fieldsetMessageReadyToUpdateValue,
  fieldsetMessageUpdatedSuccessValue,
  isEmptyInput,
  isInputSuccess,
  isLastUpdatedFieldset,
  isUpdatedBST,
  isValidInputFormat,
  isValidInputValue,
  fieldsetMessageDuplicateInputValuesErrorValue,
  isInputWithoutDuplicates
) => {
  if (
       typeof(fieldsetMessageEmptyInputErrorValue) !== "string"
    || typeof(fieldsetMessageEmptyInputSuccessValue) !== "object"
    || typeof(fieldsetMessageInputFormatErrorValue) !== "string"
    || typeof(fieldsetMessageInputValueErrorValue) !== "string"
    || typeof(fieldsetMessageReadyToUpdateValue) !== "string"
    || typeof(fieldsetMessageUpdatedSuccessValue) !== "object"
    || typeof(isEmptyInput) !== "boolean"
    || typeof(isInputSuccess) !== "boolean"
    || typeof(isLastUpdatedFieldset) !== "boolean"
    || typeof(isUpdatedBST) !== "boolean"
    || typeof(isValidInputFormat) !== "boolean"
    || typeof(isValidInputValue) !== "boolean"
    || typeof(fieldsetMessageDuplicateInputValuesErrorValue) !== "string"
    || typeof(isInputWithoutDuplicates) !== "boolean"
  ) {
    return ((<>&nbsp;</>));
  };

  if ((isEmptyInput && !isUpdatedBST && isInputSuccess) || (isEmptyInput && isInputSuccess && !isLastUpdatedFieldset)) {
    return (fieldsetMessageEmptyInputSuccessValue);
  } else if (isEmptyInput && !isUpdatedBST && !isInputSuccess) {
    return (fieldsetMessageEmptyInputErrorValue);
  } else if (isEmptyInput && isUpdatedBST) {
    return (fieldsetMessageUpdatedSuccessValue);
  } else if (!isEmptyInput && isInputSuccess) {
    return (fieldsetMessageReadyToUpdateValue);
  } else if (!isEmptyInput && !isInputSuccess && !isValidInputFormat) {
    return (fieldsetMessageInputFormatErrorValue);
  } else if (!isEmptyInput && !isInputSuccess && isValidInputFormat && !isInputWithoutDuplicates) {
    return (fieldsetMessageDuplicateInputValuesErrorValue);
  } else if (!isEmptyInput && !isInputSuccess && isValidInputFormat && isInputWithoutDuplicates && !isValidInputValue) {
    return (fieldsetMessageInputValueErrorValue);
  };
  return (fieldsetMessageEmptyInputSuccessValue);
};
