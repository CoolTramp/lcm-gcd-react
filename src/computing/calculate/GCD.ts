import { StringBuilder } from "../createElements/StringBuilder.js";
import { MinMaxDegree } from "../../types/customTypes.js";

export class GCD {
  private data: MinMaxDegree = {};
  private gcd: number = 0;
  private userNumbers: number[] = [];

  constructor(data: MinMaxDegree, userNumbers: number[]) {
    this.data = Object.assign({}, data);
    this.userNumbers = userNumbers;
    this.gcd = 1;
    this.computeGCD(this.data);
  }

  getAnswer() {
    if (!this.gcd) {
      return this.computeGCD(this.data);
    } else {
      return this.gcd;
    }
  }

  private computeGCD(data: MinMaxDegree) {
    let result = 1;
    for (let [prime, degree] of Object.entries(data)) {
      if (
        Number.isInteger(+prime) &&
        data[prime]["count"] === this.userNumbers.length
      ) {
        result *= (+prime) ** degree.minDegree;
      }
    }
    this.gcd = result;
    return result;
  }

  /**
   * Gets a string for rendering, containing the prime factorization of the number with exponent degrees.
   * @returns {String} - the rendering string with the prime factorization of the number.
   * Example: (100,12)&nbsp; 2<sup>2</sup> = 4
   */
  getString(): string {
    const stringBuilder = new StringBuilder(this.userNumbers, String(this.gcd));
    return stringBuilder.getAnswerString(this.data, "minDegree");
  }
}
