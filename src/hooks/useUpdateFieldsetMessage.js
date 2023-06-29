import { useEffect } from "react";

export const useUpdateFieldsetMessage = (
  fieldsetMessageEmptyInputErrorValue,
  fieldsetMessageEmptyInputSuccessValue,
  fieldsetMessageInputFormatErrorValue,
  fieldsetMessageInputValueErrorValue,
  fieldsetMessageReadyToUpdateValue,
  fieldsetMessageUpdatedSuccessValue,
  getFieldsetMessage,
  isEmptyInput,
  isInputSuccess,
  isLastUpdatedFieldset,
  isUpdatedBST,
  isValidInputFormat,
  isValidInputValue,
  setFieldsetMessage
) => {
  useEffect(() => {
    const fieldsetMessage = getFieldsetMessage(
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
    );
    setFieldsetMessage(fieldsetMessage);
  }, [fieldsetMessageEmptyInputErrorValue, fieldsetMessageEmptyInputSuccessValue, fieldsetMessageInputFormatErrorValue, fieldsetMessageInputValueErrorValue, fieldsetMessageReadyToUpdateValue, fieldsetMessageUpdatedSuccessValue, getFieldsetMessage, isEmptyInput, isInputSuccess, isLastUpdatedFieldset, isUpdatedBST, isValidInputFormat, isValidInputValue, setFieldsetMessage]);
};
