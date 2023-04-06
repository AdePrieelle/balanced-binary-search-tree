import styles from './FormMessageWrapper.module.scss';

export const FormMessageWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["FormMessageWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
