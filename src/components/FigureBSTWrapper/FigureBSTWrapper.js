import styles from './FigureBSTWrapper.module.scss';

export const FigureBSTWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["FigureBSTWrapper"]}`}>
      {children}
    </div>
  );
};
