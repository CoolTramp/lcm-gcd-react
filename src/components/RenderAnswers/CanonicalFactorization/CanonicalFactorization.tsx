import styles from "./CanonicalFactorization.module.css";
import translator from "../../../utils/translator";
import { useSelector } from "react-redux";
import useWindowWidth from "../../../utils/getSizeScreen";

export default function CanonicalFactorization() {
  const text = translator("canonicalFactorization");
  const canonical = useSelector((state: any) => state.canonical.value);

  const style: any = {
    "--width-value": `${useWindowWidth()}px`,
  };
  return (
    <div className={styles.main}>
      <p className={styles.text}>{text}</p>

      <div className={styles.container}>
        <p
          style={style}
          className={styles.canonical}
          dangerouslySetInnerHTML={{ __html: canonical }}
        />
      </div>
    </div>
  );
}
