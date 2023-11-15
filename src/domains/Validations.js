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

  /**
   * 주문 목록: 메뉴 형식이 올바르지 않은 경우
   * 1. 공백이 있는 경우
   * 2. 쉼표를 기준으로 분리한 원소들이 (문자열)-(숫자) 형식이 아닌 경우
   * @param {string} orders
   */
  static isValidMenuFormat(orders) {
    if (/\s+/.test(orders)) {
      throw new Error(Errors.INVALID_ORDERS);
    }
    const pairs = orders.split(Conditions.ORDER_DELIMITER);
    pairs.forEach(pair => {
      if (!Conditions.MENU_FORMAT.test(pair)) {
        throw new Error(Errors.INVALID_ORDERS);
      }
    });
  }
}

export default Validations;