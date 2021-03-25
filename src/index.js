import readlineSync from 'readline-sync';
import greeting from './greeting.js';

const QUESTIONS_COUNT = 3;

const startGame = (rules, getGameData) => {
  const userName = greeting();
  console.log(`${rules}`);

  return () => {
    let currentQestionNumber = 1;
    while (currentQestionNumber <= QUESTIONS_COUNT) {
      const [question, result] = getGameData();

      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');

      if (answer !== result) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }

      console.log('Correct!');
      currentQestionNumber += 1;
    }

    console.log(`Congratulations, ${userName}!`);
  };
};

export default startGame;
