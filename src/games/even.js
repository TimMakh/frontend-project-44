import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = number => number % 2 === 0;

const getQuestionAnswer = () => {
  const number = getRandomNumber();
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

export { description, getQuestionAnswer };
