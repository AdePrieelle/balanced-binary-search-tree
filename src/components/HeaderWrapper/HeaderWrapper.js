import styles from './HeaderWrapper.module.scss';

export const HeaderWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["HeaderWrapper"]}`}>
      {children}
    </div>
  );
};
