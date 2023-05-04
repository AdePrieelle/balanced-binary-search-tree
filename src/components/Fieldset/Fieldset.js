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
  onClickHandlerSuccessful
}) => {
  const inputId = useId();
  const [input, setInput] = useState("");
  const prevInputState = usePreviousState(input);
  const [inputSuccess, setInputSuccess] = useState(false);
  const [inputUpdatedBST, setInputUpdatedBST] = useState(false);
  const [inputButtonClicked, setInputButtonClicked] = useState(false);

  const isValidInputFormat = (regexPattern, input) => {
    // console.log(regexPattern.test(input));
    return (regexPattern.test(input));
  };

  // const isValidInputValue = (input) => {
  //   //implement later
  //   return true;
  // };

  const inputOnChange = (e) => {
    setInput(e.target.value);
    setInputButtonClicked(false);
    setInputUpdatedBST(false);
  };

  const onClickHandler = () => {
    setInputButtonClicked(true);
    setInputUpdatedBST(false);
    if ((input !== "") && inputSuccess) {
      onClickHandlerSuccessful(input);
      // maybe move setInput in new useEffect hook with inputUpdatedBST as dependency
      setInput("");
      setInputUpdatedBST(true);
    };
  };

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
          fieldsetMessageUpdatedSuccessValue={fieldsetMessageUpdatedSuccessValue}
          input={input}
          inputSuccess={inputSuccess}
          inputUpdatedBST={inputUpdatedBST}
          isValidInputFormat={isValidInputFormat(inputRegex, input)}
          isValidInputValue={isValidInputValue(input)}
          prevInputState={prevInputState}
        />
      </FieldsetMessageWrapper>
      <ButtonWrapper>
        <Button onClickHandler={onClickHandler}>
          {buttonText}
        </Button>
      </ButtonWrapper>
    </fieldset>
  );
};
