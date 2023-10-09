import styles from "./CurrentLanguages.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

type Props = {
  toggleAnimation: () => void;
};

export default function CurrentLanguages(prop: Props) {
  const { toggleAnimation } = prop;
  const currentLanguage = useSelector(
    (state: any) => state.currentLanguage.value
  );

  return (
    <button
      onClick={() => toggleAnimation()}
      className={`${styles.main} ${styles[currentLanguage]}`}
    ></button>
  );
}
