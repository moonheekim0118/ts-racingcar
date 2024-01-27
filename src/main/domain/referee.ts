import Car from "./car";

class Referee {
  rally: number;
  participant: Car[];

  constructor(rally: number, participant: Car[]) {
    this.validateRally(rally);
    this.rally = rally;
    this.participant = participant;
  }

  validateRally(rally: number) {
    if (Number.isNaN(rally) || rally <= 0) {
      throw Error("자동차 경주 회수는 1회 이상이어야 합니다.");
    }
  }
}

export default Referee;
