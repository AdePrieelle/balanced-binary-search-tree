import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './FormMessage.module.scss';

export const FormMessage = ({ input, inputSuccess, inputUpdatedBST, isValidInputValue, inputButtonClicked, isValidInputFormat, inputRegex}) => {
  let formMessage = null;
  if (input === "" && !inputUpdatedBST && inputSuccess) {
    formMessage = <>&nbsp;</>;
  };
  if (input === "" && !inputUpdatedBST && !inputSuccess) {
    formMessage = "Please enter the initial value(s)";
  };
  if (input === "" && inputUpdatedBST) {
    formMessage = 
      <>
        <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-message-icon"]} ${styles["ControlsBST__form-message-icon--success"]}`}/>
        <>The BST has been updated</>
      </>;
  };
  if ((input !== "") && inputSuccess) {
    formMessage = "The BST is ready to be updated";
  }
  if ((input !== "") && !inputSuccess && !isValidInputFormat) {
    formMessage = "Please enter the initial number(s) in the correct format";
  };
  if ((input !== "") && !inputSuccess && isValidInputFormat && !isValidInputValue) {
    formMessage = "Please only enter value(s) that exist in the BST";
  };

  return (
    formMessage
  );
};
