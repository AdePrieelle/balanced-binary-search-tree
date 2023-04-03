import styles from './Button.module.scss';

export const Button = ({ children, onClickHandler}) => {
  return (
    <button className={`${styles["Button"]}`} type="button" onClick={onClickHandler}>
      {children}
    </button>
  );
};
