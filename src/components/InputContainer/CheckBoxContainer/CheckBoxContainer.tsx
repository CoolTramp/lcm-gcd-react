import styles from "./CheckBoxContainer.module.css";
import HeadingCheckBoxContainer from "./HeadingCheckBoxContainer/HeadingCheckBoxContainer";
import CheckBoxGCD from "./CheckBoxGCD/CheckBoxGCD";
import CheckBoxLCM from "./CheckBoxLCM/CheckBoxLCM";
import ButtonCalculate from "./ButtonCalculate/ButtonCalculate";
import TextLCM from "./TextLCM/TextLCM";
import TextGCD from "./TextGCD/TextGCD";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function ContainerEnter() {
  const userNumbers = useSelector((state: any) => state.userNumbers.value);
  const [show, setShow] = useState(false);

  useEffect(() => {
    userNumbers.length >= 1 ? setShow(true) : setShow(false);
  }, [userNumbers]);

  return (
    <div className={`${styles["hidden-container"]} ${show && styles.show}`}>
      <div style={{ minHeight: "0" }}>
        <div className={styles.main}>
          <HeadingCheckBoxContainer />
          <TextLCM />
          <CheckBoxLCM />
          <TextGCD />
          <CheckBoxGCD />
          <ButtonCalculate />
        </div>
      </div>
    </div>
  );
}
