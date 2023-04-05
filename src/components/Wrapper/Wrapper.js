import styles from './Wrapper.module.scss';

export const Wrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["Wrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
