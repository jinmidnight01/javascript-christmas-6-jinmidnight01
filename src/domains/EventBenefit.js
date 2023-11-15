import Conditions from "../constants/Conditions.js";
import Validations from "./Validations.js";

class EventBenefit {
  /** @type {number} */
  #date;

  /** @type {object} */
  #orders;

  constructor(dateString, orderString) {
    this.#date = Number(dateString);
    this.#orders = this.parseOrders(orderString);
  }

  /**
   * @param {string} orderString 
   * @returns {Array}
   */
  static parseOrders(orderString) {
    const pairs = orderString.split(Conditions.ORDER_DELIMITER);
    const result = {};
    pairs.forEach(pair => {
      const [name, count] = pair.split(Conditions.NAME_COUNT_DELIMITER);
      result[name] = Number(count);
    });
    return result;
  }

  static validateDate(date) {
    Validations.isInRange(date);
  }

  static validateOrders(orderString) {
    Validations.isValidMenuFormat(orderString);
    const orders = this.parseOrders(orderString);
    Validations.hasMenuName(orders);
  }
}

export default EventBenefit;