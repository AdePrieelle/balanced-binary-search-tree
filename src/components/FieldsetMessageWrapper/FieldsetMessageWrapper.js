import styles from './FieldsetMessageWrapper.module.scss';

export const FieldsetMessageWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["FieldsetMessageWrapper"]}`}>
      {children}
    </div>
  );
};
