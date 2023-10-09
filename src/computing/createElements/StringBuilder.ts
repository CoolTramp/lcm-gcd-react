import { CanonicalData, MinMaxDegree } from "../../types/customTypes";
/**
 * The StringBuilder class for creating string with degree of number
 */
type Primes = { [key: string]: { degree: number } };

export class StringBuilder {
  private userNumbers: number[] = [];
  private answer: string = "";

  constructor(userNumbers: number[], answer?: string) {
    this.userNumbers = userNumbers;
    if (answer) {
      this.answer = answer;
    }
  }
  /**
   * Creats string with user number and thier
   * canonical factorization
   * @param {Object} data - constist of user number
   * and their canonical factorization
   * Example:
   * { '24': { '2': { degree: 3 }, '3': { degree: 1 } },
   *   '36': { '2': { degree: 2 }, '3': { degree: 2 } },
   *   '60': { '2': { degree: 2 }, '3': { degree: 1 }, '5': { degree: 1 } },
   *   '108': { '2': { degree: 3 }, '3': { degree: 2 } }
   * @returns {String} - The resulting string representing
   * 24= 2<sup>3</sup>·3&nbsp;&nbsp;&nbsp;
   * 36= 2<sup>2</sup>·3<sup>2</sup>&nbsp;&nbsp;&nbsp;
   * 60= 2<sup>2</sup>·3·5&nbsp;&nbsp;&nbsp;
   * 108= 2<sup>3</sup>·3<sup>2</sup>
   */
  getPrimeExponentString(data: CanonicalData, degree: string): string {
    let resultParts = [];
    for (let [userNumber, primes] of Object.entries(data)) {
      let firstString = this.getStringWithUserNumber(userNumber);

      let primeFactorWithDegress = this.addMultiplicationSignInString(
        this.primeFactorAndDegree(primes, degree)
      );

      resultParts.push(
        this.concatinateStrings(firstString, primeFactorWithDegress)
      );
    }
    return this.addSpaceInHTMLFormat(resultParts, 3);
  }
  /**
   * Creats styring with user number and the equal sing
   * @param {String} userNumber - user number
   * @return {String} - result of creating string
   * Example: "24= "
   */
  private getStringWithUserNumber(userNumber: string): string {
    return `${userNumber}= `;
  }
  /**
   * Adds the multiplication sing beetwen primeParts
   * and then concatinates this with PrimeString
   * @param {String} primeString - string with user numbers
   * Example: (24,36,60,108)
   * @param {Array} primeParts - consists with prime number
   * and degree, if degree greater then 1
   * Example: [ '2<sup>2</sup>', '3', '5' ]
   * @returns {String} - сoncatenated string with multiplication sign.
   * Example: "(24,36,60,108)2<sup>2</sup>·3·5"
   */
  private addMultiplicationSignInString(primeParts: string[]): string {
    return primeParts.join("·");
  }
  private concatinateStrings(...strings: string[]): string {
    return strings.join(" ");
  }
  /**
   * Creats string with prime number and thier degree
   * consist of canonical numbers numbers of user numbers
   * the key is prime number
   * the key degree is degree
   * Example: [ '2<sup>3</sup>', '3<sup>2</sup>' ]
   */
  private primeFactorAndDegree(
    data: Primes | MinMaxDegree,
    degree: string
  ): string[] {
    let primeParts = [];
    for (let [primeNumber, degrees] of Object.entries(data)) {
      if (Number.isInteger(+primeNumber)) {
        //if prime factor was in all user number
        if (
          degrees.count === this.userNumbers.length ||
          degree != "minDegree"
        ) {
          primeParts.push(
            this.getStringWithDegrees(primeNumber, Number(degrees[degree]))
          );
        }
      }
    }
    return primeParts;
  }
  /**
   * Creates a string that shows the prime factors and their degrees
   * based on the given data. The string represents either the
   * Least Common Divisor (LCD) or the Greatest Common Divisor (GCD).
   * Example:
   * For GCD, the string will be: (24,36,60,108)2<sup>3</sup>·3<sup>2</sup>
   * For LCD, the string will be: (24,36,60,108)2<sup>2</sup>·3·5
   * @returns {String} -The resulting string representing
   * the prime factors and their degrees.
   * Example: (24,36,60,108)2<sup>3</sup>·3<sup>2</sup>
   */
  getAnswerString(data: MinMaxDegree, degree: string): string {
    let firstString = this.getFirstString(this.userNumbers);
    let primeFactorWithDegree = this.addMultiplicationSignInString(
      this.primeFactorAndDegree(data, degree)
    );

    let computationAnswer = this.addAnswerToAnswerString(this.answer);

    return this.concatinateStrings(
      firstString,
      primeFactorWithDegree,
      computationAnswer
    );
  }
  /**
   * Creats string with user numbers
   * @returns {String}
   * Example: "(24,36,60,108)"
   */
  private getFirstString(userNumbers: number[]): string {
    return "(" + userNumbers.join(",") + ")" + this.getHTMLSpaceFormatString(1);
  }
  /**
   * Creates a string representation of a prime number with its degree,
   * if the degree is greater than 1.
   * @param {String} primeNumber - The prime number.
   * @param {Number} degree - The degree of the prime number.
   * @returns {String} - The formatted string representation.
   * Examples: createPrimeStringWithDegrees("2", 3) returns "2<sup>3</sup>".
   * createPrimeStringWithDegrees("2", 1) returns "2".
   */
  private getStringWithDegrees(primeNumber: string, degree: number): string {
    let primePart = primeNumber;
    if (degree !== 1) {
      primePart += `<sup>${degree}</sup>`;
    }
    return primePart;
  }
  /**
   * Add the result of computation LCM or GCD to the answer string.
   * @param {String} string - thie string with all user numbers,
   * prime factors and thier degree
   * Example: (24,36,60,108)&nbsp;&nbsp;2<sup>3</sup>·3<sup>3</sup>·5
   * @param {String} answer - result of computation GCD or LCM
   * Exmaple: 360;
   * @returns {String} - result of creating string
   * Example: "= 360"
   */
  private addAnswerToAnswerString(answer: string): string {
    return `= ${answer}`;
  }
  /**
   * Add the space in html format ( &nbsp; ) beetween stirngs
   * @param {Array} resultParts - consist of strings
   * Example:
   * [ '24= 2<sup>3</sup>·3',
   *   '36= 2<sup>2</sup>·3<sup>2</sup>',
   *   '60= 2<sup>2</sup>·3·5',
   *   '108= 2<sup>3</sup>·3<sup>2</sup>']
   * @param {Integer} - the count of spaces
   * @returns {String} - The resulting string representing
   * "24= 2<sup>3</sup>·3&nbsp;&nbsp;&nbsp;
   *  36= 2<sup>2</sup>·3<sup>2</sup>&nbsp;&nbsp;&nbsp;
   *  60= 2<sup>2</sup>·3·5&nbsp;&nbsp;&nbsp;
   *  108= 2<sup>3</sup>·3<sup>2</sup>""
   */
  private addSpaceInHTMLFormat(resultParts: string[], count: number): string {
    return resultParts.join(this.getHTMLSpaceFormatString(count));
  }
  /**
   * Creats string with spaces in HTML format ( &nbsp; )
   * @param {Integer} count - the count of spaces
   * Example: 3
   * @return {String} - the result of created string
   * Example: &nbsp;&nbsp;&nbsp;
   */
  private getHTMLSpaceFormatString(count: number): string {
    return "&nbsp;".repeat(count);
  }
}
