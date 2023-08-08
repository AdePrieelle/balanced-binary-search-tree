import styles from './InputIconWrapper.module.scss';

export const InputIconWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["InputIconWrapper"]}`}>
      {children}
    </div>
  );
};
