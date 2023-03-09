import styles from './ControlsBST.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

export const ControlsBST = () => {
  return (
    <div className={styles.ControlsBST}>
      <form className={styles.ControlsBST__form}>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-1"]}`} htmlFor="initial-values">Add initial value(s) followed by a comma and a space</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-1"]}`}>
            <input className={`${styles["ControlsBST__form-input"]} ${styles["ControlsBST__form-input--error"]}`} id="initial-values" name="initial-values" type="text" />
            {/* <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--success"]}`}/> */}
            <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--error"]}`} />
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-1"]}`} type="button">Create BST</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-1"]} ${styles["ControlsBST__form-message--error"]}`}>Please enter the initial values in the correct format</div>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-2"]}`} htmlFor="insert-values">Add consecutive value(s) followed by a comma and a space</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-2"]}`}>
            <input className={`${styles["ControlsBST__form-input"]} ${styles["ControlsBST__form-input--success"]}`} id="insert-values" name="insert-values" type="text" />
            <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--success"]}`}/>
            {/* <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--error"]}`} /> */}
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-2"]}`} type="button">Add values</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-2"]} ${styles["ControlsBST__form-message--success"]}`}>Please enter the consecutive values in the correct format</div>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-3"]}`} htmlFor="remove-values">Remove value(s) followed by a comma and a space</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-3"]}`}>
            <input className={`${styles["ControlsBST__form-input"]}`} id="remove-values" name="remove-values" type="text" />
            {/* <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--success"]}`}/> */}
            <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--error"]}`} />
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-3"]}`} type="button">Remove values</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-3"]}`}>Please enter the remove values in the correct format</div>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-4"]}`} htmlFor="depth-value">Find the depth of a value in the BST</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-4"]}`}>
            <input className={`${styles["ControlsBST__form-input"]}`} id="depth-value" name="depth-value" type="text" />
            {/* <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--success"]}`}/> */}
            <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--error"]}`} />
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-4"]}`} type="button">Find depth</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-4"]}`}>The depth of the given value in the BST is: {"result-placeholder"}</div>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-5"]}`} htmlFor="height-value">Find the height of a value in the BST</label>
          <div className={`${styles["ControlsBST__form-input-icon-wrapper"]} ${styles["ControlsBST__form-input-icon-wrapper-5"]}`}>
            <input className={`${styles["ControlsBST__form-input"]}`} id="height-value" name="depth-value" type="text" />
            {/* <FontAwesomeIcon icon={faCircleCheck} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--success"]}`}/> */}
            <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["ControlsBST__form-input-icon"]} ${styles["ControlsBST__form-input-icon--error"]}`} />
          </div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-5"]}`} type="button">Find height</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-5"]}`}>The height of the given value in the BST is: {"result-placeholder"}</div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button--large"]}`} type="button">Rebalance BST</button>
      </form>
    </div>
  );
};
