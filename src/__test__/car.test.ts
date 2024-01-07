import Car from "../main/domain/car";

describe("자동차 이름 테스트.", () => {
  test("자동차는 이름을 갖는다.", () => {
    expect(new Car("hope").name).toBe("hope");
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
