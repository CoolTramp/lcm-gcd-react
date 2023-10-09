import styles from "./InputContainer.module.css";
import PromptForUser from "./PromptForUser/PromptForUser";
import Input from "./Input/Input";
import Buttons from "./Buttons/Buttons";
import { createContext, useState } from "react";
import RenderUserNumbers from "./RenderUserNumbers/RenderUserNumbers";
import CheckBoxContainer from "./CheckBoxContainer/CheckBoxContainer";

interface ContextProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const initialValue: ContextProps = {
  input: "",
  setInput: () => {},
};

export const InputValue = createContext<ContextProps>(initialValue);

export default function InputContainer() {
  const [input, setInput] = useState("");

  return (
    <div className={styles.main}>
      <PromptForUser />
      <div className={styles["input-container"]}>
        <InputValue.Provider value={{ input, setInput }}>
          <Input />
          <Buttons />
        </InputValue.Provider>
      </div>
      <RenderUserNumbers />
      <CheckBoxContainer />
    </div>
  );
}
