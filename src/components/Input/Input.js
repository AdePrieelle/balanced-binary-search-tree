import styles from './Input.module.scss';

export const Input = ({ 
  input,
  inputId,
  inputName,
  inputOnChange,
  inputRegex,
  inputSuccess
}) => {
  return (
    <input pattern={inputRegex} className={`${styles["Input"]} ${(input === "" && (inputSuccess)) ? "" : inputSuccess ? styles["Input--success"] : styles["Input--error"]}`} id={inputId} name={inputName} type="text" value={input} onChange={inputOnChange} />
  );
};
