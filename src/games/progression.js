import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let index = 0; index < length; index += 1) {
    progression.push(start + index * step);
  }

  return progression;
};

const getQuestionAnswer = () => {
  const length = getRandomNumber(5, 11);
  const start = getRandomNumber(1, 11);
  const step = getRandomNumber(1, 6);
  const hiddenIndex = getRandomNumber(0, length);
  const progression = generateProgression(start, step, length);
  const answer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export { description, getQuestionAnswer };
