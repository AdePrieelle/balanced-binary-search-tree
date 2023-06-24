export const getFieldsetMessage = (
  fieldsetMessageEmptyInputErrorValue,
  fieldsetMessageEmptyInputSuccessValue,
  fieldsetMessageInputFormatErrorValue,
  fieldsetMessageInputValueErrorValue,
  fieldsetMessageReadyToUpdateValue,

  fieldsetMessageUpdatedSuccessValue,

  getIsValidInputFormat,
  getIsValidInputValue,
  input,

  inputId,

  inputRegex,
  inputSuccess,
  inputUpdatedBST,

  lastUpdatedFieldsetId

) => {
  if (
    typeof(fieldsetMessageEmptyInputErrorValue) !== "string"
 || typeof(fieldsetMessageEmptyInputSuccessValue) !== "object"
 || typeof(fieldsetMessageInputFormatErrorValue) !== "string"
 || typeof(fieldsetMessageInputValueErrorValue) !== "string"
 || typeof(fieldsetMessageReadyToUpdateValue) !== "string"

 // maybe of type object because it's a react fragment?
 || typeof(fieldsetMessageUpdatedSuccessValue) !== "string"

 || typeof(getIsValidInputFormat) !== "function"
 || typeof(getIsValidInputValue) !== "function"
 || typeof(input) !== "string"

 || typeof(inputId) !== "string"

 || typeof(inputRegex) !== "string"
 || typeof(inputSuccess) !== "boolean"
 || typeof(inputUpdatedBST) !== "boolean"

 || typeof(lastUpdatedFieldsetId) !== "string"

) {
 return ((<>&nbsp;</>));
};

  if ((input === "" && !inputUpdatedBST && inputSuccess) || (input === "" && inputSuccess && (lastUpdatedFieldsetId !== inputId))) {
    return (fieldsetMessageEmptyInputSuccessValue);
  } else if (input === "" && !inputUpdatedBST && !inputSuccess) {
    return (fieldsetMessageEmptyInputErrorValue);
  } else if (input === "" && inputUpdatedBST) {
    // return(getFieldsetMessageUpdatedSuccessValue(prevInputState));
    // update it in the onClickHandlerSuccesful
    // return (null);
    return (fieldsetMessageUpdatedSuccessValue);
  } else if ((input !== "") && inputSuccess) {
    return (fieldsetMessageReadyToUpdateValue);
  } else if ((input !== "") && !inputSuccess && !getIsValidInputFormat(inputRegex, input)) {
    return (fieldsetMessageInputFormatErrorValue);
  } else if ((input !== "") && !inputSuccess && getIsValidInputFormat(inputRegex, input) && !getIsValidInputValue(input)) {
    return (fieldsetMessageInputValueErrorValue);
  };
  return (fieldsetMessageEmptyInputSuccessValue);
};
