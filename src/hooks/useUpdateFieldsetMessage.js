import { useCallback, useMemo } from "react";
import { useEffect } from "react";

export const useUpdateFieldsetMessage = (
  fieldsetMessageEmptyInputErrorValue,
  fieldsetMessageEmptyInputSuccessValue,
  fieldsetMessageInputFormatErrorValue,
  fieldsetMessageInputValueErrorValue,
  fieldsetMessageReadyToUpdateValue,

  getFieldsetMessageUpdatedSuccessValue,

  getIsValidInputFormat,
  getIsValidInputValue,
  input,

  inputId,
  inputOnClickHandlerSuccessful,

  inputRegex,
  inputSuccess,
  inputUpdatedBST,

  lastUpdatedFieldsetId,

  setFieldsetMessage
) => {

  const fieldsetMessageUpdatedSuccessValue = useMemo(() => getFieldsetMessageUpdatedSuccessValue(inputOnClickHandlerSuccessful), [getFieldsetMessageUpdatedSuccessValue, inputOnClickHandlerSuccessful]);
  console.log(fieldsetMessageUpdatedSuccessValue);

  useEffect(() => {
    // if (input === "" && inputSuccess && lastUpdatedFieldsetId !== inputId) {
    //   setFieldsetMessage(fieldsetMessageEmptyInputSuccessValue);
    // };


    // if (input === "" && !inputUpdatedBST && inputSuccess) {
    if ((input === "" && !inputUpdatedBST && inputSuccess) || (input === "" && inputSuccess && lastUpdatedFieldsetId !== inputId)) {
      // console.log("1");
      setFieldsetMessage(fieldsetMessageEmptyInputSuccessValue);
    } else if (input === "" && !inputUpdatedBST && !inputSuccess) {
      // console.log("2");

      setFieldsetMessage(fieldsetMessageEmptyInputErrorValue);
    } else if (input === "" && inputUpdatedBST) {
      // setFieldsetMessage(getFieldsetMessageUpdatedSuccessValue(prevInputState));
      // console.log("3");
      // below keeps on rerendering
      // setFieldsetMessage(getFieldsetMessageUpdatedSuccessValue(inputOnClickHandlerSuccessful));
      // const fieldsetMessageUpdatedSuccessValue = getFieldsetMessageUpdatedSuccessValue(inputOnClickHandlerSuccessful);

      setFieldsetMessage(fieldsetMessageUpdatedSuccessValue);
    } else if ((input !== "") && inputSuccess) {
      // console.log("4");

      setFieldsetMessage(fieldsetMessageReadyToUpdateValue);
    } else if ((input !== "") && !inputSuccess && !getIsValidInputFormat(inputRegex, input)) {
      // console.log("5");

      setFieldsetMessage(fieldsetMessageInputFormatErrorValue);
    } else if ((input !== "") && !inputSuccess && getIsValidInputFormat(inputRegex, input) && !getIsValidInputValue(input)) {
      // console.log("6");

      setFieldsetMessage(fieldsetMessageInputValueErrorValue);
    };
  }, [fieldsetMessageEmptyInputErrorValue, fieldsetMessageEmptyInputSuccessValue, fieldsetMessageInputFormatErrorValue, fieldsetMessageInputValueErrorValue, fieldsetMessageReadyToUpdateValue, fieldsetMessageUpdatedSuccessValue, getIsValidInputFormat, getIsValidInputValue, input, inputId, inputRegex, inputSuccess, inputUpdatedBST, lastUpdatedFieldsetId, setFieldsetMessage]);

};
