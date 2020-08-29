import actionTypes from '../constants';
import audioFalse from '../../components/answers/assets/sound-effects/false.mp3';
import audioTrue from '../../components/answers/assets/sound-effects/true.mp3';

const {
  ANSWER_TRUE,
  ANSWER_FALSE,
  HANDLE_ERROR_IN_RANDOM,
  HANDLE_ERROR_IN_DETAILS,
  FETCH_RANDOM_SOUND,
  FETCH_DETAILS_SOUND,
  NEXT_LEVEL,
  RESTORE_ANSWERS,
} = actionTypes;

const setAnswerTrue = (event) => {
  event.target.classList.remove('btn-info');
  event.target.classList.add('btn-success');

  const trueSound = new Audio(audioTrue);
  trueSound.play();

  return { type: ANSWER_TRUE };
};

const setAnswerFalse = (event) => {
  event.target.classList.remove('btn-info');
  event.target.classList.add('btn-danger');

  const falseSound = new Audio(audioFalse);
  falseSound.play();

  return { type: ANSWER_FALSE };
};

const handleErrorInRandom = () => ({ type: HANDLE_ERROR_IN_RANDOM });

const handleErrorInDetails = () => ({ type: HANDLE_ERROR_IN_DETAILS });

const fetchRandomSound = (payload) => {
  return {
    type: FETCH_RANDOM_SOUND,
    payload,
  };
};

const fetchDetailsSound = (payload) => {
  return {
    type: FETCH_DETAILS_SOUND,
    payload,
  };
};

const restoreAnswers = () => {
  const answerButtons = document.querySelectorAll('button[data-answers]');
  answerButtons.forEach((element) => {
    element.classList.remove('btn-danger');
    element.classList.remove('btn-success');
    element.classList.add('btn-info');
  });

  return {
    type: RESTORE_ANSWERS,
  };
};

const SwitchToNextLevel = () => {
  restoreAnswers();
  return { type: NEXT_LEVEL };
};

export {
  setAnswerTrue,
  setAnswerFalse,
  handleErrorInRandom,
  handleErrorInDetails,
  fetchRandomSound,
  fetchDetailsSound,
  SwitchToNextLevel,
  restoreAnswers,
};
