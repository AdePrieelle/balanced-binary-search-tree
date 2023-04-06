import styles from './InputWrapper.module.scss';

export const InputWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["InputWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
