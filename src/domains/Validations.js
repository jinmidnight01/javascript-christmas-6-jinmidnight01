import Errors from "../constants/Errors.js";
import Conditions from "../constants/Conditions.js";

class Validations {
  /**
   * 예상 방문 날짜: 1이상 31이하 숫자가 아닌 경우
   * @param {string} dateString
   */
  static isInRange(dateString) {
    const dateNumber = Number(dateString);
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
   * @param {string} orderString
   */
  static isValidMenuFormat(orderString) {
    if (/\s+/.test(orderString)) {
      throw new Error(Errors.INVALID_ORDERS);
    }
    const pairs = orderString.split(Conditions.ORDER_DELIMITER);
    pairs.forEach(pair => {
      if (!Conditions.MENU_FORMAT.test(pair)) {
        throw new Error(Errors.INVALID_ORDERS);
      }
    });
  }

    /**
   * 주문 목록: 메뉴판에 없는 메뉴 이름을 입력하는 경우
   * @param {Array} orders
   */
    static hasMenuName(orders) {
      const ordersMenuNames = Object.keys(orders);
      const menuNames = Object.values(Conditions.MENU).flatMap(category => Object.keys(category));
      if (ordersMenuNames.some(name => !menuNames.includes(name))) {
        throw new Error(Errors.INVALID_ORDERS);
      }
    }
}

export default Validations;