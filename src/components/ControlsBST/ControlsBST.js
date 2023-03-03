import styles from './ControlsBST.module.scss';

export const ControlsBST = () => {
  return (
    <div className={styles.ControlsBST}>
      <form className={styles.ControlsBST__form}>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-1"]}`} htmlFor="initial-values">Add initial value(s) followed by a comma and a space</label>
          <input className={`${styles["ControlsBST__form-input"]} ${styles["ControlsBST__form-input-1"]}`} id="initial-values" name="initial-values" type="text" />
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-1"]}`}>Create BST</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-1"]}`}>Please enter the initial values in the correct format</div>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-2"]}`} htmlFor="insert-values">Add consecutive value(s) followed by a comma and a space</label>
          <input className={`${styles["ControlsBST__form-input"]} ${styles["ControlsBST__form-input-2"]}`} id="insert-values" name="insert-values" type="text" />
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-2"]}`}>Add values</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-2"]}`}>Please enter the consecutive values in the correct format</div>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-3"]}`} htmlFor="remove-values">Remove value(s) followed by a comma and a space</label>
          <input className={`${styles["ControlsBST__form-input"]} ${styles["ControlsBST__form-input-3"]}`} id="remove-values" name="remove-values" type="text" />
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-3"]}`}>Remove values</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-3"]}`}>Please enter the remove values in the correct format</div>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-4"]}`} htmlFor="depth-value">Find the depth of a value in the BST</label>
          <input className={`${styles["ControlsBST__form-input"]} ${styles["ControlsBST__form-input-4"]}`} id="depth-value" name="depth-value" type="text" />
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-4"]}`}>Find depth</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-4"]}`}>The depth of the given value in the BST is: {"result-placeholder"}</div>
          <label className={`${styles["ControlsBST__form-label"]} ${styles["ControlsBST__form-label-5"]}`} htmlFor="height-value">Find the height of a value in the BST</label>
          <input className={`${styles["ControlsBST__form-input"]} ${styles["ControlsBST__form-input-5"]}`} id="height-value" name="depth-value" type="text" />
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button-5"]}`}>Find height</button>
          <div className={`${styles["ControlsBST__form-message"]} ${styles["ControlsBST__form-message-5"]}`}>The height of the given value in the BST is: {"result-placeholder"}</div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button--large"]}`}>Rebalance BST</button>
      </form>
    </div>
  );
};
