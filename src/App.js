import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import EventBenefit from "./domains/EventBenefit.js";

class App {
  async run() {
    OutputView.printWelcomeMessage();
    const dateString = await this.recursiveInput(this.readDate, this)
    OutputView.printBenefitsPreviewTitle();
  }

  async readDate() {
    const dateString = await InputView.readDate();
    EventBenefit.validateDate(dateString);
    return dateString;
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
