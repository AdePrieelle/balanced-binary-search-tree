import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import styles from './InputIcon.module.scss';

export const InputIcon = ({ input, inputSuccess}) => {
  let inputIcon = "";
  if (input === "" && inputSuccess) {
    inputIcon = null;
  } else if (input !== "" && inputSuccess) {
    inputIcon = <FontAwesomeIcon icon={faCircleCheck} className={`${styles["InputIcon"]} ${styles["InputIcon--success"]}`}/>;
  } else if (!inputSuccess) {
    inputIcon = <FontAwesomeIcon icon={faCircleExclamation} className={`${styles["InputIcon"]} ${styles["InputIcon--error"]}`}/>;
  };

  return (
    inputIcon
  );
};
