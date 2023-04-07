import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormFieldset } from '../FormFieldset/FormFieldset.js';
import { FormFieldsetWrapper } from '../FormFieldsetWrapper/FormFieldsetWrapper.js';
import { useMemo } from 'react';
import styles from './Form.module.scss';
// also import array of objects for FormFieldset items

export const Form = () => {
  return (
    <form className={styles.Form}>
      {/* iterate over array of objects for FormFieldset items*/}
      <FormFieldsetWrapper>
        <FormFieldset 
            inputRegex={useMemo(() => new RegExp("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"), [])}
            // implement later
            isValidInputValue={(input) => true} 
            labelText={"Add initial value(s) seperated by a comma and a space"} 
            inputName={"Initial-value(s)"} 
            buttonText={"Create BST"} 
            // implement later
            onClickHandlerSuccessful={(input) => true} 
            formMessageInitialValue={<>&nbsp;</>} 
            formMessageEmptyErrorValue={"Please enter the initial value(s)"}
            formMessageUpdatedValue={
              <>
                <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-message-icon"]} ${styles["ControlsBST__form-message-icon--success"]}`}/>
                <>The BST has been updated</>
              </>
            } 
            formMessageReadyToUpdateValue={"The BST is ready to be updated"} 
            formMessageInputFormatErrorValue={"Please enter the initial number(s) in the correct format"} 
            formMessageInputValueErrorValue={"Please only enter value(s) that exist in the BST"}
          />
        </FormFieldsetWrapper>
    </form>
  );
};
