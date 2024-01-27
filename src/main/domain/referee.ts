import { randomUtil } from "../utils/randomUtil";
import Car from "./car";

class Referee {
  rally: number;
  participants: Car[];

  constructor(rally: number, participants: Car[]) {
    this.validateRally(rally);
    this.rally = rally;
    this.participants = participants;
  }

  validateRally(rally: number) {
    if (Number.isNaN(rally) || rally <= 0) {
      throw Error("자동차 경주 회수는 1회 이상이어야 합니다.");
    }
  }

  judgeScore() {
    this.participants.map((participant) => {
      participant.moveForward(randomUtil(0, 9));
    });
  }

  judgeGame() {
    Array.from({ length: this.rally }).map(() => {
      this.judgeScore();
    });
  }

  getWinners() {
    const highestScore = Math.max(
      ...this.participants.map((participant) => participant.position)
    );

    const winners = this.participants.filter(
      (participant) => participant.position === highestScore
    );

    return winners;
  }
}

export default Referee;
