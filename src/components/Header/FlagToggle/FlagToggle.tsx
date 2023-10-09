import styles from "./FlagToggle.module.css";
import { useState } from "react";

import CurrentLanguages from "./CurrentLanguages/CurrentLanguages";
import OthersLanguages from "./OthersLanguages/OthersLanguages";

export default function FlagToggle() {
  const [animation, setAnimation] = useState(true);
  function toggleAnimation() {
    animation ? setAnimation(false) : setAnimation(true);
  }
  return (
    <div className={styles.main}>
      <CurrentLanguages toggleAnimation={toggleAnimation} />
      <OthersLanguages animation={animation} />
    </div>
  );
}
