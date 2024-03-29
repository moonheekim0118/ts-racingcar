import { randomUtil } from "../utils/randomUtil";
import Car from "./car";

class Referee {
  private rally: number = 0;
  private participants: Car[] = [];

  constructor(rally: number, participants: Car[]) {
    this.validateRally(rally);
    this.rally = rally;
    this.participants = participants;
  }

  getRally() {
    return this.rally;
  }

  getParticipants() {
    return this.participants;
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
      ...this.participants.map((participant) => participant.getPosition())
    );

    const winners = this.participants.filter(
      (participant) => participant.getPosition() === highestScore
    );

    return winners;
  }
}

export default Referee;
