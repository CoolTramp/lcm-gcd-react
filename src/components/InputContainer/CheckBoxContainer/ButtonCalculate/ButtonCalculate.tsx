import styles from "./ButtonCalculate.module.css";
import btnStyle from "../../Buttons/Buttons.module.css";
import translator from "../../../../utils/translator";
import { useDispatch, useSelector } from "react-redux";
import { PreparingCalculations } from "../../../../computing/calculate/PreparingCalculations";
import {
  addPrimeFactors,
  cleanPrimeFactors,
} from "../../../../features/answers/primeFactors.tsx";
import { addCanonicalStringAnswer } from "../../../../features/answers/canonicalString.tsx";
import { Canonical } from "../../../../computing/calculate/Canonical.ts";
import { LCM } from "../../../../computing/calculate/LCM.ts";
import {
  addLCMStringAnswer,
  cleanLCMStringAnswer,
} from "../../../../features/answers/lcmString.tsx";
import { GCD } from "../../../../computing/calculate/GCD.ts";
import {
  addGCDStringAnswer,
  cleanGCDStringAnswer,
} from "../../../../features/answers/gcdString.tsx";
import {
  addLCMAnswer,
  cleanLCMAnswer,
} from "../../../../features/answers/lcmAnswer.tsx";
import {
  addGCDAnswer,
  cleanGCDAnswer,
} from "../../../../features/answers/gcdAnswer.tsx";
import { useEffect } from "react";

export default function ButtonCalculate() {
  const title = translator("buttonCalculate");
  const dispatch = useDispatch();
  const userNumbers = useSelector((state: any) => state.userNumbers.value);
  const checkboxLCM = useSelector((state: any) => state.checkboxLCM.value);
  const checkboxGCD = useSelector((state: any) => state.checkboxGCD.value);

  useEffect(() => {}, [checkboxGCD, checkboxLCM]);
  const prime = useSelector((state: any) => state.primeFactors.value);

  function compute() {
    dispatch(cleanPrimeFactors());

    const prep = new PreparingCalculations(userNumbers);
    dispatch(addPrimeFactors(prep.paddedStrings));

    const canonical = new Canonical(userNumbers);
    dispatch(addCanonicalStringAnswer(canonical.getString()));

    dispatch(cleanLCMAnswer());
    dispatch(cleanGCDAnswer());
    dispatch(cleanLCMStringAnswer());
    dispatch(cleanGCDStringAnswer());

    console.log(prime);
    if (checkboxLCM) {
      const lcm = new LCM(canonical.data, userNumbers);
      dispatch(addLCMStringAnswer(lcm.getString()));
      dispatch(addLCMAnswer(lcm.getAnswer()));
    }

    if (checkboxGCD) {
      const gcd = new GCD(canonical.data, userNumbers);
      dispatch(addGCDStringAnswer(gcd.getString()));
      dispatch(addGCDAnswer(gcd.getAnswer()));
    }
  }

  return (
    <div className={styles.main}>
      <button
        onClick={() => compute()}
        className={`${btnStyle.btn} ${styles["btn-calcutalte"]}`}
        title={title}
      ></button>
    </div>
  );
}
