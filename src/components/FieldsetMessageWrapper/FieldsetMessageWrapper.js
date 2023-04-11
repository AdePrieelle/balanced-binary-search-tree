import styles from './FieldsetMessageWrapper.module.scss';

export const FieldsetMessageWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["FieldsetMessageWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
