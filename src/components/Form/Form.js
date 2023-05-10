import { Fieldset } from '../Fieldset/Fieldset.js';
import { fieldsetData } from '../../data/fieldsetData.js';
import { FieldsetMessageUpdatedSuccessMessage } from '../FieldsetMessageUpdatedSuccessMessage/FieldsetMessageUpdatedSuccessMessage.js';
import { FieldsetWrapper } from '../FieldsetWrapper/FieldsetWrapper.js';
import styles from './Form.module.scss';

export const Form = () => {
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
            fieldsetMessageUpdatedSuccessValue={(input) => <FieldsetMessageUpdatedSuccessMessage icon={value.fieldsetMessageUpdatedSuccessValueWithIcon} message={value.fieldsetMessageUpdatedSuccessValueMessage(input)} />}
            inputName={value.inputName} 
            inputRegex={new RegExp(value.inputRegex)}
            // implement isValidInputValue later
            isValidInputValue={value.isValidInputValue} 
            labelText={value.labelText} 
            // implement onClickHandlerSuccessful later
            onClickHandlerSuccessful={value.onClickHandlerSuccessful} 
          />
        </FieldsetWrapper>
      ))}
    </form>
  );
};
