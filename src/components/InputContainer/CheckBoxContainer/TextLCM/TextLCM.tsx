import styles from "./TextLCM.module.css";
import translator from "../../../../utils/translator";

export default function TextLCM() {
  const text = translator("textLCM");
  return (
    <div className={styles.main}>
      <p id="text-checkbox-lcm">{text}</p>
    </div>
  );
}
