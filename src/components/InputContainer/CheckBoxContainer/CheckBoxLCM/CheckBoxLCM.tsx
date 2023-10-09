import { useDispatch } from "react-redux";
import { changeLCMCheckboxValue } from "../../../../features/userCheckbox/checkboxLCM";
import styles from "./CheckBoxLCM.module.css";
import { useEffect, useState } from "react";

export default function CheckBoxLCM() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(false);

  useEffect(() => {
    setValue(value);
  }, [value]);

  const handleChange = () => {
    setValue(!value);
    dispatch(changeLCMCheckboxValue(!value));
  };

  return (
    <div className={styles.main}>
      <input
        checked={value}
        onChange={handleChange}
        type="checkbox"
        name="LCM"
      />
    </div>
  );
}
