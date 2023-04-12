import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FieldsetMessageUpdatedSuccessMessage.module.scss';

export const FieldsetMessageUpdatedSuccessMessage = ({ icon = true, message }) => {
  return (
    <div className={`${styles["FieldsetMessageUpdatedSuccessMessage"]}`}>
      {
          icon 
        ? <FontAwesomeIcon icon={faCircleCheck} className={`${styles["FieldsetMessageUpdatedSuccessMessage__icon"]} ${styles["FieldsetMessageUpdatedSuccessMessage__icon--success"]}`}/>
        : null
      }
      <div className={`${styles["FieldsetMessageUpdatedSuccessMessage__message"]}`}>{message}</div>
    </div>
  );
};
