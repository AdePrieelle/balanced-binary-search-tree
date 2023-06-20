import { useEffect } from 'react';
import styles from './FieldsetMessage.module.scss';

export const FieldsetMessage = ({ 
  // fieldsetMessageEmptyInputErrorValue,
  // fieldsetMessageEmptyInputSuccessValue,
  // fieldsetMessageInputFormatErrorValue,
  // fieldsetMessageInputValueErrorValue,
  // fieldsetMessageReadyToUpdateValue,
  // fieldsetMessageUpdatedSuccessValue,
  // input,
  inputSuccess,
  // inputUpdatedBST,
  // isValidInputFormat,
  // isValidInputValue,

  fieldsetMessage,
  // setFieldsetMessage
}) => {
  // let message = null;
  // if (input === "" && !inputUpdatedBST && inputSuccess) {
  //   message = fieldsetMessageEmptyInputSuccessValue;
  // } else if (input === "" && !inputUpdatedBST && !inputSuccess) {
  //   message = fieldsetMessageEmptyInputErrorValue;
  // } else if (input === "" && inputUpdatedBST) {
  //   message = fieldsetMessageUpdatedSuccessValue;
  // } else if ((input !== "") && inputSuccess) {
  //   message = fieldsetMessageReadyToUpdateValue;
  // } else if ((input !== "") && !inputSuccess && !isValidInputFormat) {
  //   message = fieldsetMessageInputFormatErrorValue;
  // } else if ((input !== "") && !inputSuccess && isValidInputFormat && !isValidInputValue) {
  //   message = fieldsetMessageInputValueErrorValue;
  // };

  // console.log("render fieldsetMessage");
  // if (input === "" && !inputUpdatedBST && inputSuccess) {
  //   setFieldsetMessage(fieldsetMessageEmptyInputSuccessValue);
  // } else if (input === "" && !inputUpdatedBST && !inputSuccess) {
  //   setFieldsetMessage(fieldsetMessageEmptyInputErrorValue);
  // } else if (input === "" && inputUpdatedBST) {
  //   setFieldsetMessage(fieldsetMessageUpdatedSuccessValue);
  // } else if ((input !== "") && inputSuccess) {
  //   setFieldsetMessage(fieldsetMessageReadyToUpdateValue);
  // } else if ((input !== "") && !inputSuccess && !isValidInputFormat) {
  //   setFieldsetMessage(fieldsetMessageInputFormatErrorValue);
  // } else if ((input !== "") && !inputSuccess && isValidInputFormat && !isValidInputValue) {
  //   setFieldsetMessage(fieldsetMessageInputValueErrorValue);
  // };

  // useEffect(() => {
  //   if (input === "" && !inputUpdatedBST && inputSuccess) {
  //     setFieldsetMessage(fieldsetMessageEmptyInputSuccessValue);
  //   } else if (input === "" && !inputUpdatedBST && !inputSuccess) {
  //     setFieldsetMessage(fieldsetMessageEmptyInputErrorValue);
  //   } else if (input === "" && inputUpdatedBST) {
  //     setFieldsetMessage(fieldsetMessageUpdatedSuccessValue);
  //   } else if ((input !== "") && inputSuccess) {
  //     setFieldsetMessage(fieldsetMessageReadyToUpdateValue);
  //   } else if ((input !== "") && !inputSuccess && !isValidInputFormat) {
  //     setFieldsetMessage(fieldsetMessageInputFormatErrorValue);
  //   } else if ((input !== "") && !inputSuccess && isValidInputFormat && !isValidInputValue) {
  //     setFieldsetMessage(fieldsetMessageInputValueErrorValue);
  //   };
  // }, []);

  // return (
  //   <div className={`${styles["FieldsetMessage"]} ${inputSuccess ? styles["FieldsetMessage--success"] : styles["FieldsetMessage--error"]}`}>
  //     {message}
  //   </div>
  // );

  return (
    <div className={`${styles["FieldsetMessage"]} ${inputSuccess ? styles["FieldsetMessage--success"] : styles["FieldsetMessage--error"]}`}>
      {fieldsetMessage}
    </div>
  );
};
