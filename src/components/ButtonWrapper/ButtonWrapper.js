import styles from './ButtonWrapper.module.scss';

export const ButtonWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["ButtonWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
