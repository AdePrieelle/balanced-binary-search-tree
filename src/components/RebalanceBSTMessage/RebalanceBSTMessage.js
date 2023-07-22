import styles from './RebalanceBSTMessage.module.scss';

export const RebalanceBSTMessage = ({
  rebalanceBSTMessage
}) => {
  return (
    <div className={`${styles["RebalanceBSTMessage"]}`}>
      {rebalanceBSTMessage}
    </div>
  );
};
