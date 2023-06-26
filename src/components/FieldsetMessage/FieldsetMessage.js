import styles from './FieldsetMessage.module.scss';

export const FieldsetMessage = ({ 
  fieldsetMessage,
  isInputSuccess
}) => {
  return (
    <div className={`${styles["FieldsetMessage"]} ${isInputSuccess ? styles["FieldsetMessage--success"] : styles["FieldsetMessage--error"]}`}>
      {fieldsetMessage}
    </div>
  );
};
