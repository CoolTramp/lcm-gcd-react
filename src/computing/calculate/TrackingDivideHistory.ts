/**
  The TrackingDivideHistory class is Dependency Injection Pattern
  that allow to store the factorization's process of a number in array,
  this is can will use for logging the devisior process
  in The HTMLTableCreator class
  */
export class TrackingDivideHistory {
  /**
   * historyOfNumberDivition property stores
   * all process of dividing a number, during prime Factorization.
   * Consist of the number and his divider:
   * Example: 105 => 3, 35 => 5, 7 => 7
   */
  private historyOfNumberDivition: Map<number, number> = new Map();

  constructor() {}
  /**
   * Records a division between `number` and `divider`.
   * this is necessary to log process devision in console;
   * @param {Number} number The number being divided.
   * @param {Number} divider The divider.
   */
  recordDivision(number: number, divider: number): void {
    this.historyOfNumberDivition.set(number, divider);
  }
  /**
   * Cleaning map recording
   */
  cleanRecord() {
    this.historyOfNumberDivition.clear();
  }
  /**
   * Converts the map object `this.historyOfNumberDivition` into an array and returns it.
   * @returns {Array} The `this.historyOfNumberDivition` property as an array.
   * @throws {Error} If no factorization was performed on the number.
   */
  getHistoryOfDividingNumber() {
    if (!this.historyOfNumberDivition || !this.historyOfNumberDivition.size) {
      throw new Error("No factorization was performed on the number.");
    }
    return Array.from(this.historyOfNumberDivition);
  }
}
