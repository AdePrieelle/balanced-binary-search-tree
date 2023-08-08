import styles from './InputWrapper.module.scss';

export const InputWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["InputWrapper"]}`}>
      {children}
    </div>
  );
};
