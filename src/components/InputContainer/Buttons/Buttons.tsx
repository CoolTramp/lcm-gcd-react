import styles from "./Buttons.module.css";
import Add from "./Add/Add";
import Delete from "./Delete/Delete";
import Trash from "./Trash/Trash";

export default function Buttons() {
  return (
    <div className={styles.main}>
      <Add />
      <Delete />
      <Trash />
    </div>
  );
}
