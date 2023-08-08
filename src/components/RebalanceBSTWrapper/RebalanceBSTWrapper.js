import styles from './RebalanceBSTWrapper.module.scss';

export const RebalanceBSTWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["RebalanceBSTWrapper"]}`}>
      {children}
    </div>
  );
};
