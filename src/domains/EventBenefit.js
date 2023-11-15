import Conditions from '../constants/Conditions.js';
import Validations from './Validations.js';

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

  getOrders() {
    return this.#orders;
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

  getDdayDiscountPrice() {
    if (this.canEventApply()) {
      if (this.#date <= Conditions.DDAY_END_DATE) {
        return (
          Conditions.DDAY_DISCOUNT_INITIAL_PRICE +
          Conditions.DDAY_DISCOUNT_AMOUNT * (this.#date - 1)
        );
      }
    }
    return 0;
  }

  getDayOfWeekDiscountPrice() {
    if (!this.canEventApply()) {
      return 0;
    }
    const dayName = this.#getDayOfweek();
    return this.#calculateDayOfWeekDiscountPrice(dayName);
  }

  #getDayOfweek() {
    const date = new Date(`${Conditions.EVENT_YEAR_MONTH}${this.#date}`);
    const dayOfWeek = date.getDay();
    return Conditions.DAYS_OF_WEEK[dayOfWeek];
  }

  #calculateDayOfWeekDiscountPrice(dayName) {
    let category;
    if (Conditions.WEEKDAY_EVENT.includes(dayName)) {
      category = Conditions.DAYS_OF_WEEKE_EVENT_CATEGORY.weekday;
    }
    if (Conditions.WEEKEND_EVENT.includes(dayName)) {
      category = Conditions.DAYS_OF_WEEKE_EVENT_CATEGORY.weekend;
    }
    return Object.entries(this.#orders).reduce((total, [name, count]) => {
      if (Conditions.MENU[name].category === category) {
        return total + Conditions.DAYS_OF_WEEK_DISCOUNT_AMOUNT * count;
      }
      return total;
    }, 0);
  }

  getSpecialDiscountPrice() {
    if (this.canEventApply()) {
      const dayOfWeek = this.#getDayOfweek();
      if (Conditions.STARS_DATE.includes(dayOfWeek) || Conditions.STARS_DATE.includes(this.#date)) {
        return Conditions.SPECIAL_DISCOUNT_AMOUNT;
      }
    }
    return 0;
  }

  getChampagneDiscountPrice() {
    if (this.canEventApply()) {
      const name = Conditions.CHAMPAGNE;
      if (this.canChampagneApply()) {
        return Conditions.MENU[name].price;
      }
    }
    return 0;
  }

  getTotalDiscountPrice() {
    return (
      this.getDdayDiscountPrice() +
      this.getDayOfWeekDiscountPrice() +
      this.getSpecialDiscountPrice() +
      this.getChampagneDiscountPrice()
    );
  }

  getFinalPrice() {
    return this.getTotalPrice() - this.getTotalDiscountPrice() + this.getChampagneDiscountPrice();
  }

  getBadge() {
    if (this.getTotalDiscountPrice() >= Conditions.BADGE.산타) {
      return Conditions.SANTA;
    }
    if (this.getTotalDiscountPrice() >= Conditions.BADGE.트리) {
      return Conditions.TREE;
    }
    if (this.getTotalDiscountPrice() >= Conditions.BADGE.별) {
      return Conditions.STAR;
    }
    return NaN;
  }
}

export default EventBenefit;
