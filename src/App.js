import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

class App {
  async run() {
    OutputView.printWelcomeMessage();
    const date = await InputView.readDate();
    const orders = await InputView.readOrders();
  }
}

export default App;
