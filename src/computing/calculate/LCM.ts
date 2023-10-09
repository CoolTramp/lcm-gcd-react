import { StringBuilder } from "../createElements/StringBuilder.ts";
import { MinMaxDegree } from "../../types/customTypes.tsx";

export class LCM {
  private data = {};
  private lcm: number = 0;
  private userNumbers: number[] = [];

  constructor(data: MinMaxDegree, userNumbers: number[]) {
    this.userNumbers = userNumbers;
    this.data = Object.assign({}, data);
    this.lcm = 0;
    this.computeLCM(this.data);
  }

  getAnswer() {
    if (!this.lcm) {
      return this.computeLCM(this.data);
    } else {
      return this.lcm;
    }
  }

  private computeLCM(data: MinMaxDegree) {
    let result = 1;

    for (let [prime, degree] of Object.entries(data)) {
      if (Number.isInteger(+prime)) result *= (+prime) ** degree.maxDegree;
    }

    this.lcm = result;
    return result;
  }

  /**
   * Gets a string for rendering, containing the prime factorization of the number with exponent degrees.
   * @returns {String} - the rendering string with the prime factorization of the number.
   * Example: (100,12)&nbsp; 2<sup>2</sup>·3·5<sup>2</sup> = 300
   */
  getString(): string {
    const stringBuilder = new StringBuilder(this.userNumbers, String(this.lcm));
    return stringBuilder.getAnswerString(this.data, "maxDegree");
  }
}
