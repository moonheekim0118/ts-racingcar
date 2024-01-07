import * as readline from "readline";

class InputView {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  constructor() {}

  inputCarNames() {
    this.rl.question("자동차 이름을 입력해주세요.", (input) => {
      this.rl.close();
      return input;
    });
  }
}

export default InputView;
