#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const NUMBER_OF_QUESTIONS = 15;

const Answer = {
  YES: 'yes',
  NO: 'no',
};

const getRandomNumber = () => Math.floor(Math.random() * 100);

const userName = getUserName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 1; i <= NUMBER_OF_QUESTIONS; i += 1) {
  const questionNumber = getRandomNumber();
  const isEven = !(questionNumber % 2);
  const answer = readlineSync.question(`Question: ${questionNumber} `);

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

  console.log(`Your answer: ${answer}`);
  console.log('Correct!');

  if (i === NUMBER_OF_QUESTIONS) {
    console.log(`Congratulations, ${userName}!`);
  }
}
