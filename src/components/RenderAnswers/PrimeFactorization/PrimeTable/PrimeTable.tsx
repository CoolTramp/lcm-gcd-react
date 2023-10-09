import styles from "./PrimeTable.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import useWindowWidth from "../../../../utils/getSizeScreen";

export default function PrimeTable() {
  const primes: string[] = useSelector(
    (state: any) => state.primeFactors.value
  );

  const style: any = {
    "--width-value": `${useWindowWidth()}px`,
  };
  return (
    <div className={styles.container}>
      <div style={style} className={styles.main}>
        <table>
          <tbody>
            <tr>
              {primes.map((str, index) => {
                return (
                  <th
                    className={styles.prime}
                    key={index}
                    dangerouslySetInnerHTML={{ __html: str }}
                  />
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
