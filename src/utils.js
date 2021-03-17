export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getRandomMathOperaion = (operations) => {
  const mathOperaions = Object.values(operations);
  return mathOperaions[getRandomNumber(0, operations.length)];
};
