class CarNameDto {
  private carNameList: string[];

  constructor(carNameList: string[]) {
    this.carNameList = carNameList;
  }

  static from(carNameString: string) {
    return new CarNameDto(carNameString.split(","));
  }

  getCarNameList() {
    return this.carNameList;
  }
}

export default CarNameDto;
