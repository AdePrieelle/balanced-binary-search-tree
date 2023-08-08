import styles from './FormWrapper.module.scss';

export const FormWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["FormWrapper"]}`}>
      {children}
    </div>
  );
};
