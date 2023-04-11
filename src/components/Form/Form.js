import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fieldset } from '../Fieldset/Fieldset.js';
import { FieldsetWrapper } from '../FieldsetWrapper/FieldsetWrapper.js';
import { useMemo } from 'react';
import styles from './Form.module.scss';
// also import array of objects for Fieldset items

export const Form = () => {
  return (
    <form className={styles.Form}>
      {/* iterate over array of objects for Fieldset items*/}
      <FieldsetWrapper>
        <Fieldset 
            buttonText={"Create BST"} 
            fieldsetMessageEmptyInputSuccessValue={<>&nbsp;</>} 
            fieldsetMessageEmptyInputErrorValue={"Please enter the initial value(s)"}
            fieldsetMessageUpdatedSuccessValue={
              <>
                <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-message-icon"]} ${styles["ControlsBST__form-message-icon--success"]}`}/>
                <>The BST has been updated</>
              </>
            } 
            fieldsetMessageReadyToUpdateValue={"The BST is ready to be updated"} 
            fieldsetMessageInputFormatErrorValue={"Please enter the initial number(s) in the correct format"} 
            fieldsetMessageInputValueErrorValue={"Please only enter value(s) that exist in the BST"}
            inputName={"Initial-value(s)"} 
            inputRegex={useMemo(() => new RegExp("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"), [])}
            // implement later
            isValidInputValue={(input) => true} 
            labelText={"Add initial value(s) seperated by a comma and a space"} 
            // implement later
            onClickHandlerSuccessful={(input) => true} 
          />
        </FieldsetWrapper>
    </form>
  );
};
