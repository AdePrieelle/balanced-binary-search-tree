export const getFieldsetMessage = (
  fieldsetMessageEmptyInputErrorValue,
  fieldsetMessageEmptyInputSuccessValue,
  fieldsetMessageInputFormatErrorValue,
  fieldsetMessageInputValueErrorValue,
  fieldsetMessageReadyToUpdateValue,
  getIsValidInputFormat,
  getIsValidInputValue,
  input,
  inputRegex,
  inputSuccess,
  inputUpdatedBST
) => {
  if (
    typeof(fieldsetMessageEmptyInputErrorValue) !== "string"
 || typeof(fieldsetMessageEmptyInputSuccessValue) !== "object"
 || typeof(fieldsetMessageInputFormatErrorValue) !== "string"
 || typeof(fieldsetMessageInputValueErrorValue) !== "string"
 || typeof(fieldsetMessageReadyToUpdateValue) !== "string"
 || typeof(getIsValidInputFormat) !== "function"
 || typeof(getIsValidInputValue) !== "function"
 || typeof(input) !== "string"
 || typeof(inputRegex) !== "string"
 || typeof(inputSuccess) !== "boolean"
 || typeof(inputUpdatedBST) !== "boolean"
) {
 return ((<>&nbsp;</>));
};

  if (input === "" && !inputUpdatedBST && inputSuccess) {
    return(fieldsetMessageEmptyInputSuccessValue);
  } else if (input === "" && !inputUpdatedBST && !inputSuccess) {
    return(fieldsetMessageEmptyInputErrorValue);
  } else if (input === "" && inputUpdatedBST) {
    // return(getFieldsetMessageUpdatedSuccessValue(prevInputState));
    // update it in the onClickHandlerSuccesful
    return null;
  } else if ((input !== "") && inputSuccess) {
    return(fieldsetMessageReadyToUpdateValue);
  } else if ((input !== "") && !inputSuccess && !getIsValidInputFormat(inputRegex, input)) {
    return(fieldsetMessageInputFormatErrorValue);
  } else if ((input !== "") && !inputSuccess && getIsValidInputFormat(inputRegex, input) && !getIsValidInputValue(input)) {
    return(fieldsetMessageInputValueErrorValue);
  };
  return fieldsetMessageEmptyInputSuccessValue;
};
