import styles from './Label.module.scss';

export const Label = ({ children, inputId}) => {
  return (
    <label className={`${styles["Label"]}`} htmlFor={inputId}>
      {children}
    </label>
  );
};
