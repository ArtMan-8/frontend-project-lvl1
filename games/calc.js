import startGame from '../src/index.js';
import { getRandomMathOperaion, getRandomNumber, getCalcResult } from '../src/utils.js';

const RULES = 'What is the result of the expression?';

const getGameData = () => {
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);
  const mathOperation = getRandomMathOperaion();

  const result = `${getCalcResult(number1, number2, mathOperation)}`;
  const question = `${number1} ${mathOperation} ${number2} = `;
  return [question, result];
};

export default startGame(RULES, getGameData);
