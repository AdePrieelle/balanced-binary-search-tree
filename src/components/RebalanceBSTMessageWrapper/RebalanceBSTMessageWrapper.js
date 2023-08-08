import styles from './RebalanceBSTMessageWrapper.module.scss';

export const RebalanceBSTMessageWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["RebalanceBSTMessageWrapper"]}`}>
      {children}
    </div>
  );
};
