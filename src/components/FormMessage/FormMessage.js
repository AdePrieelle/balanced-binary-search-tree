import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './FormMessage.module.scss';

export const FormMessage = ({ input, inputSuccess, inputUpdatedBST, isValidInputValue, isValidInputFormat, formMessageTextInitialValue, formMessageTextEmptyErrorValue, formMessageTextUpdatedValue, formMessageTextReadyToUpdateValue, formMessageTextInputFormatErrorValue, formMessageTextInputValueErrorValue}) => {
  let formMessageText = null;
  if (input === "" && !inputUpdatedBST && inputSuccess) {
    formMessageText = formMessageTextInitialValue;
  };
  if (input === "" && !inputUpdatedBST && !inputSuccess) {
    formMessageText = formMessageTextEmptyErrorValue;
  };
  if (input === "" && inputUpdatedBST) {
    formMessageText = formMessageTextUpdatedValue;
  };
  if ((input !== "") && inputSuccess) {
    formMessageText = formMessageTextReadyToUpdateValue;
  }
  if ((input !== "") && !inputSuccess && !isValidInputFormat) {
    formMessageText = formMessageTextInputFormatErrorValue;
  };
  if ((input !== "") && !inputSuccess && isValidInputFormat && !isValidInputValue) {
    formMessageText = formMessageTextInputValueErrorValue;
  };

  return (
    <div className={`${styles["FormMessage"]} ${styles["FormMessage-1"]} ${((input === "") && inputSuccess) ? styles["FormMessage--success"] : inputSuccess ? styles["FormMessage--success"] : styles["FormMessage--error"]}`}>
      {formMessageText}
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
