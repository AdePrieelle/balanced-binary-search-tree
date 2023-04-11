import styles from './FieldsetMessage.module.scss';

export const FieldsetMessage = ({ 
  fieldsetMessageEmptyInputErrorValue,
  fieldsetMessageEmptyInputSuccessValue,
  fieldsetMessageInputFormatErrorValue,
  fieldsetMessageInputValueErrorValue,
  fieldsetMessageReadyToUpdateValue,
  fieldsetMessageUpdatedSuccessValue,
  input,
  inputSuccess,
  inputUpdatedBST,
  isValidInputFormat,
  isValidInputValue
}) => {
  let message = null;
  if (input === "" && !inputUpdatedBST && inputSuccess) {
    message = fieldsetMessageEmptyInputSuccessValue;
  } else if (input === "" && !inputUpdatedBST && !inputSuccess) {
    message = fieldsetMessageEmptyInputErrorValue;
  } else if (input === "" && inputUpdatedBST) {
    message = fieldsetMessageUpdatedSuccessValue;
  } else if ((input !== "") && inputSuccess) {
    message = fieldsetMessageReadyToUpdateValue;
  } else if ((input !== "") && !inputSuccess && !isValidInputFormat) {
    message = fieldsetMessageInputFormatErrorValue;
  } else if ((input !== "") && !inputSuccess && isValidInputFormat && !isValidInputValue) {
    message = fieldsetMessageInputValueErrorValue;
  };

  return (
    <div className={`${styles["FieldsetMessage"]} ${inputSuccess ? styles["FieldsetMessage--success"] : styles["FieldsetMessage--error"]}`}>
      {message}
    </div>
  );
};
