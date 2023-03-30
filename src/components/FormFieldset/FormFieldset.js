import styles from './ControlsBST.module.scss';
import { useId, useEffect, useState, useMemo } from 'react';
import { InputIcon } from '../InputIcon/InputIcon.js';
import { FormMessage } from '../FormMessage/FormMessage.js';

export const FormFieldset = () => {
  const inputId = useId();

  const [input, setInput] = useState("");
  const [inputSuccess, setInputSuccess] = useState(false);
  const [inputUpdatedBST, setInputUpdatedBST] = useState(false);
  const [inputButtonClicked, setInputButtonClicked] = useState(false);
  // const input1Regex = useMemo(() => new RegExp("^(-?[0-9]+(\\.[0-9]+)?)+((, (-?[0-9]+(\\.[0-9]+)?))*)$"), []);
  const inputRegex = useMemo(() => new RegExp("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"), []);

  const isValidInputFormat = (regexPattern, input) => {
    console.log(regexPattern.test(input));
    return (regexPattern.test(input));
  };

  const isValidInputValue = (input) => {
    //implement later
    return true;
  };

  const inputOnChange = (e) => {
    setInput(e.target.value);
    setInputButtonClicked(false);
    setInputUpdatedBST(false);
  };

  const inputOnClick = () => {
    setInputButtonClicked(true);
    setInputUpdatedBST(false);
    if ((input !== "") && inputSuccess) {
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
  }, [input, inputButtonClicked, inputUpdatedBST, inputRegex]);

  return (
    <fieldset className={`${styles["FormFieldset"]}`}>
      <label className={`${styles["FormFieldset__label"]} ${styles["FormFieldset__form-label-1"]}`} htmlFor={inputId}>Add initial value(s) seperated by a comma and a space</label>
      <div className={`${styles["FormFieldset__input-icon-wrapper"]} ${styles["FormFieldset__input-icon-wrapper-1"]}`}>
        <input pattern={/^-?(\d+(.\d+)?)+(, -?(\d+(.\d+)?))*$/} className={`${styles["FormFieldset__input"]} ${(input === "" && (inputSuccess)) ? "" : inputSuccess ? styles["FormFieldset__input--success"] : styles["FormFieldset__input--error"]}`} id={inputId} name="initial-values" type="text" value={input} onChange={inputOnChange} />
        <InputIcon 
          input={input} 
          inputSuccess={inputSuccess}
        />
      </div>
      <div className={`${styles["FormFieldset__message"]} ${styles["FormFieldset__message-1"]} ${((input === "") && inputSuccess) ? styles["FormFieldset__message--success"] : inputSuccess ? styles["FormFieldset__message--success"] : styles["FormFieldset__message--error"]}`}>
        <FormMessage
          input={input}
          inputSuccess={inputSuccess}
          inputUpdatedBST={inputUpdatedBST}
          isValidInputFormat={isValidInputFormat(inputRegex, input)}
          isValidInputValue={true}
        />
      </div>
      <button className={`${styles["FormFieldset__button"]} ${styles["FormFieldset__button-1"]}`} type="button" onClick={inputOnClick}>Create BST</button>
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
