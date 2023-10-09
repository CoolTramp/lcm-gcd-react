/**
 * The PadFormatter class for formatting two-dimensional
 * array of tuples,
 * example [[250, 2], [125, 5], [25, 5], [5, 5]]
 * into the string.
 * Examplle: '250 | 2<br>125 | 5<br> 25 | 5<br>  5 | 5';
 */
export class PadFormatter {
  private string: string = "";
  private maxValueLength: number = 0;
  /**
   * To creats the formatted string.
   * @param {Array} tuples an two-dimensional array of tuples,
   * where each tuple contains a divisible and its corresponding divisor.
   * Example: [[250, 2], [125, 5]. [25, 5], [5, 5]]
   * @return {String} the formatted string,
   * Examplle: '250 | 2<br>125 | 5<br> 25 | 5<br>  5 | 5';
   */
  creatStringFrom(tuples: number[][]): string {
    this.makeClassMembersDefault();
    this.isTuple(tuples);
    this.getMaxLengthOfDivisible(tuples);

    tuples.forEach(([divisible, divider], index) => {
      this.string +=
        this.formatOutput(divisible, divider) +
        (tuples.length - 1 !== index ? "<br>" : "");
    });
    return this.string;
  }
  /**
   * Clear the String before the concatination
   */
  private makeClassMembersDefault() {
    this.string = "";
    this.maxValueLength = 0;
  }
  /**
   * getMaxLengthOfDivisible is a method that returns
   * the length of the longest divisible in the a {Array}.
   */
  private getMaxLengthOfDivisible(tuples: number[][]): void {
    let maxLength = 0;
    tuples.forEach((item) => {
      let currentLength = this.getLengthOfDivisible(item[0]);
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
    });
    this.maxValueLength = maxLength;
  }
  /**
   * The _formatOutput method creates a string that
   * contains the value of the divisible number,
   * a separator '|', and the value of the divisor.
   * @param {Number} divisible The number that was
   * divided.
   * @param {Number} divisor The number that was used
   * as a divisor.
   * @returns {String} A formatted string for output,
   * in the form `{divisible} | {divisor}`.
   */
  private formatOutput(divisible: number, divisor: number): string {
    return `${this.padValue(divisible, divisor)} | ${divisor}`;
  }
  /**
   * Addes spaces(&nbsp;) before number, to aling the row
   * @param {Number} value The value to pad.
   * @returns {String} new string
   */
  private padValue(divisible: number, divisor: number): string {
    let pad =
      this.maxValueLength -
      (divisible.toString().length - divisor.toString().length);
    return "&nbsp;&nbsp;".repeat(pad - 1) + divisible.toString();
  }
  /**
   * Caulculates length of number
   * Example: the number 1000 has the length 4 sings
   * @param {Number} divisible
   * @returns {Number} divisible's length
   */
  private getLengthOfDivisible(divisible: number): number {
    return String(divisible).length;
  }
  /**
   * Check value,
   * @param {any} value for checking,
   * @return {Bollean} true is value is array.
   */
  private isTuple(value: any): boolean {
    if (value.length === 0) {
      throw new Error("no a numbers for printing");
    }
    return true;
  }
  /**
   * The getter the formatter string,
   * @returns {String} formatted string.
   */
  getString(): string {
    if (!this.string) {
      throw new Error("the string is not defined");
    }
    return this.string;
  }
}
