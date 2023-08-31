import styles from "./ComponentTitle.module.scss";

export const ComponentTitle = ({ 
  title 
}) => {
  return (
    <h2 className={`${styles["ComponentTitle"]}`}>
      {title}
    </h2>
  );
};
