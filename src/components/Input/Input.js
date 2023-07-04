import styles from './Input.module.scss';

export const Input = ({ 
  input,
  inputId,
  inputName,
  inputOnChange,
  isEmptyInput,
  isInputSuccess,
  regex
}) => {
  return (
    <input pattern={regex} className={`${styles["Input"]} ${(isEmptyInput && isInputSuccess) ? "" : isInputSuccess ? styles["Input--success"] : styles["Input--error"]}`} id={inputId} name={inputName} type="text" value={input} onChange={inputOnChange} />
  );
};
