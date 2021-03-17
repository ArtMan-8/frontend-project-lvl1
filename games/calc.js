import startGame from '../src/index.js';
import { getRandomMathOperaion, getRandomNumber } from '../src/utils.js';

const RULES = 'What is the result of the expression?';

const MathOperaions = {
  PLUS: '+',
  MINUS: '-',
  MULTI: '*',
};

export const getCalcResult = (num1, num2, operation) => {
  switch (operation) {
    case MathOperaions.PLUS: return num1 + num2;
    case MathOperaions.MINUS: return num1 - num2;
    case MathOperaions.MULTI: return num1 * num2;
    default: return NaN;
  }
};

const getGameData = () => {
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);
  const mathOperation = getRandomMathOperaion(MathOperaions);

  const result = `${getCalcResult(number1, number2, mathOperation)}`;
  const question = `${number1} ${mathOperation} ${number2} = `;
  return [question, result];
};

export default startGame(RULES, getGameData);
