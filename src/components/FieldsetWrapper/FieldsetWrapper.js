import styles from './FieldsetWrapper.module.scss';

export const FieldsetWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["FieldsetWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
