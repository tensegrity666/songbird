import actionTypes from '../constants';

const { ANSWER_TRUE, ANSWER_FALSE } = actionTypes;

const setAnswerTrue = () => ({ type: ANSWER_TRUE });

// const setAnswerTrue1 = (event) => {
//   event.target.classList.add('btn-success');

//   return { type: ANSWER_TRUE };
// };

const setAnswerFalse = (event) => {
  event.target.classList.add('btn-danger');

  return { type: ANSWER_FALSE };
};

export { setAnswerTrue, setAnswerFalse };
