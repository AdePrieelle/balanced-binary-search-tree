import styles from './ControlsBST.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState, useMemo } from 'react';
import { InputIcon } from '../InputIcon/InputIcon.js';
import { FormMessage } from '../FormMessage/FormMessage.js';
import { FormFieldset } from '../FormFieldset/FormFieldset.js';

export const ControlsBST = () => {
  const [input1, setInput1] = useState("");
  // const [input2, setInput2] = useState("");
  // const [input3, setInput3] = useState("");
  // const [input4, setInput4] = useState("");
  // const [input5, setInput5] = useState("");
  const [input1Success, setInput1Success] = useState(false);
  // const [input2Success, setInput2Success] = useState(false);
  // const [input3Success, setInput3Success] = useState(false);
  // const [input4Success, setInput4Success] = useState(false);
  // const [input5Success, setInput5Success] = useState(false);
  const [input1Message, setInput1Message] = useState(<>&nbsp;</>);
  // const [input2Message, setInput2Message] = useState("");
  // const [input3Message, setInput3Message] = useState("");
  // const [input4Message, setInput4Message] = useState("");
  // const [input5Message, setInput5Message] = useState("");
  const [input1UpdatedBST, setInput1UpdatedBST] = useState(false);
  const [input1ButtonClicked, setInput1ButtonClicked] = useState(false);


  // below 2 work good for integers and floats and multiple values
  // const input1Regex = useMemo(() => new RegExp("^(-?[0-9]+(\\.[0-9]+)?)+((, (-?[0-9]+(\\.[0-9]+)?))*)$"), []);
  // const input1Regex = useMemo(() => new RegExp("^(-?[0-9]+(\\.[0-9]+)?)+((, (-?[0-9]+(\\.[0-9]+)?))*)$"), []);
  // const input1Regex = useMemo(() => new RegExp("^(-?[0-9]+(\\.[0-9]+)?)+((, (-?[0-9]+(\\.[0-9]+)?))*)$"), []);

  // below 2 work good with double \\ to use d shortcut for [0-9]
  // const input1Regex = useMemo(() => new RegExp("^-?(\\d+(\\.\\d+)?)+(, -?(\\d+(\\.\\d+)?))*$"), []);
  // const input1Regex = useMemo(() => new RegExp("^-?(\\d+(\\.\\d+)?)+(, -?(\\d+(\\.\\d+)?))*$"), []);
  const input1Regex = useMemo(() => new RegExp("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"), []);

  // const isValidInput = (regexPattern, input) => {
  //   console.log(regexPattern.test(input));
  //   return (regexPattern.test(input));
  // };

  const isValidInputFormat = (regexPattern, input) => {
    console.log(regexPattern.test(input));
    return (regexPattern.test(input));
  };

  const isValidInputValue = (input) => {
    //implement later
    return true;
  };



  const input1OnChange = (e) => {
    setInput1(e.target.value);
    setInput1ButtonClicked(false);
    setInput1UpdatedBST(false);
  };

  // const input1OnClick = () => {
  //   setInput1ButtonClicked(true);
  //   setInput1UpdatedBST(false);
  //   // if (input1 === "") {
  //   //   setInput1Success(false);
  //   //   setInput1Message("Please enter the initial value(s)")
  //   // };
  //   if ((input1 !== "") && input1Success) {
  //     setInput1("");
  //     setInput1UpdatedBST(true);
  //   };
  // };

  const input1OnClick = () => {
    setInput1ButtonClicked(true);
    setInput1UpdatedBST(false);
    // if (input1 === "") {
    //   setInput1Success(false);
    //   setInput1Message("Please enter the initial value(s)")
    // };
    if ((input1 !== "") && input1Success) {
      setInput1("");
      setInput1UpdatedBST(true);
    };
  };

  // useEffect(() => {
  //   if (input1 === "" && !input1UpdatedBST && !input1ButtonClicked) {
  //     setInput1Success(true);
  //     setInput1Message(<>&nbsp;</>);
  //   };
  //   if (input1 === "" && !input1UpdatedBST && input1ButtonClicked) {
  //     setInput1Success(false);
  //     setInput1Message("Please enter the initial value(s)");
  //   };
  //   if (input1 === "" && input1UpdatedBST) {
  //     setInput1Success(true);
  //     setInput1Message(
  //       <>
  //         <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-message-icon"]} ${styles["ControlsBST__form-message-icon--success"]}`}/>
  //         <>The BST has been updated</>
  //       </>
  //     );
  //   };
  //   if (input1 !== "" && (isValidInput(input1Regex, input1))) {
  //     setInput1Success(true);
  //     setInput1Message("The BST is ready to be updated");
  //   }
  //   if (input1 !== "" && (!isValidInput(input1Regex, input1))) {
  //     setInput1Success(false);
  //     setInput1Message("Please enter the initial number(s) in the correct format");
  //   };
  // }, [input1, input1UpdatedBST, input1ButtonClicked, input1Regex]);

  // useEffect(() => {
  //   if (input1 === "" && !input1UpdatedBST && input1Success) {
  //     setInput1Success(true);
  //   };
  //   if (input1 === "" && !input1UpdatedBST && !input1Success) {
  //     setInput1Success(false);
  //   };
  //   if (input1 === "" && input1UpdatedBST) {
  //     setInput1Success(true);
  //   };
  //   if (input1 !== "" && (isValidInput(input1Regex, input1))) {
  //     setInput1Success(true);
  //   }
  //   if (input1 !== "" && (!isValidInput(input1Regex, input1))) {
  //     setInput1Success(false);
  //   };
  // }, [input1, input1UpdatedBST, input1ButtonClicked, input1Regex]);

  // useEffect(() => {
  //   if (
  //        ((input1 === "") && (!input1ButtonClicked || input1UpdatedBST)) 
  //     || (input1 !== "" && (isValidInputFormat(input1Regex, input1)))
  //   ) {
  //     setInput1Success(true);
  //   }
  //   if (
  //        ((input1 === "") && (input1ButtonClicked && !input1UpdatedBST)) 
  //     || ((input1 !== "") && (!isValidInputFormat(input1Regex, input1)))) {
  //     setInput1Success(false);
  //   };
  // }, [input1, input1ButtonClicked, input1UpdatedBST, input1Regex]);

  useEffect(() => {
    if (
         ((input1 === "") && (!input1ButtonClicked || input1UpdatedBST)) 
      || (input1 !== "" && (isValidInputFormat(input1Regex, input1)) && isValidInputValue(input1))
    ) {
      setInput1Success(true);
    } else {
      setInput1Success(false);
    };
  }, [input1, input1ButtonClicked, input1UpdatedBST, input1Regex]);

  return (
    <div className={styles.ControlsBST}>
      <form className={styles.ControlsBST__form}>







          <FormFieldset 
              inputRegex={useMemo(() => new RegExp("^(-?\\d+(\\.\\d+)?)+((, (-?\\d+(\\.\\d+)?))*)$"), [])}
              // implement later
              isValidInputValue={(input) => true} 
              labelText={"Add initial value(s) seperated by a comma and a space"} 
              inputName={"Initial-value(s)"} 
              buttonText={"Create BST"} 
              // implement later
              onClickHandlerSuccessful={(input) => true} 
              formMessageInitialValue={<>&nbsp;</>} 
              formMessageEmptyErrorValue={"Please enter the initial value(s)"}
              formMessageUpdatedValue={
                <>
                  <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-message-icon"]} ${styles["ControlsBST__form-message-icon--success"]}`}/>
                  <>The BST has been updated</>
                </>
              } 
              formMessageReadyToUpdateValue={"The BST is ready to be updated"} 
              formMessageInputFormatErrorValue={"Please enter the initial number(s) in the correct format"} 
              formMessageInputValueErrorValue={"Please only enter value(s) that exist in the BST"}
          />










          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-1"]}`} htmlFor="initial-values">Add initial value(s) seperated by a comma and a space</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-1"]}`}>
            <input pattern={/^-?(\d+(.\d+)?)+(, -?(\d+(.\d+)?))*$/} className={`${styles["ControlsBST__form-input"]} ${(input1 === "" && (input1Success)) ? "" : input1Success ? styles["ControlsBST__form-input--success"] : styles["ControlsBST__form-input--error"]}`} id="initial-values" name="initial-values" type="text" value={input1} onChange={input1OnChange} />
            {/* {
                (input1 === "") 
              ? ""
              : input1Success
              ? <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--success"]}`}/>
              : <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--error"]}`} />
            } */}
            {/* {input1Icon} */}
            <InputIcon 
              input={input1} 
              // inputButtonClicked={input1ButtonClicked} 
              inputSuccess={input1Success}
            />
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-1"]}`} type="button" onClick={input1OnClick}>Create BST</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-1"]} ${((input1 === "") && input1Success) ? styles["ControlsBST__form-message--success"] : input1Success ? styles["ControlsBST__form-message--success"] : styles["ControlsBST__form-message--error"]}`}>
            {/* {input1Message} */}
            <FormMessage
              input={input1}
              inputSuccess={input1Success}
              inputUpdatedBST={input1UpdatedBST}
              // isValidInput={isValidInput(input1Regex, input1)}
              isValidInputFormat={isValidInputFormat(input1Regex, input1)}
              isValidInputValue={true}
            />
            {/* Please enter the initial values in the correct format */}
            {/* &nbsp; */}
          </div>




          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-2"]}`} htmlFor="insert-values">Add consecutive value(s) seperated by a comma and a space</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-2"]}`}>
            <input className={`${styles["ControlsBST__form-input"]} ${styles["ControlsBST__form-input--success"]}`} id="insert-values" name="insert-values" type="text" />
            <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--success"]}`}/>
            {/* <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--error"]}`} /> */}
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-2"]}`} type="button">Add values</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-2"]} ${styles["ControlsBST__form-message--success"]}`}>
            {/* <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-message-icon"]} ${styles["ControlsBST__form-message-icon--success"]}`}/> */}
            The BST is ready to be updated
            {/* The BST has been updated */}
            {/* &nbsp; */}
          </div>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-3"]}`} htmlFor="remove-values">Remove value(s) seperated by a comma and a space</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-3"]}`}>
            <input className={`${styles["ControlsBST__form-input"]}`} id="remove-values" name="remove-values" type="text" />
            {/* <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--success"]}`}/> */}
            {/* <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--error"]}`} /> */}
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-3"]}`} type="button">Remove values</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-3"]} ${styles["ControlsBST__form-message--success"]}`}>
            <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-message-icon"]} ${styles["ControlsBST__form-message-icon--success"]}`}/>
            {/* <FontAwesomeIcon icon={faFolderTree} /> */}
            The BST has been updated
            {/* &nbsp; */}
          </div>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-4"]}`} htmlFor="depth-value">Find the depth of a value in the BST</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-4"]}`}>
            <input className={`${styles["ControlsBST__form-input"]}`} id="depth-value" name="depth-value" type="text" />
            {/* <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--success"]}`}/> */}
            {/* <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--error"]}`} /> */}
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-4"]}`} type="button">Find depth</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-4"]}`}>
            The depth of the given value in the BST is: {"result-placeholder"}
            {/* &nbsp; */}
          </div>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-5"]}`} htmlFor="height-value">Find the height of a value in the BST</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-5"]}`}>
            <input className={`${styles["ControlsBST__form-input"]}`} id="height-value" name="depth-value" type="text" />
            {/* <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--success"]}`}/> */}
            {/* <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--error"]}`} /> */}
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-5"]}`} type="button">Find height</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-5"]}`}>
            {/* The height of the given value in the BST is: {"result-placeholder"} */}
            &nbsp;
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button--large"]}`} type="button">Rebalance BST</button>
      </form>
    </div>
  );
};
