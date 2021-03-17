const MathOperaions = {
  PLUS: '+',
  MINUS: '-',
  MULTI: '*',
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getRandomMathOperaion = () => {
  const mathOperaions = Object.values(MathOperaions);
  return mathOperaions[getRandomNumber(0, mathOperaions.length)];
};

export const getCalcResult = (num1, num2, operation) => {
  switch (operation) {
    case MathOperaions.PLUS: return num1 + num2;
    case MathOperaions.MINUS: return num1 - num2;
    case MathOperaions.MULTI: return num1 * num2;
    default: return NaN;
  }
};

export const getGcdResult = (num1, num2) => {
  let min = num1;
  let max = num2;

  if (min > max) {
    [min, max] = [num2, num1];
  }

  let divider = min;

  while (min % divider || max % divider) {
    divider -= 1;
  }

  return divider;
};
