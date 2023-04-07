import styles from './RebalanceButtonWrapper.module.scss';

export const RebalanceButtonWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["RebalanceButtonWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
