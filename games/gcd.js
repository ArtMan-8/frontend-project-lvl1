import readlineSync from 'readline-sync';
import getUserName from '../src/index.js';
import { NUMBER_OF_QUESTIONS, getRandomNumber, getGcdResult } from '../src/utils.js';

const gameGcd = () => {
  const userName = getUserName();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= NUMBER_OF_QUESTIONS; i += 1) {
    const number1 = getRandomNumber(1, 20);
    const number2 = getRandomNumber(1, 20);
    const result = getGcdResult(number1, number2);

    const answer = readlineSync.question(`Question: ${number1} ${number2} `);
    console.log(`Your answer: ${answer}`);

    if (+answer !== result) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');

    if (i === NUMBER_OF_QUESTIONS) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameGcd;
