import styles from "./OthersLanguages.module.css";
import Flag from "./Flag/Flag";

import { CSSTransition } from "react-transition-group";
import "./animation.css";
import { useRef } from "react";
import { useSelector } from "react-redux";

type Props = {
  animation: boolean;
};

export default function OthersLanguages(prop: Props) {
  const AllLanguages: string[] = useSelector(
    (state: any) => state.allLanguges.value
  );
  const currentLanguage = useSelector(
    (state: any) => state.currentLanguage.value
  );

  const nodeRef = useRef(null);
  const { animation } = prop;
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={animation}
      timeout={2000}
      classNames="animation"
    >
      <div ref={nodeRef} className={styles.main}>
        {AllLanguages.map((language, index) => {
          if (language !== currentLanguage)
            return <Flag key={index} name={language} />;
        })}
      </div>
    </CSSTransition>
  );
}
