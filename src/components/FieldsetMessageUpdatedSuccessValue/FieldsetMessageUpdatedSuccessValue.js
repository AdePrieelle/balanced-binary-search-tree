import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FieldsetMessageUpdatedSuccessValue.module.scss';

export const FieldsetMessageUpdatedSuccessValue = ({ 
  icon = true, 
  message 
}) => {
  return (
    <div className={`${styles["FieldsetMessageUpdatedSuccessValue"]}`}>
      {
          icon 
        ? <FontAwesomeIcon icon={faCircleCheck} className={`${styles["FieldsetMessageUpdatedSuccessValue__icon"]} ${styles["FieldsetMessageUpdatedSuccessValue__icon--success"]}`}/>
        : null
      }
      <div className={`${styles["FieldsetMessageUpdatedSuccessValue__message"]}`}>
        {message}
      </div>
    </div>
  );
};
