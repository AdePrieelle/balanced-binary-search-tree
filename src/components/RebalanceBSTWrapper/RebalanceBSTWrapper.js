import styles from './RebalanceBSTWrapper.module.scss';

export const RebalanceBSTWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["RebalanceBSTWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
