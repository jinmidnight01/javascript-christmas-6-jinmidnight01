import Errors from "../constants/Errors.js";
import Conditions from "../constants/Conditions.js";

class Validations {
  /**
   * 예상 방문 날짜: 1이상 31이하 숫자가 아닌 경우
   * @param {string} date
   */
  static isValidDate(date) {
    const dateNumber = Number(date);
    if (Number.isNaN(dateNumber) || !Number.isInteger(dateNumber)) {
      throw new Error(Errors.INVALID_DATE)
    }
    if (dateNumber < Conditions.MIN_DATE || dateNumber > Conditions.MAX_DATE) {
      throw new Error(Errors.INVALID_DATE)
    }
  }
}

export default Validations;