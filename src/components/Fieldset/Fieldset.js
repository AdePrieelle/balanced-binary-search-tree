import { useEffect, useId, useMemo, useState } from 'react';
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

import { useUpdateFieldsetMessage } from '../../hooks/useUpdateFieldsetMessage.js';
import { getFieldsetMessage } from '../../utils/getFieldsetMessage/getFieldsetMessage.js';

export const Fieldset = ({ 
  buttonText,
  fieldsetMessageEmptyInputErrorValue,
  fieldsetMessageEmptyInputSuccessValue,
  fieldsetMessageInputFormatErrorValue,
  fieldsetMessageInputValueErrorValue,
  fieldsetMessageReadyToUpdateValue,
  getFieldsetMessageUpdatedSuccessValue,
  inputName,
  getIsValidInputValue,
  labelText,
  lastUpdatedFieldsetId,
  onClickHandlerSuccessful,
  regexPattern,
  setLastUpdatedFieldsetId
}) => {
  const inputId = useId();
  const [fieldsetMessage, setFieldsetMessage] = useState(fieldsetMessageEmptyInputSuccessValue);
  const [input, setInput] = useState("");
  const [inputOnClickHandlerSuccessful, setInputOnClickHandlerSuccessful] = useState("");
  const [inputButtonClicked, setInputButtonClicked] = useState(false);
  const [isInputSuccess, setIsInputSuccess] = useState(false);
  const [isUpdatedBST, setIsUpdatedBST] = useState(false);

  const getIsValidInputFormat = (input, regexPattern) => {
    return (regexPattern.test(input));
  };

  const isEmptyInput = (input === "");
  const isLastUpdatedFieldset = (lastUpdatedFieldsetId === inputId);
  const fieldsetMessageUpdatedSuccessValue = useMemo(() => getFieldsetMessageUpdatedSuccessValue(inputOnClickHandlerSuccessful), [getFieldsetMessageUpdatedSuccessValue, inputOnClickHandlerSuccessful]);
  const isValidInputFormat = useMemo(() => getIsValidInputFormat(input, regexPattern), [input, regexPattern]);
  const isValidInputValue = useMemo(() => getIsValidInputValue(input), [getIsValidInputValue, input]);
  
  

  const inputOnChange = (e) => {
    setInput(e.target.value);
    setInputButtonClicked(false);
    setIsUpdatedBST(false);
  };

  const onClickHandler = () => {
    setInputButtonClicked(true);
    setIsUpdatedBST(false);
    if (!isEmptyInput && isInputSuccess) {
      onClickHandlerSuccessful(input);
      // maybe move setInput and setLastUpdatedFieldsetId in new useEffect hook with inputUpdatedBST as dependency
      setInputOnClickHandlerSuccessful(input);
      setInput("");
      setIsUpdatedBST(true);
      setLastUpdatedFieldsetId(inputId);

    };
  };

  useEffect(() => {
    if (
         ((isEmptyInput) && (!inputButtonClicked || isUpdatedBST)) 
      || (!isEmptyInput && isValidInputFormat && isValidInputValue)
    ) {
      setIsInputSuccess(true);
    } else {
      setIsInputSuccess(false);
    };
  }, [inputButtonClicked, isEmptyInput, isUpdatedBST, isValidInputFormat, isValidInputValue]);

  useUpdateFieldsetMessage(
    fieldsetMessageEmptyInputErrorValue,
    fieldsetMessageEmptyInputSuccessValue,
    fieldsetMessageInputFormatErrorValue,
    fieldsetMessageInputValueErrorValue,
    fieldsetMessageReadyToUpdateValue,
    fieldsetMessageUpdatedSuccessValue,
    getFieldsetMessage,
    isEmptyInput,
    isInputSuccess,
    isLastUpdatedFieldset,
    isUpdatedBST,
    isValidInputFormat,
    isValidInputValue,
    setFieldsetMessage
  );

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
          regexPattern={regexPattern}
          isEmptyInput={isEmptyInput}
          isInputSuccess={isInputSuccess}
        />
      </InputInputIconContainerWrapper>
      <FieldsetMessageWrapper>
        <FieldsetMessage
          fieldsetMessage={fieldsetMessage}
          isInputSuccess={isInputSuccess}
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
