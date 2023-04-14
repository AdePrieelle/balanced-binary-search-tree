import { Button } from '../Button/Button.js';
import { Form } from '../Form/Form.js';
import { FormWrapper } from '../FormWrapper/FormWrapper.js'
import { RebalanceButtonWrapper } from '../RebalanceButtonWrapper/RebalanceButtonWrapper.js';
import styles from './ControlsBST.module.scss';

export const ControlsBST = () => {
  return (
    <div className={styles.ControlsBST}>
      {/* <form className={styles.ControlsBST__form}> */}
      <FormWrapper>
        <Form />
      </FormWrapper>
      <RebalanceButtonWrapper>
      {/* implement onClickHandler later */}
        <Button onClickHandler={() => null}>Rebalance BST</Button>
      </RebalanceButtonWrapper>




        {/* <FormFieldsetWrapper>
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
        </FormFieldsetWrapper> */}










          {/* <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-1"]}`} htmlFor="initial-values">Add initial value(s) seperated by a comma and a space</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-1"]}`}>
            <input pattern={/^-?(\d+(.\d+)?)+(, -?(\d+(.\d+)?))*$/} className={`${styles["ControlsBST__form-input"]} ${(input1 === "" && (input1Success)) ? "" : input1Success ? styles["ControlsBST__form-input--success"] : styles["ControlsBST__form-input--error"]}`} id="initial-values" name="initial-values" type="text" value={input1} onChange={input1OnChange} />
            <InputIcon 
              input={input1} 
              inputSuccess={input1Success}
            />
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-1"]}`} type="button" onClick={input1OnClick}>Create BST</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-1"]} ${((input1 === "") && input1Success) ? styles["ControlsBST__form-message--success"] : input1Success ? styles["ControlsBST__form-message--success"] : styles["ControlsBST__form-message--error"]}`}>
            <FormMessage
              input={input1}
              inputSuccess={input1Success}
              inputUpdatedBST={input1UpdatedBST}
              isValidInputFormat={isValidInputFormat(input1Regex, input1)}
              isValidInputValue={true}
            />
          </div> */}




          {/* <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-2"]}`} htmlFor="insert-values">Add consecutive value(s) seperated by a comma and a space</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-2"]}`}>
            <input className={`${styles["ControlsBST__form-input"]} ${styles["ControlsBST__form-input--success"]}`} id="insert-values" name="insert-values" type="text" />
            <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--success"]}`}/>
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-2"]}`} type="button">Add values</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-2"]} ${styles["ControlsBST__form-message--success"]}`}>
            The BST is ready to be updated
          </div>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-3"]}`} htmlFor="remove-values">Remove value(s) seperated by a comma and a space</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-3"]}`}>
            <input className={`${styles["ControlsBST__form-input"]}`} id="remove-values" name="remove-values" type="text" />
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-3"]}`} type="button">Remove values</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-3"]} ${styles["ControlsBST__form-message--success"]}`}>
            <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-message-icon"]} ${styles["ControlsBST__form-message-icon--success"]}`}/>
            The BST has been updated
          </div>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-4"]}`} htmlFor="depth-value">Find the depth of a value in the BST</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-4"]}`}>
            <input className={`${styles["ControlsBST__form-input"]}`} id="depth-value" name="depth-value" type="text" />
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-4"]}`} type="button">Find depth</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-4"]}`}>
            The depth of the given value in the BST is: {"result-placeholder"}
          </div>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-5"]}`} htmlFor="height-value">Find the height of a value in the BST</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-5"]}`}>
            <input className={`${styles["ControlsBST__form-input"]}`} id="height-value" name="depth-value" type="text" />
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-5"]}`} type="button">Find height</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-5"]}`}>
            &nbsp;
          </div> */}
          {/* <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button--large"]}`} type="button">Rebalance BST</button> */}
      {/* </form> */}
    </div>
  );
};
