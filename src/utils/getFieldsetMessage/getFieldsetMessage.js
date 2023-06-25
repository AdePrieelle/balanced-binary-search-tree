export const getFieldsetMessage = (
  fieldsetMessageEmptyInputErrorValue,
  fieldsetMessageEmptyInputSuccessValue,
  fieldsetMessageInputFormatErrorValue,
  fieldsetMessageInputValueErrorValue,
  fieldsetMessageReadyToUpdateValue,
  fieldsetMessageUpdatedSuccessValue,
  inputSuccess,
  inputUpdatedBST,
  isEmptyInput,
  isLastUpdatedFieldset,
  isValidInputFormat,
  isValidInputValue
) => {
  if (
       typeof(fieldsetMessageEmptyInputErrorValue) !== "string"
    || typeof(fieldsetMessageEmptyInputSuccessValue) !== "object"
    || typeof(fieldsetMessageInputFormatErrorValue) !== "string"
    || typeof(fieldsetMessageInputValueErrorValue) !== "string"
    || typeof(fieldsetMessageReadyToUpdateValue) !== "string"
    || typeof(fieldsetMessageUpdatedSuccessValue) !== "object"
    || typeof(inputSuccess) !== "boolean"
    || typeof(inputUpdatedBST) !== "boolean"
    || typeof(isEmptyInput) !== "boolean"
    || typeof(isLastUpdatedFieldset) !== "boolean"
    || typeof(isValidInputFormat) !== "boolean"
    || typeof(isValidInputValue) !== "boolean"
  ) {
    return ((<>&nbsp;</>));
  };

  if ((isEmptyInput && !inputUpdatedBST && inputSuccess) || (isEmptyInput && inputSuccess && !isLastUpdatedFieldset)) {
    return (fieldsetMessageEmptyInputSuccessValue);
  } else if (isEmptyInput && !inputUpdatedBST && !inputSuccess) {
    return (fieldsetMessageEmptyInputErrorValue);
  } else if (isEmptyInput && inputUpdatedBST) {
    return (fieldsetMessageUpdatedSuccessValue);
  } else if (!isEmptyInput && inputSuccess) {
    return (fieldsetMessageReadyToUpdateValue);
  } else if (!isEmptyInput && !inputSuccess && !isValidInputFormat) {
    return (fieldsetMessageInputFormatErrorValue);
  } else if (!isEmptyInput && !inputSuccess && isValidInputFormat && !isValidInputValue) {
    return (fieldsetMessageInputValueErrorValue);
  };
  return (fieldsetMessageEmptyInputSuccessValue);
};
