import styles from './RebalanceBSTTitleWrapper.module.scss';

export const RebalanceBSTTitleWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["RebalanceBSTTitleWrapper"]}`}>
      {children}
    </div>
  );
};
