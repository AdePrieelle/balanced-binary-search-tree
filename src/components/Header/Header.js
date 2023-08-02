import styles from "./Header.module.scss";

export const Header = ({ title }) => {
  return (
    <h1 className={styles.Header}>{title}</h1>
  );
};
