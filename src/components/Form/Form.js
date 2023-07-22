// import { useState } from 'react';
import { Fieldset } from '../Fieldset/Fieldset.js';
import { fieldsetData } from '../../data/fieldsetData.js';
import { FieldsetWrapper } from '../FieldsetWrapper/FieldsetWrapper.js';
import styles from './Form.module.scss';

export const Form = ({ 
  binarySearchTree, 
  lastUpdatedFieldsetId,
  setBinarySearchTree,
  setLastUpdatedFieldsetId
}) => {
  // const [lastUpdatedFieldsetId, setLastUpdatedFieldsetId] = useState("");

  return (
    <form className={styles.Form}>
      { Object.entries(fieldsetData().fieldsets.entities).map(([key, value]) => (
        <FieldsetWrapper key={value.id}>
          <Fieldset 
            buttonText={value.buttonText}
            fieldsetMessageDuplicateInputValuesErrorValue={value.fieldsetMessageDuplicateInputValuesErrorValue}
            fieldsetMessageEmptyInputErrorValue={value.fieldsetMessageEmptyInputErrorValue}
            fieldsetMessageEmptyInputSuccessValue={value.fieldsetMessageEmptyInputSuccessValue} 
            fieldsetMessageInputFormatErrorValue={value.fieldsetMessageInputFormatErrorValue} 
            fieldsetMessageInputValueErrorValue={value.fieldsetMessageInputValueErrorValue}
            fieldsetMessageReadyToUpdateValue={value.fieldsetMessageReadyToUpdateValue} 
            getFieldsetMessageUpdatedSuccessValue ={(inputOnClickHandlerSuccessful) => (value.getFieldsetMessageUpdatedSuccessValue(inputOnClickHandlerSuccessful, binarySearchTree))}
            getIsValidInputValue={(input, isValidInputFormat) => value.getIsValidInputValue(input, binarySearchTree, isValidInputFormat)} 
            inputName={value.inputName} 
            labelText={value.labelText} 
            lastUpdatedFieldsetId={lastUpdatedFieldsetId}
            onClickHandlerSuccessful={(input) => value.onClickHandlerSuccessful(input, binarySearchTree, setBinarySearchTree)} 
            regex={new RegExp(value.regexPattern)}
            setLastUpdatedFieldsetId={setLastUpdatedFieldsetId}
          />
        </FieldsetWrapper>
      ))}
    </form>
  );
};
