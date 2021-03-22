import startGame from '../index.js';
import getRandomNumber from '../utils.js';
import Answers from '../constants.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const number = getRandomNumber(0, 100);

  const result = number % 2 ? Answers.NO : Answers.YES;
  const question = number;
  return [question, result];
};

export default startGame(RULES, getGameData);
