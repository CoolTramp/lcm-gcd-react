import styles from "./BottomAnswer.module.css";
import translator from "../../../utils/translator";
import { useSelector } from "react-redux/es/hooks/useSelector";
import useWindowWidth from "../../../utils/getSizeScreen";

export default function BottomAnswer() {
  const textLCM = translator("textLCM");
  const textGCD = translator("textGCD");
  const answer = translator("bottomAnswer");

  const lcm = useSelector((state: any) => state.lcm.value);
  const gcd = useSelector((state: any) => state.gcd.value);

  const lcmString = textLCM + lcm;
  const gcdString = textGCD + gcd;

  const style: any = {
    "--width-value": `${useWindowWidth()}px`,
  };

  return (
    <div
      style={style}
      className={`${styles.hidden} ${(lcm || gcd) && styles.show}`}
    >
      <div style={{ minHeight: 0 }}>
        <p className={styles.text} id="span-answer">
          {answer}
        </p>
        <div className={styles.main}>
          <div className={`${styles.hidden} ${lcm && styles.show}`}>
            <div className={styles.container}>
              <p
                className={styles["lcm-answer"]}
                dangerouslySetInnerHTML={{ __html: lcmString }}
              />
            </div>
          </div>
          <div className={`${styles.hidden} ${gcd && styles.show}`}>
            <div className={styles.container}>
              <p
                className={styles["gcd-answer"]}
                dangerouslySetInnerHTML={{ __html: gcdString }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
