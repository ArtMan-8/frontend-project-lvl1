import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const RULES = 'Find the greatest common divisor of given numbers.';

const getGcdResult = (num1, num2) => {
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

const getGameData = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);

  const result = `${getGcdResult(number1, number2)}`;
  const question = `${number1} ${number2} `;
  return [question, result];
};

export default startGame(RULES, getGameData);
