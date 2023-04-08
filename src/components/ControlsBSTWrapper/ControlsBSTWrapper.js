import styles from './ControlsBSTWrapper.module.scss';

export const ControlsBSTWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={styles.ControlsBSTWrapper} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
