import InputView from "../view/inputView";

class RacingGameApp {
  readonly inputView;
  readonly Cars: [];

  constructor() {
    this.inputView = new InputView();
    this.inputView.inputCarNames().then((result) => {
      console.log(result);
    });
  }
}

export default RacingGameApp;
