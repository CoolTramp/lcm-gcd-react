import mainStyles from "../Buttons.module.css";
import styles from "./Add.module.css";
import translator from "../../../../utils/translator";
import { addNumber } from "../../../../features/userNumbers";
import { useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { InputValue } from "../../InputContainer";
import { haveError, clean } from "../../../../features/inputUserError";

export default function Add() {
  const text = translator("add");
  const dispatch = useDispatch();

  function addUserNumber(num: string) {
    if (cheackInput(num)) {
      dispatch(addNumber(num));
      cleanInput();
    }
  }
  const { input, setInput } = useContext(InputValue);

  useEffect(() => {
    const handleKeyUp = (event: any) => {
      if (event.key === "Enter") {
        addUserNumber(input);
      }
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [input]);

  function cheackInput(num: string) {
    if (Number.parseInt(num) <= 1 || !Boolean(num)) {
      userHaveInput();
      return false;
    }
    return true;
  }

  function userHaveInput() {
    dispatch(haveError());
    setTimeout(() => {
      dispatch(clean());
    }, 2000);
  }

  function cleanInput() {
    setInput("");
  }

  return (
    <button
      onClick={() => addUserNumber(input)}
      className={`${mainStyles.btn} ${styles["btn-add-number"]}`}
      title={text}
    ></button>
  );
}
