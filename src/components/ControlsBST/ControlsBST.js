import styles from './ControlsBST.module.scss';

export const ControlsBST = () => {
  return (
    <div className={styles.ControlsBST}>
      <form className={styles.ControlsBST__form}>
          <label className={styles["ControlsBST__form-label"]} htmlFor="initial-values">Add initial value(s) followed by a comma and a space</label>
          <input className={styles["ControlsBST__form-input"]} id="initial-values" name="initial-values" type="text" />
          <button className={styles["ControlsBST__form-button"]}>Create BST</button>
          <label className={styles["ControlsBST__form-label"]} htmlFor="insert-values">Add consecutive value(s) followed by a comma and a space</label>
          <input className={styles["ControlsBST__form-input"]} id="insert-values" name="insert-values" type="text" />
          <button className={styles["ControlsBST__form-button"]}>Add values</button>
          <label className={styles["ControlsBST__form-label"]} htmlFor="remove-values">Remove value(s) followed by a comma and a space</label>
          <input className={styles["ControlsBST__form-input"]} id="remove-values" name="remove-values" type="text" />
          <button className={styles["ControlsBST__form-button"]}>Remove values</button>
          <label className={styles["ControlsBST__form-label"]} htmlFor="depth-value">Find the depth of a value in the BST</label>
          <input className={styles["ControlsBST__form-input"]} id="depth-value" name="depth-value" type="text" />
          <button className={styles["ControlsBST__form-button"]}>Find depth</button>
          <div className={styles["ControlsBST__form-result"]}>The depth of the given value in the BST is: {"result-placeholder"}</div>
          <label className={styles["ControlsBST__form-label"]} htmlFor="height-value">Find the height of a value in the BST</label>
          <input className={styles["ControlsBST__form-input"]} id="height-value" name="depth-value" type="text" />
          <button className={styles["ControlsBST__form-button"]}>Find height</button>
          <div className={styles["ControlsBST__form-result"]}>The height of the given value in the BST is: {"result-placeholder"}</div>
          <button className={`${styles["ControlsBST__form-button"]} ${styles["ControlsBST__form-button--large"]}`}>Rebalance BST</button>
      </form>
    </div>
  );
};
