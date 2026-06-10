import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
};

const getQuestionAnswer = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));

  return [question, answer];
};

export { description, getQuestionAnswer };
