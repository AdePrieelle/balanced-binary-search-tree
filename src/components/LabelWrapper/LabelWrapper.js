import styles from './LabelWrapper.module.scss';

export const LabelWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["LabelWrapper"]}`}>
      {children}
    </div>
  );
};
