import styles from "./Heading.module.css";
import translator from "../../../utils/translator";

export default function Heading() {
  const text = translator("heading");

  return (
    <div className={styles.main}>
      <p className={styles.heading}>{text}</p>
    </div>
  );
}
