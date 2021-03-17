import readlineSync from 'readline-sync';
import getUserName from '../src/index.js';
import {
  NUMBER_OF_QUESTIONS, getRandomMathOperaion, getRandomNumber, getCalcResult,
} from '../src/utils.js';

const gameCalc = () => {
  const userName = getUserName();
  console.log('What is the result of the expression?');

  for (let i = 1; i <= NUMBER_OF_QUESTIONS; i += 1) {
    const number1 = getRandomNumber(20);
    const number2 = getRandomNumber(20);
    const mathOperation = getRandomMathOperaion();
    const result = getCalcResult(number1, number2, mathOperation);

    const answer = readlineSync.question(`Question: ${number1} ${mathOperation} ${number2} = `);
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

export default gameCalc;
