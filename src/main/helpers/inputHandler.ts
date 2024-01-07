import * as readline from "readline";

class InputHandler {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async getUserInput(prompt: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(prompt, (input) => {
        resolve(input);
      });
    });
  }

  async close() {
    this.rl.close();
  }
}

export default InputHandler;
