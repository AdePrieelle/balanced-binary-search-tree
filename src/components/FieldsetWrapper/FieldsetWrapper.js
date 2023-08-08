import styles from './FieldsetWrapper.module.scss';

export const FieldsetWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["FieldsetWrapper"]}`}>
      {children}
    </div>
  );
};
