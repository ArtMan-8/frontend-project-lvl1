import readlineSync from 'readline-sync';
import greeting from './greeting.js';

const QUESTIONS_COUNT = 3;

const startGame = (rules, getGameData) => {
  const userName = greeting();
  console.log(`${rules}`);

  return () => {
    for (let i = 1; i <= QUESTIONS_COUNT; i += 1) {
      const [question, result] = getGameData();

      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');

      if (answer === result) {
        console.log('Correct!');
      }

      if (answer !== result) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }

      if (i === QUESTIONS_COUNT) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
  };
};

export default startGame;
