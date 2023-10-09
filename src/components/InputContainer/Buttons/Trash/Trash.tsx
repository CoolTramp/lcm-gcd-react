import mainStyles from "../Buttons.module.css";
import styles from "./Trash.module.css";
import translator from "../../../../utils/translator";
import { useSelector, useDispatch } from "react-redux";
import { deleteLast } from "../../../../features/userNumbers";
import "./style.css";
import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";

export default function Trash() {
  const userNumbers = useSelector((state: any) => state.userNumbers.value);
  const text = translator("trash");
  const dispatch = useDispatch();

  function deleteAll() {
    let count = 0;
    function next() {
      if (userNumbers.length > count++) {
        dispatch(deleteLast());
        setTimeout(next, 100);
      }
    }
    next();
  }
  const [isClicked, setIsClicked] = useState(false);

  function animation() {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  }

  const ref = useRef(null);
  return (
    <CSSTransition
      classNames="click"
      in={isClicked}
      timeout={1000}
      nodeRef={ref}
    >
      <button
        ref={ref}
        onClick={() => {
          deleteAll();
          animation();
        }}
        className={`${mainStyles.btn} ${styles["btn-trash"]}`}
        title={text}
      ></button>
    </CSSTransition>
  );
}
