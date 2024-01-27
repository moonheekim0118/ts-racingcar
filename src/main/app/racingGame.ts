import Car from "../domain/car";
import Referee from "../domain/referee";
import InputView from "../view/inputView";

class RacingGameApp {
  private inputView;
  private Cars: Car[];
  private Referee: Referee;

  constructor() {
    this.inputView = new InputView();
    this.setupGame().then(() => {
      this.startGame();
    });
  }

  async setupGame() {
    const carNameResult = await this.inputView.inputCarNames();
    this.Cars = carNameResult.split(",").map((car) => new Car(car));

    const rallyResult = await this.inputView.inputRacingRally();
    this.Referee = new Referee(Number(rallyResult), this.Cars);
  }

  startGame() {
    this.Referee.judgeGame();
    this.Referee.getWinners();
  }
}

export default RacingGameApp;
