import Conditions from "../constants/Conditions.js";
import Validations from "./Validations.js";

class EventBenefit {
  /** @type {number} */
  #date;

  /** @type {object} */
  #orders;

  constructor(dateString, orderString) {
    this.#date = Number(dateString);
    this.#orders = EventBenefit.parseOrders(orderString);
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
    Validations.hasDifferentOrder(orderString);
    const orders = EventBenefit.parseOrders(orderString);
    Validations.isOrderInMenu(orders);
    Validations.isOrderAmountPlus(orders);
    Validations.hasNotDrinkOnly(orders);
    Validations.isTotalAmountBelowMaximum(orders);
  }

  getTotalPrice() {
    return Object.entries(this.#orders).reduce(
      (total, [name, count]) => total + Conditions.MENU[name].price * count,
      0,
    );
  }

  canEventApply() {
    return this.getTotalPrice() >= Conditions.EVENT_MINIMUM_PRICE;
  }

  canChampagneApply() {
    return this.getTotalPrice() >= Conditions.CHAMPAGNE_MINIMUM_PRICE;
  }
}

export default EventBenefit;