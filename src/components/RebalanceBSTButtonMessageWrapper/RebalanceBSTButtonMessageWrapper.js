import styles from './RebalanceBSTButtonMessageWrapper.module.scss';

export const RebalanceBSTButtonMessageWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["RebalanceBSTButtonMessageWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
