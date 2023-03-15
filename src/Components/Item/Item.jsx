import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Item.module.scss";

const Item = ({ userInput, checked, onCheckClick, onDelete }) => {
  return (
    <div className={styles.Item}>
      <p>{userInput}</p>
      <div className={styles.icons}>
        <div onClick={onCheckClick}>
          {checked ? (
            <FontAwesomeIcon icon={faCircleCheck} />
          ) : (
            <FontAwesomeIcon icon={faCircle} />
          )}
        </div>
        <FontAwesomeIcon icon={faTrashCan} onClick={onDelete} />
      </div>
    </div>
  );
};

export default Item;
