import styles from "./Input.module.css";
import { useContext } from "react";
import translator from "../../../utils/translator";
import { InputValue } from "../InputContainer";

export default function Input() {
  const { input, setInput } = useContext(InputValue);

  const placeholder = translator("placeholder");
  const handleChange = (e: any) => {
    const newValue = e.target.value;
    setInput(newValue);
  };

  return (
    <input
      className={styles["input-number"]}
      type="number"
      placeholder={placeholder}
      id="input-number"
      min="2"
      max="1000000000000"
      value={input}
      onChange={handleChange}
    />
  );
}
