import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getQuestionAnswer = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length)];
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, num2, operator));

  return [question, answer];
};

export { description, getQuestionAnswer };
