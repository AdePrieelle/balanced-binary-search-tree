import styles from './FormWrapper.module.scss';

export const FormWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={styles.FormWrapper} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
