import styles from "./PromptForUser.module.css";
import translator from "../../../utils/translator";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function PromptForUser() {
  const text = translator("promptForUser");

  let userHaveInputError: string = useSelector(
    (state: any) => state.inputUserError.value
  );

  const [hidden, setHidden] = useState(true);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (userHaveInputError) {
      setHidden(false);
      setFlash(true);
    } else {
      setFlash(false);
    }
  }, [userHaveInputError]);

  return (
    <div className={`${styles.hidden} ${!hidden && styles.show}`}>
      <div style={{ minHeight: "0" }}>
        <p className={`${styles.main} ${flash && styles.flash}`}>{text}</p>
      </div>
    </div>
  );
}
