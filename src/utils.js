export const NUMBER_OF_QUESTIONS = 3;

export const MathOperaions = {
  PLUS: '+',
  MINUS: '-',
  MULTI: '*',
};

export const getRandomNumber = (num) => Math.floor(Math.random() * num);

export const getRandomMathOperaion = () => {
  const mathOperaions = Object.values(MathOperaions);
  return mathOperaions[getRandomNumber(Object.values(MathOperaions).length)];
};

export const getCalcResult = (num1, num2, operation) => {
  switch (operation) {
    case MathOperaions.PLUS: return num1 + num2;
    case MathOperaions.MINUS: return num1 - num2;
    case MathOperaions.MULTI: return num1 * num2;
    default: return NaN;
  }
};
