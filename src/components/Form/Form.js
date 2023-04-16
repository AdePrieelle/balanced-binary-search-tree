import { useMemo } from 'react';
import { Fieldset } from '../Fieldset/Fieldset.js';
import { FieldsetMessageUpdatedSuccessMessage } from '../FieldsetMessageUpdatedSuccessMessage/FieldsetMessageUpdatedSuccessMessage.js';
import { FieldsetWrapper } from '../FieldsetWrapper/FieldsetWrapper.js';
import styles from './Form.module.scss';
// also import array of objects for Fieldset items

export const Form = () => {
  return (
    <form className={styles.Form}>
      {/* iterate over array of objects for Fieldset items*/}
      <FieldsetWrapper>
        <Fieldset 
          buttonText={"Create BST"} 
          // use id of map function as fieldsetId
          fieldsetMessageEmptyInputErrorValue={"Please enter the initial value(s)"}
          fieldsetMessageEmptyInputSuccessValue={<>&nbsp;</>} 
          fieldsetMessageInputFormatErrorValue={"Please enter the initial number(s) in the correct format"} 
          fieldsetMessageInputValueErrorValue={"Please only enter value(s) that exist in the BST"}
          fieldsetMessageReadyToUpdateValue={"The BST is ready to be updated"} 
          // store the message in the array of objects
          // store fieldsetMessageUpdatedSuccessValueWithIcon in the array of objects and use it as a prop here for FieldsetMessageUpdatedSuccessMessage
          fieldsetMessageUpdatedSuccessValue={<FieldsetMessageUpdatedSuccessMessage icon={true} message={"The BST has been updated"} />}
          inputName={"Initial-value(s)"} 
          inputRegex={useMemo(() => new RegExp("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"), [])}
          // implement later
          isValidInputValue={(input) => true} 
          labelText={"Add initial value(s) seperated by a comma and a space"} 
          // implement later
          onClickHandlerSuccessful={(input) => true} 
        />
      </FieldsetWrapper>

      <FieldsetWrapper>
        <Fieldset 
          buttonText={"Add value(s)"} 
          // use id of map function as fieldsetId
          fieldsetMessageEmptyInputErrorValue={"Please enter the initial value(s)"}
          fieldsetMessageEmptyInputSuccessValue={<>&nbsp;</>} 
          fieldsetMessageInputFormatErrorValue={"Please enter the initial number(s) in the correct format"} 
          fieldsetMessageInputValueErrorValue={"Please only enter value(s) that exist in the BST"}
          fieldsetMessageReadyToUpdateValue={"The BST is ready to be updated"} 
          // store the message in the array of objects
          // store fieldsetMessageUpdatedSuccessValueWithIcon in the array of objects and use it as a prop here for FieldsetMessageUpdatedSuccessMessage
          fieldsetMessageUpdatedSuccessValue={<FieldsetMessageUpdatedSuccessMessage icon={true} message={"The BST has been updated"} />}
          inputName={"Initial-value(s)"} 
          inputRegex={useMemo(() => new RegExp("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"), [])}
          // implement later
          isValidInputValue={(input) => true} 
          labelText={"Add additional value(s) seperated by a comma and a space"} 
          // implement later
          onClickHandlerSuccessful={(input) => true} 
        />
      </FieldsetWrapper>

      <FieldsetWrapper>
        <Fieldset 
          buttonText={"Remove value(s)"} 
          // use id of map function as fieldsetId
          fieldsetMessageEmptyInputErrorValue={"Please enter the initial value(s)"}
          fieldsetMessageEmptyInputSuccessValue={<>&nbsp;</>} 
          fieldsetMessageInputFormatErrorValue={"Please enter the initial number(s) in the correct format"} 
          fieldsetMessageInputValueErrorValue={"Please only enter value(s) that exist in the BST"}
          fieldsetMessageReadyToUpdateValue={"The BST is ready to be updated"} 
          // store the message in the array of objects
          // store fieldsetMessageUpdatedSuccessValueWithIcon in the array of objects and use it as a prop here for FieldsetMessageUpdatedSuccessMessage
          fieldsetMessageUpdatedSuccessValue={<FieldsetMessageUpdatedSuccessMessage icon={true} message={"The BST has been updated"} />}
          inputName={"Initial-value(s)"} 
          inputRegex={useMemo(() => new RegExp("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"), [])}
          // implement later
          isValidInputValue={(input) => true} 
          labelText={"Remove value(s) seperated by a comma and a space"} 
          // implement later
          onClickHandlerSuccessful={(input) => true} 
        />
      </FieldsetWrapper>

      <FieldsetWrapper>
        <Fieldset 
          buttonText={"Find height"} 
          // use id of map function as fieldsetId
          fieldsetMessageEmptyInputErrorValue={"Please enter the initial value(s)"}
          fieldsetMessageEmptyInputSuccessValue={<>&nbsp;</>} 
          fieldsetMessageInputFormatErrorValue={"Please enter the initial number(s) in the correct format"} 
          fieldsetMessageInputValueErrorValue={"Please only enter value(s) that exist in the BST"}
          fieldsetMessageReadyToUpdateValue={"The BST is ready to be updated"} 
          // store the message in the array of objects
          // store fieldsetMessageUpdatedSuccessValueWithIcon in the array of objects and use it as a prop here for FieldsetMessageUpdatedSuccessMessage
          fieldsetMessageUpdatedSuccessValue={<FieldsetMessageUpdatedSuccessMessage icon={true} message={"The BST has been updated"} />}
          inputName={"Initial-value(s)"} 
          inputRegex={useMemo(() => new RegExp("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"), [])}
          // implement later
          isValidInputValue={(input) => true} 
          labelText={"Find the height of a value in the BST"} 
          // implement later
          onClickHandlerSuccessful={(input) => true} 
        />
      </FieldsetWrapper>

      <FieldsetWrapper>
        <Fieldset 
          buttonText={"Find depth"} 
          // use id of map function as fieldsetId
          fieldsetMessageEmptyInputErrorValue={"Please enter the initial value(s)"}
          fieldsetMessageEmptyInputSuccessValue={<>&nbsp;</>} 
          fieldsetMessageInputFormatErrorValue={"Please enter the initial number(s) in the correct format"} 
          fieldsetMessageInputValueErrorValue={"Please only enter value(s) that exist in the BST"}
          fieldsetMessageReadyToUpdateValue={"The BST is ready to be updated"} 
          // store the message in the array of objects
          // store fieldsetMessageUpdatedSuccessValueWithIcon in the array of objects and use it as a prop here for FieldsetMessageUpdatedSuccessMessage
          fieldsetMessageUpdatedSuccessValue={<FieldsetMessageUpdatedSuccessMessage icon={true} message={"The BST has been updated"} />}
          inputName={"Initial-value(s)"} 
          inputRegex={useMemo(() => new RegExp("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"), [])}
          // implement later
          isValidInputValue={(input) => true} 
          labelText={"Find the depth of a value in the BST"} 
          // implement later
          onClickHandlerSuccessful={(input) => true} 
        />
      </FieldsetWrapper>
    </form>
  );
};
