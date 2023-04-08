import { useId, useEffect, useState } from 'react';
import { Button } from '../Button/Button.js';
import { ButtonWrapper } from '../ButtonWrapper/ButtonWrapper.js';
import { FormMessage } from '../FormMessage/FormMessage.js';
import { FormMessageWrapper } from '../FormMessageWrapper/FormMessageWrapper.js';
import { InputInputIconContainer } from '../InputInputIconContainer/InputInputIconContainer.js';
import { InputInputIconContainerWrapper } from '../InputInputIconContainerWrapper/InputInputIconContainerWrapper.js';
import { Label } from '../Label/Label.js';
import { LabelWrapper } from '../LabelWrapper/LabelWrapper.js';
import styles from './FormFieldset.module.scss';

export const FormFieldset = ({ 
  inputRegex, 
  isValidInputValue, 
  labelText, 
  inputName, 
  buttonText, 
  onClickHandlerSuccessful, 
  formMessageInitialValue, 
  formMessageEmptyErrorValue, 
  formMessageUpdatedValue, 
  formMessageReadyToUpdateValue, 
  formMessageInputFormatErrorValue, 
  formMessageInputValueErrorValue
}) => {
  const id = useId();
  const [input, setInput] = useState("");
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
    <fieldset className={`${styles["FormFieldset"]}`}>
      <LabelWrapper gridArea={"Label-1"}>
        <Label id={id}>
          {labelText}
        </Label>
      </LabelWrapper>
      <InputInputIconContainerWrapper gridArea={"InputInputIconContainer-1"}>
        <InputInputIconContainer
          id={id}
          input={input}
          inputOnChange={inputOnChange}
          inputName={inputName}
          inputSuccess={inputSuccess}
          inputRegex={inputRegex}
        />
      </InputInputIconContainerWrapper>
      <FormMessageWrapper gridArea={"FormMessage-1"}>
        <FormMessage
          formMessageEmptyErrorValue={formMessageEmptyErrorValue}
          formMessageInitialValue={formMessageInitialValue}
          formMessageInputFormatErrorValue={formMessageInputFormatErrorValue}
          formMessageInputValueErrorValue={formMessageInputValueErrorValue}
          formMessageReadyToUpdateValue={formMessageReadyToUpdateValue}
          formMessageUpdatedValue={formMessageUpdatedValue}
          input={input}
          inputSuccess={inputSuccess}
          inputUpdatedBST={inputUpdatedBST}
          isValidInputFormat={isValidInputFormat(inputRegex, input)}
          isValidInputValue={isValidInputValue(input)}
        />
      </FormMessageWrapper>
      <ButtonWrapper gridArea={"Button-1"}>
        <Button onClickHandler={onClickHandler}>
          {buttonText}
        </Button>
      </ButtonWrapper>
    </fieldset>
  );
};
