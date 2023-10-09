import mainStales from "../Buttons.module.css";
import styles from "./Delete.module.css";
import translator from "../../../../utils/translator";
import { useDispatch } from "react-redux";
import { deleteLast } from "../../../../features/userNumbers";

export default function Delete() {
  // const userNumbers = useSelector((state: any) => state.userNumbers.value);
  const dispatch = useDispatch();
  const text = translator("delete");

  function deleteLastUserNumber() {
    dispatch(deleteLast());
  }

  return (
    <button
      onClick={() => deleteLastUserNumber()}
      className={`${mainStales.btn} ${styles["btn-del-number"]}`}
      title={text}
    ></button>
  );
}
