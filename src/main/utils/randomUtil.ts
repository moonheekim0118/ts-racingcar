export const randomUtil = (lowerBound: number, upperBound: number) => {
  return Math.floor(Math.random() * upperBound) + lowerBound;
};
