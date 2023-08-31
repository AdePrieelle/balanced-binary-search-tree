import styles from './ComponentTitleWrapper.module.scss';

export const ComponentTitleWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["ComponentTitleWrapper"]}`}>
      {children}
    </div>
  );
};
