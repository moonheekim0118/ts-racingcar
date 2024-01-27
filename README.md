# 타입스크립트 레이싱경주

## 요구사항

- [x] 자동차의 이름을 입력받는다.
  - [x] 자동차의 이름은 콤마(,)를 통해 구분한다.
  - [x] 각 자동차의 이름은 공백이 포함될 수 없다.
  - [x] 각 자동차의 이름은 5글자 이하이다.
- [x] 시도 횟수를 입력받는다.
  - [x] 시도 횟수는 양의 정수여야한다.
- [x] 각 자동차들의 이동여부를 판단한다.
  - [x] 0 ~ 9 사이의 랜덤한 값을 구한후, 값이 4 이상이면 이동한다.
- [ ] 각 자동차들의 현재 위치를 출력한다.
- [ ] 입력한 횟수만큼 모두 시행했다면 최종 우승자를 출력한다.
- [ ] 우승자는 한명 이상일 수 있다.

- [ ] 각 도메인에 대한 테스트코드를 작성한다.
- [ ] DTO 적용 (심화)

<br/>

## 설계

### Car

- 이름 갖는다. (이름 예외 케이스 적용)
- 전진 할 수 있다.

### Referee

- 레이싱 경주 횟수를 입력받는다 (Rally)
- 경주 횟수만큼 각 자동차의 전진 조건을 심판한다.
- 경주가 끝나면 최고 스코어를 통해 우승자를 판별한다.

### View

- InputView
  - 자동차 이름을 입력받는다.
  - 경주 횟수를 입력받는다.
- OutputView
  - 각 자동차의 현재 위치를 출력한다.
  - 우승자를 출력한다.
