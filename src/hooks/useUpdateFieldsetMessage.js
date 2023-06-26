import { useEffect } from "react";

export const useUpdateFieldsetMessage = (
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
  setFieldsetMessage
) => {
  useEffect(() => {
    if ((isEmptyInput && !isUpdatedBST && isInputSuccess) || (isEmptyInput && isInputSuccess && !isLastUpdatedFieldset)) {
      setFieldsetMessage(fieldsetMessageEmptyInputSuccessValue);
    } else if (isEmptyInput && !isUpdatedBST && !isInputSuccess) {
      setFieldsetMessage(fieldsetMessageEmptyInputErrorValue);
    } else if (isEmptyInput && isUpdatedBST) {
      setFieldsetMessage(fieldsetMessageUpdatedSuccessValue);
    } else if (!isEmptyInput && isInputSuccess) {
      setFieldsetMessage(fieldsetMessageReadyToUpdateValue);
    } else if (!isEmptyInput && !isInputSuccess && !isValidInputFormat) {
      setFieldsetMessage(fieldsetMessageInputFormatErrorValue);
    } else if (!isEmptyInput && !isInputSuccess && isValidInputFormat && !isValidInputValue) {
      setFieldsetMessage(fieldsetMessageInputValueErrorValue);
    };
  }, [fieldsetMessageEmptyInputErrorValue, fieldsetMessageEmptyInputSuccessValue, fieldsetMessageInputFormatErrorValue, fieldsetMessageInputValueErrorValue, fieldsetMessageReadyToUpdateValue, fieldsetMessageUpdatedSuccessValue, isEmptyInput, isInputSuccess, isLastUpdatedFieldset, isUpdatedBST, isValidInputFormat, isValidInputValue, setFieldsetMessage]);
};
