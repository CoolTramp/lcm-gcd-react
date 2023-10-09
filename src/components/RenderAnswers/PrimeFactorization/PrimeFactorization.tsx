import styles from "./PrimeFactorization.module.css";
import translator from "../../../utils/translator";
import PrimeTable from "./PrimeTable/PrimeTable";

export default function PrimeFactorization() {
  const text = translator("primeFactorization");

  return (
    <>
      <p className={styles.text}>{text}</p>
      <div className={styles.main}>
        <PrimeTable />
      </div>
    </>
  );
}
