import readlineSync from 'readline-sync';
import getUserName from '../src/index.js';
import { NUMBER_OF_QUESTIONS, getRandomNumber } from '../src/utils.js';

const Answer = {
  YES: 'yes',
  NO: 'no',
};

const gameEven = () => {
  const userName = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= NUMBER_OF_QUESTIONS; i += 1) {
    const questionNumber = getRandomNumber(100);
    const isEven = !(questionNumber % 2);

    const answer = readlineSync.question(`Question: ${questionNumber} `);
    console.log(`Your answer: ${answer}`);

    if (
      (!isEven && answer.toLowerCase() !== Answer.NO)
      || (isEven && answer.toLowerCase() !== Answer.YES)
    ) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${
          isEven ? Answer.YES : Answer.NO
        }'.`,
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

export default gameEven;
