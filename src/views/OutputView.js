import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';
import Conditions from '../constants/Conditions.js';

const OutputView = {
  printWelcomeMessage() {
    Console.print(Messages.WELCOME);
  },

  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },

  printBenefitsPreviewTitle() {
    Console.print(Messages.BENEFITS_PREVIEW_TITLE);
  },

  printMenu(orders) {
    Console.print(`\n${Messages.TITLE.ORDER_MENU}`);
    Object.entries(orders).forEach(([name, count]) => {
      Console.print(`${name} ${count}개`);
    });
  },

  printTotalPrice(totalPrice) {
    Console.print(`\n${Messages.TITLE.TOTAL_PRICE}`);
    Console.print(`${totalPrice.toLocaleString()}원`);
  },

  printPresentMenu(canChampagneApply) {
    Console.print(`\n${Messages.TITLE.PRESENT_MENU}`);
    if (canChampagneApply) {
      Console.print(`${Conditions.CHAMPAGNE} ${Messages.ONE_UNIT}`);
    } else {
      Console.print(Messages.NOTHING);
    }
  },

  printBenefitContent(eventBenefit) {
    Console.print(`\n${Messages.TITLE.BENEFIT_CONTENT}`);
    if (
      eventBenefit.getDdayDiscountPrice() === 0 &&
      eventBenefit.getDayOfWeekDiscountPrice() === 0 &&
      eventBenefit.getSpecialDiscountPrice() === 0 &&
      eventBenefit.getChampagneDiscountPrice() === 0
    ) {
      Console.print(Messages.NOTHING);
      return;
    }

    OutputView.printDdayDiscountPrice(eventBenefit);
    OutputView.printDayOfWeekDiscountPrice(eventBenefit);
    OutputView.printSpecialDiscountPrice(eventBenefit);
    OutputView.printPresentEvent(eventBenefit);
  },

  printTotalDiscountPrice(totalDiscountPrice) {
    Console.print(`\n${Messages.TITLE.TOTAL_DISCOUNT_PRICE}`);
    Console.print(`${totalDiscountPrice.toLocaleString()}원`);
  },

  printFinalPrice(finalPrice) {
    Console.print(`\n${Messages.TITLE.FINAL_PRICE}`);
    Console.print(`${finalPrice.toLocaleString()}원`);
  },

  printBadge(badge) {
    Console.print(`\n${Messages.TITLE.BADGE}`);
    if (badge === null) {
        Console.print(Messages.NOTHING);
    }
    else {
        Console.print(`${badge}`);
    }
  },

  printDdayDiscountPrice(eventBenefit) {
    if (eventBenefit.getDdayDiscountPrice() < 0) {
      Console.print(
        `${Messages.EVENT_BENEFIT.DDAY_DISCOUNT} ${eventBenefit
          .getDdayDiscountPrice()
          .toLocaleString()}원`,
      );
    }
  },

  printDayOfWeekDiscountPrice(eventBenefit) {
    const dayName = eventBenefit.getDayOfWeek();
    if (eventBenefit.getDayOfWeekDiscountPrice() < 0) {
      if (Conditions.WEEKDAY_EVENT.includes(dayName)) {
        Console.print(
          `${Messages.EVENT_BENEFIT.WEEKDAY_DISCOUNT} ${eventBenefit
            .getDayOfWeekDiscountPrice()
            .toLocaleString()}원`,
        );
      }
      if (Conditions.WEEKEND_EVENT.includes(dayName)) {
        Console.print(
          `${Messages.EVENT_BENEFIT.WEEKEND_DISCOUNT} ${eventBenefit
            .getDayOfWeekDiscountPrice()
            .toLocaleString()}원`,
        );
      }
    }
  },

  printSpecialDiscountPrice(eventBenefit) {
    if (eventBenefit.getSpecialDiscountPrice() < 0) {
      Console.print(
        `${Messages.EVENT_BENEFIT.SPECIAL_DISCOUNT} ${eventBenefit
          .getSpecialDiscountPrice()
          .toLocaleString()}원`,
      );
    }
  },

  printPresentEvent(eventBenefit) {
    if (eventBenefit.getChampagneDiscountPrice() < 0) {
      Console.print(
        `${Messages.EVENT_BENEFIT.PRESENT_EVENT} ${eventBenefit
          .getChampagneDiscountPrice()
          .toLocaleString()}원`,
      );
    } else {
      Console.print(Messages.NOTHING);
    }
  },
};

export default OutputView;
