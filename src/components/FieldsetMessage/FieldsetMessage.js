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

  fieldsetMessageText,
  // setFieldsetMessageText
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
  //   setFieldsetMessageText(fieldsetMessageEmptyInputSuccessValue);
  // } else if (input === "" && !inputUpdatedBST && !inputSuccess) {
  //   setFieldsetMessageText(fieldsetMessageEmptyInputErrorValue);
  // } else if (input === "" && inputUpdatedBST) {
  //   setFieldsetMessageText(fieldsetMessageUpdatedSuccessValue);
  // } else if ((input !== "") && inputSuccess) {
  //   setFieldsetMessageText(fieldsetMessageReadyToUpdateValue);
  // } else if ((input !== "") && !inputSuccess && !isValidInputFormat) {
  //   setFieldsetMessageText(fieldsetMessageInputFormatErrorValue);
  // } else if ((input !== "") && !inputSuccess && isValidInputFormat && !isValidInputValue) {
  //   setFieldsetMessageText(fieldsetMessageInputValueErrorValue);
  // };

  // useEffect(() => {
  //   if (input === "" && !inputUpdatedBST && inputSuccess) {
  //     setFieldsetMessageText(fieldsetMessageEmptyInputSuccessValue);
  //   } else if (input === "" && !inputUpdatedBST && !inputSuccess) {
  //     setFieldsetMessageText(fieldsetMessageEmptyInputErrorValue);
  //   } else if (input === "" && inputUpdatedBST) {
  //     setFieldsetMessageText(fieldsetMessageUpdatedSuccessValue);
  //   } else if ((input !== "") && inputSuccess) {
  //     setFieldsetMessageText(fieldsetMessageReadyToUpdateValue);
  //   } else if ((input !== "") && !inputSuccess && !isValidInputFormat) {
  //     setFieldsetMessageText(fieldsetMessageInputFormatErrorValue);
  //   } else if ((input !== "") && !inputSuccess && isValidInputFormat && !isValidInputValue) {
  //     setFieldsetMessageText(fieldsetMessageInputValueErrorValue);
  //   };
  // }, []);

  // return (
  //   <div className={`${styles["FieldsetMessage"]} ${inputSuccess ? styles["FieldsetMessage--success"] : styles["FieldsetMessage--error"]}`}>
  //     {message}
  //   </div>
  // );

  return (
    <div className={`${styles["FieldsetMessage"]} ${inputSuccess ? styles["FieldsetMessage--success"] : styles["FieldsetMessage--error"]}`}>
      {fieldsetMessageText}
    </div>
  );
};
