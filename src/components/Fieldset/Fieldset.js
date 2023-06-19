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
  fieldsetMessageUpdatedSuccessValue,
  inputName,
  inputRegex,
  isValidInputValue,
  labelText,
  lastUpdatedFieldsetId,
  onClickHandlerSuccessful,
  setLastUpdatedFieldsetId
}) => {
  const [fieldsetMessageText, setFieldsetMessageText] = useState(fieldsetMessageEmptyInputSuccessValue);
  const inputId = useId();
  const [input, setInput] = useState("");
  const [inputSuccess, setInputSuccess] = useState(false);
  const [inputUpdatedBST, setInputUpdatedBST] = useState(false);
  const [inputButtonClicked, setInputButtonClicked] = useState(false);

  const isValidInputFormat = (regexPattern, input) => {
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
      onClickHandlerSuccessful(input, setFieldsetMessageText, fieldsetMessageUpdatedSuccessValue(input));
      // maybe move setInput and setLastUpdatedFieldsetId in new useEffect hook with inputUpdatedBST as dependency
      setInput("");
      setInputUpdatedBST(true);
      setLastUpdatedFieldsetId(inputId);

    };
  };



  useEffect(() => {
    if (input === "" && inputSuccess && lastUpdatedFieldsetId !== inputId) {
      setFieldsetMessageText(fieldsetMessageEmptyInputSuccessValue);
    };
  }, [fieldsetMessageEmptyInputSuccessValue, input, inputId, inputSuccess, lastUpdatedFieldsetId]);



  useEffect(() => {
    if (
         ((input === "") && (!inputButtonClicked || inputUpdatedBST)) 
      || (input !== "" && (isValidInputFormat(inputRegex, input)) && isValidInputValue(input))
    ) {
      setInputSuccess(true);
    } else {
      setInputSuccess(false);
    };
  }, [input, inputButtonClicked, inputUpdatedBST, inputRegex, isValidInputValue]);

  useEffect(() => {
    if (input === "" && !inputUpdatedBST && inputSuccess) {
      setFieldsetMessageText(fieldsetMessageEmptyInputSuccessValue);
    } else if (input === "" && !inputUpdatedBST && !inputSuccess) {
      setFieldsetMessageText(fieldsetMessageEmptyInputErrorValue);
    } else if (input === "" && inputUpdatedBST) {
      // setFieldsetMessageText(fieldsetMessageUpdatedSuccessValue(prevInputState));
    } else if ((input !== "") && inputSuccess) {
      setFieldsetMessageText(fieldsetMessageReadyToUpdateValue);
    } else if ((input !== "") && !inputSuccess && !isValidInputFormat(inputRegex, input)) {
      setFieldsetMessageText(fieldsetMessageInputFormatErrorValue);
    } else if ((input !== "") && !inputSuccess && isValidInputFormat(inputRegex, input) && !isValidInputValue(input)) {
      setFieldsetMessageText(fieldsetMessageInputValueErrorValue);
    };
  }, [input, inputUpdatedBST, inputSuccess, isValidInputValue, fieldsetMessageEmptyInputSuccessValue, fieldsetMessageEmptyInputErrorValue, fieldsetMessageUpdatedSuccessValue, fieldsetMessageReadyToUpdateValue, fieldsetMessageInputFormatErrorValue, fieldsetMessageInputValueErrorValue, inputRegex]);

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
          fieldsetMessageUpdatedSuccessValue={fieldsetMessageUpdatedSuccessValue(input)}
          input={input}
          inputSuccess={inputSuccess}
          inputUpdatedBST={inputUpdatedBST}
          isValidInputFormat={isValidInputFormat(inputRegex, input)}
          isValidInputValue={isValidInputValue(input)}
          
          fieldsetMessageText={fieldsetMessageText}
          setFieldsetMessageText={setFieldsetMessageText}
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
