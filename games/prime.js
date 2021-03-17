import startGame from '../src/index.js';
import { Answers, getRandomNumber } from '../src/utils.js';

const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num <= 3) return true;

  if (!(num % 2) || !(num % 3) || !(num % 5)) {
    return false;
  }

  return true;
};

const getGameData = () => {
  const number = getRandomNumber(0, 100);

  const result = isPrime(number) ? Answers.YES : Answers.NO;
  const question = number;
  return [question, result];
};

export default startGame(RULES, getGameData);
