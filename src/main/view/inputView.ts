import InputHandler from "../helpers/inputHandler";

class InputView {
  private inputHandler;
  constructor() {
    this.inputHandler = new InputHandler();
  }

  async inputCarNames() {
    try {
      const userInput = await this.inputHandler.getUserInput(
        "자동차 이름을 입력해주세요."
      );
      await this.inputHandler.close();

      return userInput;
    } catch (error) {
      console.error(error);
    }
  }

  async inputRacingRally() {
    try {
      const userInput = await this.inputHandler.getUserInput(
        "경주 회수를 입력해주세요"
      );
      await this.inputHandler.close();

      return userInput;
    } catch (error) {
      console.error(error);
    }
  }
}

export default InputView;
