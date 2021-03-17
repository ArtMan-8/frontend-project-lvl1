import startGame from '../src/index.js';
import { getRandomNumber } from '../src/utils.js';

const RULES = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const getGameData = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 5);
  const startNumber = getRandomNumber(1, 10);
  const hideIndex = getRandomNumber(0, progressionLength);

  const progression = generateProgression(startNumber, progressionStep, progressionLength);
  const hideNumber = progression[hideIndex];
  progression[hideIndex] = '..';

  const result = `${hideNumber}`;
  const question = `${progression.join(' ')} `;
  return [question, result];
};

export default startGame(RULES, getGameData);
