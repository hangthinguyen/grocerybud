import { useCallback, useState } from "react";
import Form from "../Form/Form";
import ItemsList from "../ItemsList/ItemsList";
import styles from "./InputItemsBody.module.scss";

const InputItemsBpdy = () => {
  // const [ischecked, setChecked] = useState({});
  const [items, setItems] = useState([]);

  const handleInputSubmit = useCallback(
    (userInput) => {
      setItems([
        ...items,
        {
          id: Math.random() * 1000,
          userInput: userInput,
          checked: false,
        },
      ]);
    },
    [items]
  );

  const handleChecked = useCallback(
    (id) => {
      const itemsClone = structuredClone(items);

      itemsClone.forEach((item) => {
        if (item.id === id) {
          item.checked = !item.checked;
        }
      });

      setItems(itemsClone);
    },
    [items]
  );

  const handleOnDelete = useCallback(
    (id) => {
      const itemsClone = structuredClone(items);

      itemsClone.forEach((item) => {
        if (item.id === id) {
          itemsClone.splice(itemsClone.indexOf(item), 1);
        }
      });
      setItems(itemsClone);
    },
    [items]
  );

  const handleOnClear = useCallback(() => {
    setItems([]);
  }, []);

  return (
    <div className={styles.InputItemsBody}>
      <Form onClick={handleInputSubmit} />
      <ItemsList
        items={items}
        onCheckClick={handleChecked}
        onDelete={handleOnDelete}
        onClear={handleOnClear}
      />
    </div>
  );
};

export default InputItemsBpdy;
