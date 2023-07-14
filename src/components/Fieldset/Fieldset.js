import { useId, useMemo, useState } from 'react';
import { Button } from '../Button/Button.js';
import { ButtonWrapper } from '../ButtonWrapper/ButtonWrapper.js';
import { delimeter } from '../../data/delimiter.js';
import { FieldsetMessage } from '../FieldsetMessage/FieldsetMessage.js';
import { FieldsetMessageWrapper } from '../FieldsetMessageWrapper/FieldsetMessageWrapper.js';
import { getArrayFromString } from '../../utils/getArrayFromString/getArrayFromString.js';
import { getFieldsetMessage } from '../../utils/getFieldsetMessage/getFieldsetMessage.js';
import { getIsArrayWithoutDuplicates } from '../../utils/getIsArrayWithoutDuplicates/getIsArrayWithoutDuplicates.js';
import { getIsInputSuccess } from '../../utils/getIsInputSuccess/getIsInputSuccess.js';
import { getIsInputWithoutDuplicates } from '../../utils/getIsInputWithoutDuplicates/getIsInputWithoutDuplicates.js';
import { getIsValidInputFormat } from '../../utils/getIsValidInputFormat/getIsValidInputFormat.js';
import { InputInputIconContainer } from '../InputInputIconContainer/InputInputIconContainer.js';
import { InputInputIconContainerWrapper } from '../InputInputIconContainerWrapper/InputInputIconContainerWrapper.js';
import { Label } from '../Label/Label.js';
import { LabelWrapper } from '../LabelWrapper/LabelWrapper.js';
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
  getIsValidInputValue,
  labelText,
  lastUpdatedFieldsetId,
  onClickHandlerSuccessful,
  regex,
  setLastUpdatedFieldsetId
}) => {
  const inputId = useId();

  const [input, setInput] = useState("");
  const [inputOnClickHandlerSuccessful, setInputOnClickHandlerSuccessful] = useState("");
  const [inputButtonClicked, setInputButtonClicked] = useState(false);
  const [isUpdatedBST, setIsUpdatedBST] = useState(false);

  const isEmptyInput = (input === "");
  const isLastUpdatedFieldset = (lastUpdatedFieldsetId === inputId);
  const fieldsetMessageUpdatedSuccessValue = useMemo(() => getFieldsetMessageUpdatedSuccessValue(inputOnClickHandlerSuccessful), [getFieldsetMessageUpdatedSuccessValue, inputOnClickHandlerSuccessful]);
  const isValidInputFormat = useMemo(() => getIsValidInputFormat(input, regex), [input, regex]);
  const isValidInputValue = useMemo(() => getIsValidInputValue(input, isValidInputFormat), [getIsValidInputValue, input, isValidInputFormat]);
  const isInputWithoutDuplicates = useMemo(() => getIsInputWithoutDuplicates(input, delimeter, getArrayFromString, getIsArrayWithoutDuplicates), [input]);
  const isInputSuccess = getIsInputSuccess(
    inputButtonClicked,
    isEmptyInput,
    isUpdatedBST,
    isValidInputFormat,
    isValidInputValue
  );
  const fieldsetMessage = getFieldsetMessage(
    fieldsetMessageEmptyInputErrorValue,
    fieldsetMessageEmptyInputSuccessValue,
    fieldsetMessageInputFormatErrorValue,
    fieldsetMessageInputValueErrorValue,
    fieldsetMessageReadyToUpdateValue,
    fieldsetMessageUpdatedSuccessValue,
    isEmptyInput,
    isInputSuccess,
    isLastUpdatedFieldset,
    isUpdatedBST,
    isValidInputFormat,
    isValidInputValue,
  );

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
      setInputOnClickHandlerSuccessful(input);
      setInput("");
      setLastUpdatedFieldsetId(inputId);
      setIsUpdatedBST(true);
    };
  };

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
          regex={regex}
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
