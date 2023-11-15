import Errors from '../constants/Errors.js';
import Conditions from '../constants/Conditions.js';

class Validations {
  /**
   * 예상 방문 날짜: 1이상 31이하 숫자가 아닌 경우
   * @param {string} dateString
   */
  static isInRange(dateString) {
    const dateNumber = Number(dateString);
    if (Number.isNaN(dateNumber) || !Number.isInteger(dateNumber)) {
      throw new Error(Errors.INVALID_DATE);
    }
    if (dateNumber < Conditions.MIN_DATE || dateNumber > Conditions.MAX_DATE) {
      throw new Error(Errors.INVALID_DATE);
    }
  }

  /**
   * 주문 목록: 메뉴 형식이 올바르지 않은 경우
   * 1. 공백이 있는 경우
   * 2. 쉼표를 기준으로 분리한 원소들이 (한글)-(숫자) 형식이 아닌 경우
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
   * 주문 목록: 중복 메뉴를 입력한 경우
   * @param {string} orderString
   */
  static hasDifferentOrder(orderString) {
    const pairs = orderString.split(Conditions.ORDER_DELIMITER);
    const menuNames = pairs.map(
      pair => pair.split(Conditions.NAME_COUNT_DELIMITER)[0],
    );
    const uniqueMenuNames = [...new Set(menuNames)];
    if (menuNames.length !== uniqueMenuNames.length) {
      throw new Error(Errors.INVALID_ORDERS);
    }
  }

  /**
   * 주문 목록: 메뉴판에 없는 메뉴 이름을 입력하는 경우
   * @param {Array} orders
   */
  static isOrderInMenu(orders) {
    const ordersMenuNames = Object.keys(orders);
    const menuNames = Object.keys(Conditions.MENU);
    if (ordersMenuNames.some(name => !menuNames.includes(name))) {
      throw new Error(Errors.INVALID_ORDERS);
    }
  }

  /**
   * 주문 목록: 메뉴 개수가 1이상의 자연수가 아닌 경우
   * @param {Array} orders
   */
  static isOrderAmountPlus(orders) {
    const ordersAmount = Object.values(orders);
    if (
      ordersAmount.some(
        amount =>
          amount < Conditions.MIN_ORDER_AMOUNT || !Number.isInteger(amount),
      )
    ) {
      throw new Error(Errors.INVALID_ORDERS);
    }
  }

  /**
   * 주문 목록: 메뉴에 음료 주문만 있을 경우
   * @param {Array} orders
   */
  static hasNotDrinkOnly(orders) {
    const ordersMenuNames = Object.keys(orders);
    const drinkMenuNames = Object.keys(Conditions.MENU).filter(
      name => Conditions.MENU[name].category === 'drink',
    );
    if (ordersMenuNames.every(name => drinkMenuNames.includes(name))) {
      throw new Error(Errors.INVALID_ORDERS);
    }
  }

  /**
   * 주문 목록: 총 메뉴 개수가 20개를 초과하는 경우
   * @param {Array} orders
   */
  static isTotalAmountBelowMaximum(orders) {
    const ordersAmount = Object.values(orders);
    const totalAmount = ordersAmount.reduce((acc, cur) => acc + cur);
    if (totalAmount > Conditions.MAX_ORDER_AMOUNT) {
      throw new Error(Errors.INVALID_ORDERS);
    }
  }
}

export default Validations;
