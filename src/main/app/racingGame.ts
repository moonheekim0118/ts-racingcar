import Car from "../domain/car";
import Referee from "../domain/referee";
import CarNameDto from "../dto/carNameDto";
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
    const carNames = CarNameDto.from(carNameResult).getCarNameList();
    carNames.map((car) => new Car(car));

    const rallyResult = await this.inputView.inputRacingRally();
    this.Referee = new Referee(Number(rallyResult), this.Cars);
  }

  startGame() {
    this.Referee.judgeGame();
    this.Referee.getWinners();
  }
}

export default RacingGameApp;
