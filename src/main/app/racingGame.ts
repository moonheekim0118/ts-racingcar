import Car from "../domain/car";
import InputView from "../view/inputView";

class RacingGameApp {
  readonly inputView;
  Cars: [];

  constructor() {
    this.inputView = new InputView();
    this.inputView.inputCarNames().then((result) => {
      this.Cars = result.split(",").map((car) => new Car(car));
    });
  }
}

export default RacingGameApp;
