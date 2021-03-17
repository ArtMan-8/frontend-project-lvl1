import startGame from '../src/index.js';
import { getRandomNumber, getGcdResult } from '../src/utils.js';

const RULES = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);

  const result = `${getGcdResult(number1, number2)}`;
  const question = `${number1} ${number2} `;
  return [question, result];
};

export default startGame(RULES, getGameData);
