import styles from './RebalanceBSTMessageWrapper.module.scss';

export const RebalanceBSTMessageWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["RebalanceBSTMessageWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
