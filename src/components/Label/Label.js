import styles from './Label.module.scss';

export const Label = ({ children, id}) => {
  return (
    <label className={`${styles["Label"]}`} htmlFor={id}>
      {children}
    </label>
  );
};
