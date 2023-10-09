import { useDispatch } from "react-redux";
import { changeGCDCheckboxValue } from "../../../../features/userCheckbox/checkboxGCD";
import styles from "./CheckBoxGCD.module.css";

export default function CheckBoxGCD() {
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const newValue = e.target.checked;
    dispatch(changeGCDCheckboxValue(newValue));
  };

  return (
    <div className={styles.main}>
      <input onClick={handleChange} type="checkbox" name="GCD" />
    </div>
  );
}
