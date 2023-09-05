import styles from './VisualizationBSTWrapper.module.scss';

export const VisualizationBSTWrapper = ({ 
  children
}) => {
  return (
    <div className={`${styles["VisualizationBSTWrapper"]}`}>
      {children}
    </div>
  );
};
