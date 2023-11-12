import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';

const InputView = {
    async readDate() {
        const input = await Console.readLineAsync(`${Messages.ASK_DATE}\n`);
        return input;
    }
}

export default InputView;