import InputView from "../view/inputView";

class RacingGameApp {
  readonly inputView;
  readonly Cars: [];

  constructor() {
    this.inputView = new InputView();
    const carNames = this.inputView.inputCarNames().split(",");
  }
}

export default RacingGameApp;
