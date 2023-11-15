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
};

export default OutputView;
