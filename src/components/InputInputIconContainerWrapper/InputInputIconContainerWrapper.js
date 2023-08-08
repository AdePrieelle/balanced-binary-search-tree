import styles from './InputInputIconContainerWrapper.module.scss';

export const InputInputIconContainerWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["InputInputIconContainerWrapper"]}`}>
      {children}
    </div>
  );
};
