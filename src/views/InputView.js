import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';

const InputView = {
    async readDate() {
        return Console.readLineAsync(`${Messages.ASK_DATE}\n`);
    },

    async readOrders() {
        return Console.readLineAsync(`${Messages.ASK_ORDERS}\n`);
    }
}

export default InputView;