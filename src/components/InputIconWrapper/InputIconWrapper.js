import styles from './InputIconWrapper.module.scss';

export const InputIconWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["InputIconWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
