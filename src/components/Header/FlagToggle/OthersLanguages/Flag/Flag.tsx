import styles from "./Flag.module.css";
import { change } from "../../../../../features/currentLanguage";
import { useDispatch } from "react-redux";

type Props = { name: string };

export default function Flag(props: Props) {
  const { name } = props;

  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(change(name))}
      id="flag"
      className={`${styles.main} ${styles[name]}`}
    ></button>
  );
}
