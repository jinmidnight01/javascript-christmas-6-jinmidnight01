import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import EventBenefit from "./domains/EventBenefit.js";

class App {
  async run() {
    OutputView.printWelcomeMessage();
    const dateString = await this.recursiveInput(this.readDate, this)
    const orderString = await this.recursiveInput(this.readOrders, this)
    const eventBenefit = new EventBenefit(dateString, orderString);
    this.printOutput(eventBenefit);
  }

  async readDate() {
    const dateString = await InputView.readDate();
    EventBenefit.validateDate(dateString);
    return dateString;
  }

  async readOrders() {
    const orderString = await InputView.readOrders();
    EventBenefit.validateOrders(orderString);
    return orderString;
  }

  printOutput(eventBenefit) {
    OutputView.printBenefitsPreviewTitle();
    OutputView.printMenu(eventBenefit.getOrders());
    OutputView.printTotalPrice(eventBenefit.getTotalPrice());
  }

  async recursiveInput(fn, context) {
    try {
      return await fn.call(context);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.recursiveInput(fn, context);
    }
  }

}

export default App;
