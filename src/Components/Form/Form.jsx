import { useCallback, useState } from "react";
import styles from "./Form.module.scss";

const Form = ({ onClick }) => {
  const [userInput, setUserInput] = useState("");

  const handleOnClick = useCallback(() => {
    onClick(userInput);
    setUserInput("");
  }, [userInput, onClick]);

  return (
    <div>
      <input
        type="text"
        id="input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleOnClick}>Submit</button>
    </div>
  );
};

export default Form;
