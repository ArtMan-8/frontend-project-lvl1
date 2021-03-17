import startGame from '../src/index.js';
import { getRandomNumber } from '../src/utils.js';

export const Answers = {
  YES: 'yes',
  NO: 'no',
};

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const number = getRandomNumber(0, 100);

  const result = number % 2 ? Answers.NO : Answers.YES;
  const question = number;
  return [question, result];
};

export default startGame(RULES, getGameData);
