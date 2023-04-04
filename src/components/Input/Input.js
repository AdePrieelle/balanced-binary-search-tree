import styles from './Input.module.scss';

export const Input = ({ 
  id,
  input,
  inputOnChange,
  inputName,
  inputRegex,
  inputSuccess
}) => {
  return (
    <input pattern={inputRegex} className={`${styles["Input"]} ${(input === "" && (inputSuccess)) ? "" : inputSuccess ? styles["Input--success"] : styles["Input--error"]}`} id={id} name={inputName} type="text" value={input} onChange={inputOnChange} />
  );
};
