import styles from './FormMessage.module.scss';

export const FormMessage = ({ 
  formMessageEmptyErrorValue,
  formMessageInitialValue,
  formMessageInputFormatErrorValue,
  formMessageInputValueErrorValue,
  formMessageReadyToUpdateValue,
  formMessageUpdatedValue,
  input,
  inputSuccess,
  inputUpdatedBST,
  isValidInputFormat,
  isValidInputValue
}) => {
  let message = null;
  if (input === "" && !inputUpdatedBST && inputSuccess) {
    message = formMessageInitialValue;
  } else if (input === "" && !inputUpdatedBST && !inputSuccess) {
    message = formMessageEmptyErrorValue;
  } else if (input === "" && inputUpdatedBST) {
    message = formMessageUpdatedValue;
  } else if ((input !== "") && inputSuccess) {
    message = formMessageReadyToUpdateValue;
  } else if ((input !== "") && !inputSuccess && !isValidInputFormat) {
    message = formMessageInputFormatErrorValue;
  } else if ((input !== "") && !inputSuccess && isValidInputFormat && !isValidInputValue) {
    message = formMessageInputValueErrorValue;
  };

  return (
    <div className={`${styles["FormMessage"]} ${((input === "") && inputSuccess) ? styles["FormMessage--success"] : inputSuccess ? styles["FormMessage--success"] : styles["FormMessage--error"]}`}>
      {message}
    </div>
  );
};





// export const FormMessage = ({ input, inputSuccess, inputUpdatedBST, isValidInputValue, isValidInputFormat, formMessageInitialValue, formMessageEmptyErrorValue, formMessageUpdatedValue, formMessageReadyToUpdateValue, formMessageInputFormatErrorValue, formMessageInputValueErrorValue}) => {
//   let formMessage = null;
//   if (input === "" && !inputUpdatedBST && inputSuccess) {
//     formMessage = <>&nbsp;</>;
//   };
//   if (input === "" && !inputUpdatedBST && !inputSuccess) {
//     formMessage = "Please enter the initial value(s)";
//   };
//   if (input === "" && inputUpdatedBST) {
//     formMessage = 
//       <>
//         <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-message-icon"]} ${styles["ControlsBST__form-message-icon--success"]}`}/>
//         <>The BST has been updated</>
//       </>;
//   };
//   if ((input !== "") && inputSuccess) {
//     formMessage = "The BST is ready to be updated";
//   }
//   if ((input !== "") && !inputSuccess && !isValidInputFormat) {
//     formMessage = "Please enter the initial number(s) in the correct format";
//   };
//   if ((input !== "") && !inputSuccess && isValidInputFormat && !isValidInputValue) {
//     formMessage = "Please only enter value(s) that exist in the BST";
//   };

//   return (
//     formMessage
//   );
// };
