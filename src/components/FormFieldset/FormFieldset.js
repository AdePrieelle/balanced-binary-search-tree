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
        <Label id={id}>{labelText}</Label>
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
        <Button onClickHandler={onClickHandler}>{buttonText}</Button>
      </ButtonWrapper>
    </fieldset>
  );
};



















































// import styles from './FormSubset.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
// import { useId, useEffect, useState, useMemo } from 'react';

// export const FormSubset = ({ emptyInputFormMessage, regexPattern, inputName, buttonText, labelText, buttonSuccessfulClickedFormMessage, inputSuccesfulReadyToBeSubmittedFormMessage, invalidInputFormMessage }) => {
//   const id = useId();

//   const [input, setInput] = useState("");
//   const [inputSuccess, setInputSuccess] = useState(false);
//   const [inputMessage, setInputMessage] = useState(<>&nbsp;</>);
//   const [inputUpdatedBST, setInputUpdatedBST] = useState(false);
//   const [inputButtonClicked, setInputButtonClicked] = useState(false);
//   // const inputRegex = useMemo(() => new RegExp("^-?(\\d+(.\\d+)?)+(, -?(\\d+(.\\d+)?))*$"), []);
//   // const inputRegex = useMemo(() => new RegExp(regexPattern), []);

//   const isValidInput = (regexPattern, input) => {
//     return (regexPattern.test(input));
//   };

//   const inputOnChange = (e) => {
//     setInput(e.target.value);
//     setInputButtonClicked(false);
//     setInputUpdatedBST(false);
//   };

//   const input1OnClick = () => {
//     setInputButtonClicked(true);
//     if (input === "") {
//       setInputSuccess(false);
//       // setInputMessage("Please enter the initial value(s)")
//       setInputMessage(emptyInputFormMessage);
//     };
//     if ((input !== "") && inputSuccess) {
//       setInput("");
//       setInputUpdatedBST(true);
//     };
//   };

//   useEffect(() => {
//     if (input === "" && !inputUpdatedBST) {
//       setInputSuccess(true);
//       setInputMessage(<>&nbsp;</>);
//     };
//     if (input === "" && inputUpdatedBST) {
//       setInputSuccess(true);
//       setInputMessage(
//         <>
//           <FontAwesomeIcon icon={faCircleCheck} className={`${styles["FormSubset__message-icon"]} ${styles["FormSubset__message-icon--success"]}`}/>
//           {/* <>The BST has been updated</> */}
//           <>{buttonSuccessfulClickedFormMessage}</>
//         </>
//       );
//     };
//     if (input !== "" && (isValidInput(regexPattern, input))) {
//       setInputSuccess(true);
//       // setInputMessage("The BST is ready to be updated");
//       setInputMessage(inputSuccesfulReadyToBeSubmittedFormMessage);
//     }
//     if (input !== "" && (!isValidInput(regexPattern, input))) {
//       setInputSuccess(false);
//       // setInputMessage("Please enter the initial number(s) in the correct format");
//       setInputMessage(invalidInputFormMessage);
//     };
//   }, [input, inputUpdatedBST, buttonSuccessfulClickedFormMessage, regexPattern, inputSuccesfulReadyToBeSubmittedFormMessage, invalidInputFormMessage]);


//   // const [inputIcon, setInputIcon] = useState("");

//   // useEffect(() => {
//   //   if (input === "") {
//   //     setInputIcon("");
//   //   };
//   //   if (input !== "" && inputSuccess) {
//   //     setInputIcon(<FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--success"]}`}/>);
//   //   };
//   //   if (input !== "" && !inputSuccess) {
//   //     setInputIcon(<FontAwesomeIcon icon={faCircleExclamation} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--error"]}`} />)
//   //   };
//   // }, [input, inputSuccess]);

//   let inputIcon = "";
//   if (input === "" && !inputButtonClicked) {
//     inputIcon = "";
//   };
//   if (input === "" && inputButtonClicked) {
//     inputIcon = <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["FormSubset__input-icon"]} ${styles["FormSubset__input-icon--error"]}`}/>;
//   };
//   if (input !== "" && inputSuccess) {
//     inputIcon = <FontAwesomeIcon icon={faCircleCheck} className={`${styles["FormSubset__input-icon"]} ${styles["FormSubset__input-icon--success"]}`}/>;
//   };
//   if (input !== "" && !inputSuccess) {
//     inputIcon = <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["FormSubset__input-icon"]} ${styles["FormSubset__input-icon--error"]}`}/>;
//   };


//   return (
//     <div className={`${styles["FormSubset"]}`}>
//       {/* <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-1"]}`} htmlFor={id}>Add initial value(s) seperated by a comma and a space</label> */}
//       <label className={`${styles["FormSubset__label"]}`} htmlFor={id}>{labelText}</label>
//       <div className={`${styles["FormSubset__input-icon-wrapper"]}`}>
//         {/* <input pattern={/^-?(\d+(.\d+)?)+(, -?(\d+(.\d+)?))*$/} className={`${styles["ControlsBST__form-input"]} ${(input === "") ? "" : inputSuccess ? styles["ControlsBST__form-input--success"] : styles["ControlsBST__form-input--error"]}`} id={id} name={inputName} type="text" value={input} onChange={inputOnChange} /> */}
//         <input pattern={regexPattern} className={`${styles["FormSubset__input"]} ${(input === "" && !inputButtonClicked) ? "" : inputSuccess ? styles["FormSubset__input--success"] : styles["FormSubset__input--error"]}`} id={id} name={inputName} type="text" value={input} onChange={inputOnChange} />
//         {/* {
//             (input === "") 
//           ? ""
//           : inputSuccess
//           ? <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--success"]}`}/>
//           : <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--error"]}`} />
//         } */}
//         {inputIcon}
//       </div>
//       {/* <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-1"]}`} type="button" onClick={input1OnClick}>Create BST</button> */}
//       <div className={`${styles["FormSubset__message"]} ${((input === "") && inputSuccess) ? styles["FormSubset__message--success"] : inputSuccess ? styles["FormSubset__message--success"] : styles["FormSubset__message--error"]}`}>
//         {inputMessage}
//         {/* Please enter the initial values in the correct format */}
//         {/* &nbsp; */}
//       </div>
//       <button className={`${styles["FormSubset__button"]}`} type="button" onClick={input1OnClick}>{buttonText}</button>
//     </div>
//   );
// };
