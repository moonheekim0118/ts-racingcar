class Car {
  readonly name: string;

  constructor(name: string) {
    this.validateNameLength(name);
    this.validateNameHasWhiteSpace(name);

    this.name = name;
  }

  validateNameLength(name: string) {
    if (name.length > 5) {
      throw Error("자동차 이름은 5자 이하여야합니다.");
    }
  }

  validateNameHasWhiteSpace(name: string) {
    if (name.includes(" ")) {
      throw Error("자동차 이름에는 공백이 포함 될 수 없습니다.");
    }
  }
}

export default Car;
