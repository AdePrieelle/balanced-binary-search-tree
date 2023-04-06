import styles from './LabelWrapper.module.scss';

export const LabelWrapper = ({ children, gridArea = null }) => {
  return (
    <div className={`${styles["LabelWrapper"]}`} style={{ gridArea: gridArea}}>
      {children}
    </div>
  );
};
