import startGame from '../index.js';
import getRandomNumber from '../utils.js';
import Answers from '../constants.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (!(num % 2));

const getGameData = () => {
  const number = getRandomNumber();

  const result = isEven(number) ? Answers.YES : Answers.NO;
  const question = number;
  return [question, result];
};

export default startGame(RULES, getGameData);
