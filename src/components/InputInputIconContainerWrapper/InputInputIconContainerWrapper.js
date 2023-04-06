import styles from './InputInputIconContainerWrapper.module.scss';

export const InputInputIconContainerWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["InputInputIconContainerWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
