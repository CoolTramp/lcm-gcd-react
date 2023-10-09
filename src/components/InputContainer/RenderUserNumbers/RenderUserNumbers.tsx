import styles from "./RenderUserNumbers.module.css";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { createRef, useEffect, useState } from "react";
import "./style.css";

export default function RenderUserNumbers() {
  const userNumbers = useSelector((state: any) => state.userNumbers.value);

  let userHaveInputError: string = useSelector(
    (state: any) => state.inputUserError.value
  );

  const [topValue, setTopValue] = useState(0);
  const [leftValue, setLeftValue] = useState(0);

  function getSize() {
    const EXTRA_PX = 100;
    const input = document.getElementById("input-number");

    if (input) {
      let { top, left } = input?.getBoundingClientRect();

      if (userHaveInputError) top += EXTRA_PX;
      setLeftValue(left);
      setTopValue(top);
    }
  }

  useEffect(() => {
    getSize();

    window.addEventListener("resize", getSize);

    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, [leftValue, topValue, userHaveInputError]);

  return (
    <TransitionGroup>
      {userNumbers.map((number: number, index: number) => {
        const nodeRef = createRef<HTMLDivElement>();

        const style = {
          "--top-value": `${topValue}px`,
          "--left-value": `${leftValue}px`,
        };

        return (
          <CSSTransition
            key={index}
            nodeRef={nodeRef}
            timeout={1000}
            classNames="number"
            style={style}
          >
            <div ref={nodeRef} className={styles.number}>
              {number}
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}
