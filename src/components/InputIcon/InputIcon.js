import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import styles from './InputIcon.module.scss';

export const InputIcon = ({ isEmptyInput, isInputSuccess}) => {
  let inputIcon = null;
  if (isEmptyInput && isInputSuccess) {
    inputIcon = null;
  } else if (!isEmptyInput && isInputSuccess) {
    inputIcon = <FontAwesomeIcon icon={faCircleCheck} className={`${styles["InputIcon"]} ${styles["InputIcon--success"]}`}/>;
  } else if (!isInputSuccess) {
    inputIcon = <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["InputIcon"]} ${styles["InputIcon--error"]}`}/>;
  };

  return (
    inputIcon
  );
};
