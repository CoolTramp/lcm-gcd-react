import styles from "./HeadingCheckBoxContainer.module.css";
import translator from "../../../../utils/translator";

export default function HeadingCheckBoxContainer() {
  const text = translator("headingCheckBoxContainer");
  return (
    <div className={styles.main}>
      <p className={styles.heading}>{text}</p>
    </div>
  );
}
