import styles from './ControlsBSTWrapper.module.scss';

export const ControlsBSTWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["ControlsBSTWrapper"]}`}>
      {children}
    </div>
  );
};
