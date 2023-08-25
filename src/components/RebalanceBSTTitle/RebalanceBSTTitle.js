import styles from './RebalanceBSTTitle.module.scss';

export const RebalanceBSTTitle = ({ 
  children
}) => {
  return (
    <div className={`${styles["RebalanceBSTTitle"]}`}>
      {children}
    </div>
  );
};
