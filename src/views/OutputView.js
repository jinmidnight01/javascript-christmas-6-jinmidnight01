import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';

const OutputView = {
    printWelcomeMessage() {
        Console.print(Messages.WELCOME);
    },

    printBenefitsPreviewTitle() {
        Console.print(Messages.BENEFITS_PREVIEW_TITLE);
    },
    
    printMenu() {
        Console.print("<주문 메뉴>");
    }
}

export default OutputView;
