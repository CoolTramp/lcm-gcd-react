import { PrimeFactorization } from "./PrimeFactorization.ts";
import { TrackingDivideHistory } from "./TrackingDivideHistory.ts";
import { PadFormatter } from "../format/PadFormatter.ts";
// import { HTMLTableCreator } from "../createElements/HTMLTableCreator.js";
// import { smoothInnerHTML } from "../createElements/smoothInnerHTML.js";

/**
 * Superclass for LCM and GCD.
 * LCM - stands for "Least Common Multiple".
 * GCD - Greatest Common Divisor
 */
export class PreparingCalculations {
  protected numbers: number[] = [];
  private trackingDivideHistory: TrackingDivideHistory =
    new TrackingDivideHistory();
  private primeFactorization: PrimeFactorization = new PrimeFactorization(
    this.trackingDivideHistory
  );
  private padFormatter: PadFormatter = new PadFormatter();
  public paddedStrings: string[] = [];
  protected primeFactors: number[][] = [];
  /**
   * Constructor The PreparingCalculations class:
   * @param {Array} numbers - the positive integer for calculate LCD or GCD,
   * @throws {Error} if not a positive integer,
   * @field {Array} this._paddedStrings will constain the padded strings
   * Example: ["10 | 2<br>&nbsp;&nbsp;5 | 5", ... ]
   * @field {Array} this._primeFactors will contain prime factors
   */
  constructor(numbers: string[]) {
    this.argumentsFormatter(numbers);

    this.numbers = this.deleteRepeating(this.numbers);
    this.numbers = this.deleteIsNotPositiveInteger(this.numbers);
    this.getPrimeFactorsAndFormatterStrings(this.numbers);
  }
  protected argumentsFormatter(arg: string[]) {
    arg.map((str) => {
      this.numbers.push(+str);
    });
  }
  /**
   * Adds call methods this.addPrimeFactorsToArray()
   * and this.addDividingHistoryStringToFormattedStringsArray(),
   * @param {Array} numbers for will caclulate LCD or GCD
   * Example: [2520, 25];
   */
  private getPrimeFactorsAndFormatterStrings(numbers: number[]): void {
    numbers.forEach((number) => {
      this.addPrimeFactorsToArray(number);
      this.addDividingHistoryStringToFormattedStringsArray();
    });
  }
  /**
   * Adds the prime factors of a number to the this.primeFactors array.
   * @param {Number} number - The number to factorize.
   * For example: [ 2, 2, 2, 5, 5 ]
   */
  private addPrimeFactorsToArray(number: number): void {
    const factors: number[] =
      this.primeFactorization.calculatePrimeFactors(number);
    this.primeFactors.push(factors);
  }
  /**
   * Adds the padded string to the this.formattedString array,
   * For example: "10 | 2<br>&nbsp;&nbsp;5 | 5"
   */
  private addDividingHistoryStringToFormattedStringsArray(): void {
    let tuples: number[][] =
      this.trackingDivideHistory.getHistoryOfDividingNumber();
    let paddedString: string = this.padFormatter.creatStringFrom(tuples);
    this.paddedStrings.push(paddedString);
  }
  /**
   * Deletes repeating numbers
   * @param {Array} numbers - numbers
   * @return {Array} array without repeating numbers
   */
  private deleteRepeating(numbers: number[]): number[] {
    return numbers.filter(
      (value, index, self) => self.indexOf(value) === index
    );
  }
  private deleteIsNotPositiveInteger(numbers: number[]): number[] {
    const FIRST_AVAILABLE_NUMBER_FOR_FACTORIZATION = 2;
    return numbers.filter(
      (value) =>
        Number.isInteger(value) &&
        value >= FIRST_AVAILABLE_NUMBER_FOR_FACTORIZATION
    );
  }
}
