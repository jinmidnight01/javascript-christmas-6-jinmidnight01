import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import EventBenefit from "./domains/EventBenefit.js";

class App {
  async run() {
    OutputView.printWelcomeMessage();
    const date = await InputView.readDate();
    const orders = await InputView.readOrders();
    const eventBenefit = new EventBenefit(date, orders);
    OutputView.printBenefitsPreviewTitle();
  }
}

export default App;
