import Car from "../main/domain/car";
import Referee from "../main/domain/referee";

describe("자동차 이름 테스트.", () => {
  test("자동차는 이름을 갖는다.", () => {
    expect(new Car("hope").getName()).toBe("hope");
  });

  test("자동차의 이름은 5자 이하여야 한다.", () => {
    expect(() => {
      new Car("hope123");
    }).toThrow("자동차 이름은 5자 이하여야합니다.");
  });

  test("자동차의 이름은 공백이 포함 될 수 없다.", () => {
    expect(() => {
      new Car("ho pe");
    }).toThrow("자동차 이름에는 공백이 포함 될 수 없습니다.");
  });
});

describe("자동차 경주 횟수 테스트", () => {
  test("경주 심판은 경주가 실행 될 횟수를 갖는다.", () => {
    const rally = new Referee(1, [new Car("hope")]).getRally();
    expect(rally).toBe(1);
  });

  test("실행 횟수는 1이상의 양의 정수여야 한다.", () => {
    expect(() => {
      new Referee(0, [new Car("hope")]);
    }).toThrow("자동차 경주 회수는 1회 이상이어야 합니다.");
  });
});

describe("각 자동차들의 이동여부 판단 테스트", () => {
  test("값이 4 이상이면 이동한다.", () => {
    const car = new Car("hope");
    car.moveForward(4);
    expect(car.getPosition()).toBe(1);
  });

  test("값이 4 미만이면 이동하지 않는다.", () => {
    const car = new Car("hope");
    car.moveForward(3);
    expect(car.getPosition()).toBe(0);
  });
});
