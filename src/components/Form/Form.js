import { Fieldset } from '../Fieldset/Fieldset.js';
import { fieldsetData } from '../../data/fieldsetData.js';
import { FieldsetMessageUpdatedSuccessValue } from '../FieldsetMessageUpdatedSuccessValue/FieldsetMessageUpdatedSuccessValue.js';
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
            // getFieldsetMessageUpdatedSuccessValue={(input) => <FieldsetMessageUpdatedSuccessValue icon={value.fieldsetMessageUpdatedSuccessValueWithIcon} message={value.getFieldsetMessageUpdatedSuccessValue(input)} />}
            // getFieldsetMessageUpdatedSuccessValue={(prevInput) => {
            //   if (prevInput === "") {
            //     return (value.fieldsetMessageEmptyInputSuccessValue);
            //   } else {
            //     return (
            //       <FieldsetMessageUpdatedSuccessValue icon={value.fieldsetMessageUpdatedSuccessValueWithIcon} message={value.getFieldsetMessageUpdatedSuccessValue(prevInput)} />
            //     );
            //   }
            // }}
            // getFieldsetMessageUpdatedSuccessValue={(prevInput) => {
            //   if (prevInput === "") {
            //     return (value.fieldsetMessageEmptyInputSuccessValue);
            //   } else {
            //     return (
            //       <FieldsetMessageUpdatedSuccessValue icon={value.fieldsetMessageUpdatedSuccessValueWithIcon} message={value.getFieldsetMessageUpdatedSuccessValue(prevInput)} />
            //     );
            //   }
            // }}
            // getFieldsetMessageUpdatedSuccessValue ={(prevInput => (value.getFieldsetMessageUpdatedSuccessValue(prevInput)))}
            getFieldsetMessageUpdatedSuccessValue ={(input) => (value.getFieldsetMessageUpdatedSuccessValue(input))}
            inputName={value.inputName} 
            inputRegex={new RegExp(value.inputRegex)}
            // implement getIsValidInputValue later
            // getIsValidInputValue={value.getIsValidInputValue} 
            getIsValidInputValue={(input) => value.getIsValidInputValue(input, binarySearchTree)} 
            labelText={value.labelText} 
            // implement onClickHandlerSuccessful later
            // onClickHandlerSuccessful={(input) => value.onClickHandlerSuccessful(input, binarySearchTree, setBinarySearchTree)} 
            onClickHandlerSuccessful={(input, setFieldsetMessage, getFieldsetMessageUpdatedSuccessValue) => value.onClickHandlerSuccessful(input, binarySearchTree, setBinarySearchTree, setFieldsetMessage, getFieldsetMessageUpdatedSuccessValue)} 

            lastUpdatedFieldsetId={lastUpdatedFieldsetId}
            setLastUpdatedFieldsetId={setLastUpdatedFieldsetId}

          />
        </FieldsetWrapper>
      ))}
    </form>
  );
};
