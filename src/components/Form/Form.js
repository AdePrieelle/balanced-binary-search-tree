import { Fieldset } from '../Fieldset/Fieldset.js';
import { fieldsetData } from '../../data/fieldsetData.js';
import { FieldsetMessageUpdatedSuccessMessage } from '../FieldsetMessageUpdatedSuccessMessage/FieldsetMessageUpdatedSuccessMessage.js';
import { FieldsetWrapper } from '../FieldsetWrapper/FieldsetWrapper.js';
import styles from './Form.module.scss';
import { useState } from 'react';

export const Form = ({ binarySearchTree, setBinarySearchTree }) => {
  const [lastUpdatedFieldsetId, setLastUpdatedFieldsetId] = useState(null);

  return (
    <form className={styles.Form}>
      { Object.entries(fieldsetData().fieldsets.entities).map(([key, value]) => (
        <FieldsetWrapper key={value.id}>
          <Fieldset 
            buttonText={value.buttonText}
            fieldsetMessageEmptyInputErrorValue={value.fieldsetMessageEmptyInputErrorValue}
            fieldsetMessageEmptyInputSuccessValue={value.fieldsetMessageEmptyInputSuccessValue} 
            fieldsetMessageInputFormatErrorValue={value.fieldsetMessageInputFormatErrorValue} 
            fieldsetMessageInputValueErrorValue={value.fieldsetMessageInputValueErrorValue}
            fieldsetMessageReadyToUpdateValue={value.fieldsetMessageReadyToUpdateValue} 
            // fieldsetMessageUpdatedSuccessValue={(input) => <FieldsetMessageUpdatedSuccessMessage icon={value.fieldsetMessageUpdatedSuccessValueWithIcon} message={value.fieldsetMessageUpdatedSuccessValueMessage(input)} />}
            // fieldsetMessageUpdatedSuccessValue={(prevInput) => {
            //   if (prevInput === "") {
            //     return (value.fieldsetMessageEmptyInputSuccessValue);
            //   } else {
            //     return (
            //       <FieldsetMessageUpdatedSuccessMessage icon={value.fieldsetMessageUpdatedSuccessValueWithIcon} message={value.fieldsetMessageUpdatedSuccessValueMessage(prevInput)} />
            //     );
            //   }
            // }}
            // fieldsetMessageUpdatedSuccessValue={(prevInput) => {
            //   if (prevInput === "") {
            //     return (value.fieldsetMessageEmptyInputSuccessValue);
            //   } else {
            //     return (
            //       <FieldsetMessageUpdatedSuccessMessage icon={value.fieldsetMessageUpdatedSuccessValueWithIcon} message={value.fieldsetMessageUpdatedSuccessValueMessage(prevInput)} />
            //     );
            //   }
            // }}
            // fieldsetMessageUpdatedSuccessValue ={(prevInput => (value.fieldsetMessageUpdatedSuccessValueMessage(prevInput)))}
            fieldsetMessageUpdatedSuccessValue ={(input) => (value.fieldsetMessageUpdatedSuccessValueMessage(input))}
            inputName={value.inputName} 
            inputRegex={new RegExp(value.inputRegex)}
            // implement isValidInputValue later
            // isValidInputValue={value.isValidInputValue} 
            isValidInputValue={(input) => value.isValidInputValue(input, binarySearchTree)} 
            labelText={value.labelText} 
            // implement onClickHandlerSuccessful later
            // onClickHandlerSuccessful={(input) => value.onClickHandlerSuccessful(input, binarySearchTree, setBinarySearchTree)} 
            onClickHandlerSuccessful={(input, setFieldsetMessageText, fieldsetMessageUpdatedSuccessValueMessage) => value.onClickHandlerSuccessful(input, binarySearchTree, setBinarySearchTree, setFieldsetMessageText, fieldsetMessageUpdatedSuccessValueMessage)} 

            lastUpdatedFieldsetId={lastUpdatedFieldsetId}
            setLastUpdatedFieldsetId={setLastUpdatedFieldsetId}

          />
        </FieldsetWrapper>
      ))}
    </form>
  );
};
