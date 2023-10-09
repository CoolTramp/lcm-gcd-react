import styles from "./RenderAnswers.module.css";
import TopAnswer from "./TopAnswer/TopAnswer";
import PrimeFactorization from "./PrimeFactorization/PrimeFactorization";
import CanonicalFactorization from "./CanonicalFactorization/CanonicalFactorization";
import BottomAnswer from "./BottomAnswer/BottomAnswer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function RenderAnswers() {
  const prime = useSelector((state: any) => state.primeFactors.value);
  const [show, isShow] = useState(false);

  useEffect(() => {
    prime.length >= 1 ? isShow(true) : isShow(false);
  }, [prime]);

  return (
    <div>
      <div className={`${styles.main} ${show && styles.show}`}>
        <div style={{ minHeight: 0 }}>
          <TopAnswer />
          <PrimeFactorization />
          <CanonicalFactorization />
          <BottomAnswer />
        </div>
      </div>
    </div>
  );
}
