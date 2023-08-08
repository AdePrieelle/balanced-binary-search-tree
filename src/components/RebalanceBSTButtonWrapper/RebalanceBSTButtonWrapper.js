import styles from './RebalanceBSTButtonWrapper.module.scss';

export const RebalanceBSTButtonWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["RebalanceBSTButtonWrapper"]}`}>
      {children}
    </div>
  );
};
