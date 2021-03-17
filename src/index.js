import readlineSync from 'readline-sync';

const NUMBER_OF_QUESTIONS = 3;

const startGame = (rules, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}`);

  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}`);

  return () => {
    for (let i = 1; i <= NUMBER_OF_QUESTIONS; i += 1) {
      const [question, result] = getGameData();

      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');

      if (answer === result) {
        console.log('Correct!');

        if (i === NUMBER_OF_QUESTIONS) {
          console.log(`Congratulations, ${userName}!`);
        }
      }

      if (answer !== result) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  };
};

export default startGame;
