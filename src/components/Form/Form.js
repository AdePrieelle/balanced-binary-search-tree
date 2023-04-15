import { useMediaQuery } from 'react-responsive';
import { useMemo } from 'react';
import { Fieldset } from '../Fieldset/Fieldset.js';
import { FieldsetMessageUpdatedSuccessMessage } from '../FieldsetMessageUpdatedSuccessMessage/FieldsetMessageUpdatedSuccessMessage.js';
import { FieldsetWrapper } from '../FieldsetWrapper/FieldsetWrapper.js';
import styles from './Form.module.scss';
import variables from '../../styles/partials/_variables.scss';
// also import array of objects for Fieldset items

export const Form = () => {
  const labelWrapperGridAreaName = "LabelWrapper";
  const inputInputIconContainerWrapperGridAreaName = "InputInputIconContainerWrapper";
  const fieldsetMessageWrapperGridAreaName = "FieldsetMessageWrapper";
  const buttonWrapperGridAreaName = "ButtonWrapper";

  const isSmallScreenOrBigger = useMediaQuery({query: `(min-width: ${variables.mediaQuerySmallScreen})`});
  console.log(isSmallScreenOrBigger);

  const gridTemplateAreasSmallerThanSmallScreen = 
    `
      "${labelWrapperGridAreaName}-${1} ${labelWrapperGridAreaName}-${1}"
      "${inputInputIconContainerWrapperGridAreaName}-${1} ${inputInputIconContainerWrapperGridAreaName}-${1}"
      "${fieldsetMessageWrapperGridAreaName}-${1} ${fieldsetMessageWrapperGridAreaName}-${1}"
      "${buttonWrapperGridAreaName}-${1} ${buttonWrapperGridAreaName}-${1}"
      "${labelWrapperGridAreaName}-${2} ${labelWrapperGridAreaName}-${2}"
      "${inputInputIconContainerWrapperGridAreaName}-${2} ${inputInputIconContainerWrapperGridAreaName}-${2}"
      "${fieldsetMessageWrapperGridAreaName}-${2} ${fieldsetMessageWrapperGridAreaName}-${2}"
      "${buttonWrapperGridAreaName}-${2} ${buttonWrapperGridAreaName}-${2}"
    `;

  const gridTemplateAreasSmallScreenOrBigger = 
    `
      "${labelWrapperGridAreaName}-${1} ${labelWrapperGridAreaName}-${1}"
      "${inputInputIconContainerWrapperGridAreaName}-${1} ${buttonWrapperGridAreaName}-${1}"
      "${fieldsetMessageWrapperGridAreaName}-${1} ${fieldsetMessageWrapperGridAreaName}-${1}"
      "${labelWrapperGridAreaName}-${2} ${labelWrapperGridAreaName}-${2}"
      "${inputInputIconContainerWrapperGridAreaName}-${2} ${buttonWrapperGridAreaName}-${2}"
      "${fieldsetMessageWrapperGridAreaName}-${2} ${fieldsetMessageWrapperGridAreaName}-${2}"
    `;

  return (
    <form className={styles.Form} style={{
      gridTemplateAreas: 
                          !isSmallScreenOrBigger
                        ?      
                          gridTemplateAreasSmallerThanSmallScreen
                        : gridTemplateAreasSmallScreenOrBigger
    }}>
      {/* iterate over array of objects for Fieldset items*/}
      <FieldsetWrapper>
        <Fieldset 
            buttonText={"Create BST"} 
            buttonWrapperGridAreaName={buttonWrapperGridAreaName}
            // use id of map function as fieldsetId
            fieldsetId={1}
            fieldsetMessageEmptyInputErrorValue={"Please enter the initial value(s)"}
            fieldsetMessageEmptyInputSuccessValue={<>&nbsp;</>} 
            fieldsetMessageInputFormatErrorValue={"Please enter the initial number(s) in the correct format"} 
            fieldsetMessageInputValueErrorValue={"Please only enter value(s) that exist in the BST"}
            fieldsetMessageReadyToUpdateValue={"The BST is ready to be updated"} 
            // store the message in the array of objects
            // store fieldsetMessageUpdatedSuccessValueWithIcon in the array of objects and use it as a prop here for FieldsetMessageUpdatedSuccessMessage
            fieldsetMessageUpdatedSuccessValue={<FieldsetMessageUpdatedSuccessMessage icon={true} message={"The BST has been updated"} />}
            fieldsetMessageWrapperGridAreaName={fieldsetMessageWrapperGridAreaName}
            inputInputIconContainerWrapperGridAreaName={inputInputIconContainerWrapperGridAreaName}
            inputName={"Initial-value(s)"} 
            inputRegex={useMemo(() => new RegExp("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"), [])}
            // implement later
            isValidInputValue={(input) => true} 
            labelText={"Add initial value(s) seperated by a comma and a space"} 
            labelWrapperGridAreaName={labelWrapperGridAreaName}
            // implement later
            onClickHandlerSuccessful={(input) => true} 
          />
        </FieldsetWrapper>

        <FieldsetWrapper>
        <Fieldset 
            buttonText={"Create BST"} 
            buttonWrapperGridAreaName={buttonWrapperGridAreaName}
            // use id of map function as fieldsetId
            fieldsetId={2}
            fieldsetMessageEmptyInputErrorValue={"Please enter the initial value(s)"}
            fieldsetMessageEmptyInputSuccessValue={<>&nbsp;</>} 
            fieldsetMessageInputFormatErrorValue={"Please enter the initial number(s) in the correct format"} 
            fieldsetMessageInputValueErrorValue={"Please only enter value(s) that exist in the BST"}
            fieldsetMessageReadyToUpdateValue={"The BST is ready to be updated"} 
            // store the message in the array of objects
            // store fieldsetMessageUpdatedSuccessValueWithIcon in the array of objects and use it as a prop here for FieldsetMessageUpdatedSuccessMessage
            fieldsetMessageUpdatedSuccessValue={<FieldsetMessageUpdatedSuccessMessage icon={true} message={"The BST has been updated"} />}
            fieldsetMessageWrapperGridAreaName={fieldsetMessageWrapperGridAreaName}
            inputInputIconContainerWrapperGridAreaName={inputInputIconContainerWrapperGridAreaName}
            inputName={"Initial-value(s)"} 
            inputRegex={useMemo(() => new RegExp("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"), [])}
            // implement later
            isValidInputValue={(input) => true} 
            labelText={"Add initial value(s) seperated by a comma and a space"} 
            labelWrapperGridAreaName={labelWrapperGridAreaName}
            // implement later
            onClickHandlerSuccessful={(input) => true} 
          />
        </FieldsetWrapper>
    </form>
  );
};
