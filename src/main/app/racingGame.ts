import Car from "../domain/car";
import Referee from "../domain/referee";
import InputView from "../view/inputView";

class RacingGameApp {
  readonly inputView;
  Cars: [];
  Referee;

  constructor() {
    this.inputView = new InputView();
    this.setupGame();
  }

  async setupGame() {
    const carNameResult = await this.inputView.inputCarNames();
    this.Cars = carNameResult.split(",").map((car) => new Car(car));

    const rallyResult = await this.inputView.inputRacingRally();
    this.Referee = new Referee(Number(rallyResult), this.Cars);
  }
}

export default RacingGameApp;
