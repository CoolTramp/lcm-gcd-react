import styles from "./TextGCD.module.css";
import translator from "../../../../utils/translator";

export default function TextGCD() {
  const text = translator("textGCD");
  return (
    <div className={styles.main}>
      <p id="text-checkbox-gcd">{text}</p>
    </div>
  );
}
