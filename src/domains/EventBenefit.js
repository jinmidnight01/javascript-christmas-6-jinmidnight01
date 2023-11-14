import Conditions from "../constants/Conditions.js";
import Validations from "./Validations.js";

class EventBenefit {
  /** @type {number} */
  #date;

  /** @type {object} */
  #orders;

  constructor(date, orders) {
    this.#date = Number(date);
    this.#orders = this.#parseOrders(orders);
  }

  #parseOrders(orders) {
    const pairs = orders.split(Conditions.ORDER_DELIMITER);
    const result = {};
    pairs.forEach(pair => {
      const [name, count] = pair.split(Conditions.NAME_COUNT_DELIMITER);
      result[name] = Number(count);
    });
    return result;
  }

  static validateDate(date) {
    Validations.isValidDate(date);
  }

}

export default EventBenefit;