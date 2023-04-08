import styles from './HeaderWrapper.module.scss';

export const HeaderWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={styles.HeaderWrapper} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
