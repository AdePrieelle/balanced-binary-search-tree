import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './InputIcon.module.scss';

export const InputIcon = ({ 
  isEmptyInput, 
  isInputSuccess
}) => {
  if (isEmptyInput && isInputSuccess) {
    return (null);
  } else if (!isEmptyInput && isInputSuccess) {
    return (<FontAwesomeIcon icon={faCircleCheck} className={`${styles["InputIcon"]} ${styles["InputIcon--success"]}`} />);
  } else if (!isInputSuccess) {
    return (<FontAwesomeIcon icon={faCircleExclamation} className={`${styles["InputIcon"]} ${styles["InputIcon--error"]}`} />);
  };

  return (null);
};
