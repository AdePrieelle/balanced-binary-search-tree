import styles from './FormFieldsetWrapper.module.scss';

export const FormFieldsetWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["FormFieldsetWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
