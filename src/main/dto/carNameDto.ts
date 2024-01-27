class CarNameDto {
  carNameList: string[];

  constructor(carNameList: string[]) {
    this.carNameList = carNameList;
  }

  static from(carNameString: string) {
    return new CarNameDto(carNameString.split(","));
  }
}

export default CarNameDto;
