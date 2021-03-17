#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const NUMBER_OF_QUESTIONS = 3;

const MathOperaions = {
  PLUS: '+',
  MINUS: '-',
  MULTI: '*',
};

const mathOperaions = Object.values(MathOperaions);

const getRandomNumber = (num) => Math.floor(Math.random() * num);

const getResult = (num1, num2, operation) => {
  switch (operation) {
    case MathOperaions.PLUS: return num1 + num2;
    case MathOperaions.MINUS: return num1 - num2;
    case MathOperaions.MULTI: return num1 * num2;
    default: return NaN;
  }
};

const userName = getUserName();
console.log('What is the result of the expression?');

for (let i = 1; i <= NUMBER_OF_QUESTIONS; i += 1) {
  const number1 = getRandomNumber(20);
  const number2 = getRandomNumber(20);
  const mathOperation = mathOperaions[getRandomNumber(Object.values(MathOperaions).length)];
  const result = getResult(number1, number2, mathOperation);

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
