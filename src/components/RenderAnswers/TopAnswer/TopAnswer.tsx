import styles from "./TopAnswer.module.css";
import translator from "../../../utils/translator";
import { useSelector } from "react-redux";

export default function TopAnswer() {
  const lcm = translator("textLCM");
  const gcd = translator("textGCD");
  const lcmAnswer = useSelector((state: any) => state.lcmAnswer.value);
  const gcdAnswer = useSelector((state: any) => state.gcdAnswer.value);

  return (
    <div style={{ textAlign: "center" }}>
      <div className={styles.main}>
        <div className={`${styles.hidden} ${lcmAnswer && styles.show}`}>
          <div className={styles.container}>
            <p className={styles["lcm-text"]}>{lcm}</p>
            <p className={styles["lcm-answer"]}>{lcmAnswer}</p>
          </div>
        </div>
        <div className={`${styles.hidden} ${gcdAnswer && styles.show}`}>
          <div className={styles.container}>
            <p className={styles["gcd-text"]}>{gcd}</p>
            <p className={styles["gcd-answer"]}>{gcdAnswer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
