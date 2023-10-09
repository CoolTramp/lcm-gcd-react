import { TrackingDivideHistory } from "./TrackingDivideHistory.ts";
/**
    The PrimeFactorization class performs splitting a number into prime factors.
    Prime Facrost is the prime factors of a number are the factors
    that are prime numbers. In other words, they are the prime
    numbers that divide the given number exactly without
    leaving a remainder. For example, the prime factors of 24
    are 2, 2, 2, and 3, because 24 can be exactly divided by 2, 2, 2, and 3.
    */
export class PrimeFactorization {
  store: TrackingDivideHistory | undefined;
  allPrimeFactors: number[];
  /**
   * Constructor for the class PrimeFactorization:
   * @param {Object} [store] for object for Injection which
   * will be store process dividing,
   * @throws {Error} if argument 'store' is not a object of TrackingDivideHistory class,
   * this.store - object's class TrackingDivideHistory,
   * this.allPrimeFactors contains all prime factors of number.
   */
  constructor(store: TrackingDivideHistory) {
    if (store) {
      if (!(store instanceof TrackingDivideHistory)) {
        throw new Error("Input must be object of TrackingDivideHistory class");
      }
      this.store = store;
    }
    this.allPrimeFactors = [];
  }
  /**
   * Calculates the prime factors of a given number,
   * @param {Integer} number which will be split into prime factors,
   * @returns {Array} that contains prime factors of number.
   */
  calculatePrimeFactors(number: number): number[] {
    this.isPositiveInteger(number);
    if (this.store) {
      this.store.cleanRecord();
    }
    let factors = [];
    for (let divider = 2; divider <= number; divider++) {
      while (number % divider === 0) {
        if (this.store) {
          this.store.recordDivision(number, divider);
        }
        factors.push(divider);
        number /= divider;
      }
    }
    this.allPrimeFactors = factors;
    return factors;
  }
  /**
   * The getter for property this.allPrimeFactors,
   * @throws {Error} if was no calculated prime factors,
   * @returns {Array} with all prime factors.
   */
  getPrimeFactors(): number[] {
    if (this.allPrimeFactors.length === 0) {
      throw new Error("No prime factors have been calculated yet");
    }
    return this.allPrimeFactors;
  }
  /**
   * Checks the argument
   * @param {Integer} number - number for checking,
   * @throws {Error} If input is not a positive integer number,
   * @return {Boolean} true if the number is positive integer
   */
  private isPositiveInteger(number: number): boolean {
    if (!Number.isInteger(number) || number < 0) {
      throw new Error("Input must be a positive integer. Like 2520, 20");
    }
    return true;
  }
}
