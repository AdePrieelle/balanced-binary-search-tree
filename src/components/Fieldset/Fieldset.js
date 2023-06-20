import { useId, useEffect, useState } from 'react';
import { Button } from '../Button/Button.js';
import { ButtonWrapper } from '../ButtonWrapper/ButtonWrapper.js';
import { FieldsetMessage } from '../FieldsetMessage/FieldsetMessage.js';
import { FieldsetMessageWrapper } from '../FieldsetMessageWrapper/FieldsetMessageWrapper.js';
import { InputInputIconContainer } from '../InputInputIconContainer/InputInputIconContainer.js';
import { InputInputIconContainerWrapper } from '../InputInputIconContainerWrapper/InputInputIconContainerWrapper.js';
import { Label } from '../Label/Label.js';
import { LabelWrapper } from '../LabelWrapper/LabelWrapper.js';
import { usePreviousState } from '../../hooks/usePreviousState.js';
import styles from './Fieldset.module.scss';

export const Fieldset = ({ 
  buttonText,
  fieldsetMessageEmptyInputErrorValue,
  fieldsetMessageEmptyInputSuccessValue,
  fieldsetMessageInputFormatErrorValue,
  fieldsetMessageInputValueErrorValue,
  fieldsetMessageReadyToUpdateValue,
  getFieldsetMessageUpdatedSuccessValue,
  inputName,
  inputRegex,
  getIsValidInputValue,
  labelText,
  lastUpdatedFieldsetId,
  onClickHandlerSuccessful,
  setLastUpdatedFieldsetId
}) => {
  const [fieldsetMessage, setFieldsetMessage] = useState(fieldsetMessageEmptyInputSuccessValue);
  const inputId = useId();
  const [input, setInput] = useState("");
  const [inputSuccess, setInputSuccess] = useState(false);
  const [inputUpdatedBST, setInputUpdatedBST] = useState(false);
  const [inputButtonClicked, setInputButtonClicked] = useState(false);

  const getIsValidInputFormat = (regexPattern, input) => {
    return (regexPattern.test(input));
  };

  const inputOnChange = (e) => {
    setInput(e.target.value);
    setInputButtonClicked(false);
    setInputUpdatedBST(false);
  };

  const onClickHandler = () => {
    setInputButtonClicked(true);
    setInputUpdatedBST(false);
    if ((input !== "") && inputSuccess) {
      onClickHandlerSuccessful(input, setFieldsetMessage, getFieldsetMessageUpdatedSuccessValue(input));
      // maybe move setInput and setLastUpdatedFieldsetId in new useEffect hook with inputUpdatedBST as dependency
      setInput("");
      setInputUpdatedBST(true);
      setLastUpdatedFieldsetId(inputId);

    };
  };



  useEffect(() => {
    if (input === "" && inputSuccess && lastUpdatedFieldsetId !== inputId) {
      setFieldsetMessage(fieldsetMessageEmptyInputSuccessValue);
    };
  }, [fieldsetMessageEmptyInputSuccessValue, input, inputId, inputSuccess, lastUpdatedFieldsetId]);



  useEffect(() => {
    if (
         ((input === "") && (!inputButtonClicked || inputUpdatedBST)) 
      || (input !== "" && (getIsValidInputFormat(inputRegex, input)) && getIsValidInputValue(input))
    ) {
      setInputSuccess(true);
    } else {
      setInputSuccess(false);
    };
  }, [input, inputButtonClicked, inputUpdatedBST, inputRegex, getIsValidInputValue]);

  useEffect(() => {
    if (input === "" && !inputUpdatedBST && inputSuccess) {
      setFieldsetMessage(fieldsetMessageEmptyInputSuccessValue);
    } else if (input === "" && !inputUpdatedBST && !inputSuccess) {
      setFieldsetMessage(fieldsetMessageEmptyInputErrorValue);
    } else if (input === "" && inputUpdatedBST) {
      // setFieldsetMessage(getFieldsetMessageUpdatedSuccessValue(prevInputState));
    } else if ((input !== "") && inputSuccess) {
      setFieldsetMessage(fieldsetMessageReadyToUpdateValue);
    } else if ((input !== "") && !inputSuccess && !getIsValidInputFormat(inputRegex, input)) {
      setFieldsetMessage(fieldsetMessageInputFormatErrorValue);
    } else if ((input !== "") && !inputSuccess && getIsValidInputFormat(inputRegex, input) && !getIsValidInputValue(input)) {
      setFieldsetMessage(fieldsetMessageInputValueErrorValue);
    };
  }, [input, inputUpdatedBST, inputSuccess, getIsValidInputValue, fieldsetMessageEmptyInputSuccessValue, fieldsetMessageEmptyInputErrorValue, getFieldsetMessageUpdatedSuccessValue, fieldsetMessageReadyToUpdateValue, fieldsetMessageInputFormatErrorValue, fieldsetMessageInputValueErrorValue, inputRegex]);

  return (
    <fieldset className={`${styles["Fieldset"]}`}>
      <LabelWrapper>
        <Label inputId={inputId}>
          {labelText}
        </Label>
      </LabelWrapper>
      <InputInputIconContainerWrapper>
        <InputInputIconContainer
          input={input}
          inputId={inputId}
          inputName={inputName}
          inputOnChange={inputOnChange}
          inputRegex={inputRegex}
          inputSuccess={inputSuccess}
        />
      </InputInputIconContainerWrapper>
      <FieldsetMessageWrapper>
        <FieldsetMessage
          fieldsetMessageEmptyInputErrorValue={fieldsetMessageEmptyInputErrorValue}
          fieldsetMessageEmptyInputSuccessValue={fieldsetMessageEmptyInputSuccessValue}
          fieldsetMessageInputFormatErrorValue={fieldsetMessageInputFormatErrorValue}
          fieldsetMessageInputValueErrorValue={fieldsetMessageInputValueErrorValue}
          fieldsetMessageReadyToUpdateValue={fieldsetMessageReadyToUpdateValue}
          fieldsetMessageUpdatedSuccessValue={getFieldsetMessageUpdatedSuccessValue(input)}
          input={input}
          inputSuccess={inputSuccess}
          inputUpdatedBST={inputUpdatedBST}
          isValidInputFormat={getIsValidInputFormat(inputRegex, input)}
          isValidInputValue={getIsValidInputValue(input)}
          
          fieldsetMessage={fieldsetMessage}
          setFieldsetMessage={setFieldsetMessage}
        />
      </FieldsetMessageWrapper>
      <ButtonWrapper>
        <Button onClickHandler={(input) => onClickHandler(input)}>
          {buttonText}
        </Button>
      </ButtonWrapper>
    </fieldset>
  );
};
