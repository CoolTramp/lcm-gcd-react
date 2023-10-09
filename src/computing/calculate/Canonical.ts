import { PreparingCalculations } from "./PreparingCalculations.ts";
import { StringBuilder } from "../createElements/StringBuilder.ts";
import { MinMaxDegree, CanonicalData } from "../../types/customTypes.tsx";

/**
 * The Degree class for compute the degree of number
 *
 * Inherits field:
 * @field {Array} primeFactors will contain arrays
 * with prime factors.
 * Example: [[2, 2, 5], [ 2, 2, 2, 5, 5 ]];
 *
 * Inherits method:
 * Creats the HTML table with process dividion.
 * @method logProcessOfDividionOnHTMLElement
 */

export class Canonical extends PreparingCalculations {
  public numbers: number[] = [];
  private countUserNumbers: number = 0;
  protected canonical: CanonicalData = {};
  public data: MinMaxDegree = {};

  /**
   * Constructor The Degree class
   * @param {Array} numbers - array with positive integer for calculation
   */
  constructor(numbers: string[]) {
    super(numbers);
    this.argumentsFormatter(numbers);
    this.computeDataAndCanonical();
  }

  private computeDataAndCanonical(): void {
    let temp = {};

    this.primeFactors.forEach((primeFactors) => {
      temp = this.getDegreesFrom(primeFactors);
      this.initializeCanonical();
      this.processTempData(temp);
    });
  }
  /**
   * Counts degrees of prime numbers.
   * @param {Array} primeFactors - array with prime factors of user number.
   * Example: [2,2,2,3].
   * @returns {Object} with prime number, count
   * (Iterating if a factor from one array is present in the next array)
   * and their degree.
   * Example: { '2': { count: 1, degree: 3 }, '3': { count: 1, degree: 1 } }
   */
  private getDegreesFrom(primeFactors: number[]): any {
    return primeFactors.reduce((acc: any, num) => {
      if (!acc[num]) acc[num] = { count: 1, degree: 1 };
      else acc[num].degree++;
      return acc;
    }, {});
  }
  /**
   * Processes the data from the temp object for further analysis.
   * @param {Object} temp - containt the prime number and their count
   * (Iterating if a factor from one array is present in the next array), degree.
   * Example: { '2': { count: 1, degree: 3 }, '3': { count: 1, degree: 1 } }
   */
  private processTempData(temp: CanonicalData) {
    for (let primeNumber in temp) {
      this.addDegreesInCanonical(
        this.countUserNumbers,
        primeNumber,
        Number(temp[primeNumber].degree)
      );
      this.addCountMinAndMaxDegree(primeNumber, temp);
    }

    this.countUserNumbers++;
  }

  /**
   * Sets user number and its canonical representation in the canonical object
   * Example:  '24': { '2': { degree: 3 }, '3': { degree: 1 } },
   * @param {Integer} numberIndex - value of the countUserNumbers count
   * @param {String} primeNumber - prime number
   * @param {Interger} degree of prime number
   */
  private addDegreesInCanonical(
    numberIndex: number,
    primeNumber: string,
    degree: number
  ): void {
    this.canonical[this.numbers[numberIndex]][primeNumber] = {
      degree: degree,
    };
  }

  /**
   * Adds the count (Iterating if a factor from one array is present in the next array),
   * minimum degree, and maximum degree for a prime number key.
   * If the prime number key does not exist in the data object, it creates a new entry.
   * If the prime number key already exists, it updates the existing entry.
   * @param {String} primeNumber - Prime number
   */
  private addCountMinAndMaxDegree(primeNumber: string, temp: any) {
    if (!this.data.hasOwnProperty(primeNumber)) {
      this.setPrimeNumberData(
        primeNumber,
        temp[primeNumber].count,
        temp[primeNumber].degree
      );
    } else {
      this.updateData(primeNumber, temp[primeNumber].degree);
    }
  }

  /**
   * Creates a new key (primeNumbers) and an object value that contains
   * the count, (Iterating if a factor from one array is present in the next array)
   * minimal degree, and maximal degree of a prime number.
   * Example: '2': { count: 4, minDegree: 2, maxDegree: 3 },
   * @param {String} primeNumber - Prime number
   * @param {Integer} count - Number of occurrences of the prime number in each user number
   * @param {Integer} degree - Exponential value of the prime number
   */
  private setPrimeNumberData(
    primeNumber: string,
    count: number,
    degree: number
  ): void {
    this.data[primeNumber] = {
      count: count,
      minDegree: degree,
      maxDegree: degree,
      answer: 1,
    };
  }

  /**
   * Update count (Iterating if a factor from one array is present in the next array),
   * minimal degree, and maximal degree of a prime number.
   * Example: '2': { count: 4, minDegree: 2, maxDegree: 3 },
   * @param {Integer} primeNumber - prime number
   * @param {*} degree - degree of prime numbers
   */
  private updateData(primeNumber: string, degree: number) {
    this.data[primeNumber].minDegree = Math.min(
      degree,
      this.data[primeNumber]?.minDegree
    );
    this.data[primeNumber].maxDegree = Math.max(
      degree,
      this.data[primeNumber]?.maxDegree
    );
    this.data[primeNumber].count++;
  }

  /**
   * Initialize a new empty object for key
   */
  private initializeCanonical() {
    this.canonical[this.numbers[this.countUserNumbers]] = {};
  }

  /**
   * Gets a string for rendering, containing the prime factorization of the number with exponent degrees.
   * @returns {String} - the rendering string with the prime factorization of the number.
   * Example: 12 = 2<sup>2</sup>·3&nbsp;&nbsp;&nbsp;100 = 2<sup>2</sup>·5<sup>2</sup>
   */
  public getString(): string {
    const stringBuilder = new StringBuilder(this.numbers);
    return stringBuilder.getPrimeExponentString(this.canonical, "degree");
  }
}
