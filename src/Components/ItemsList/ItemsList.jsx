import Item from "../Item/Item";
import styles from "./ItemsList.module.scss";

const ItemsList = ({ onCheckClick, items, onDelete, onClear }) => {
  return (
    <div className={styles.ItemsList}>
      {items?.map((item) => (
        <Item
          userInput={item.userInput}
          checked={item.checked}
          onCheckClick={() => onCheckClick(item.id)}
          onDelete={() => onDelete(item.id)}
          key={item.id}
          id={item.id}
        />
      ))}
      <p className={styles.ClearBtn} onClick={onClear}>
        Clear Items
      </p>
    </div>
  );
};

export default ItemsList;
