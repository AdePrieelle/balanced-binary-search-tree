import styles from './RebalanceBSTButtonWrapper.module.scss';

export const RebalanceBSTButtonWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["RebalanceBSTButtonWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
