import actionTypes from '../constants';
import audioFalse from '../../components/answers/assets/sound-effects/false.mp3';
import audioTrue from '../../components/answers/assets/sound-effects/true.mp3';

const {
  ANSWER_TRUE,
  ANSWER_FALSE,
  HANDLE_ERROR,
  FETCH_RANDOM_SOUND,
  FETCH_DETAILS_SOUND,
} = actionTypes;

const setAnswerTrue = (event) => {
  event.target.classList.add('btn-success');

  const trueSound = new Audio(audioTrue);
  trueSound.play();

  return { type: ANSWER_TRUE };
};

const setAnswerFalse = (event) => {
  event.target.classList.add('btn-danger');

  const falseSound = new Audio(audioFalse);
  falseSound.play();

  return { type: ANSWER_FALSE };
};

const handleError = () => ({ type: HANDLE_ERROR });

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

export {
  setAnswerTrue,
  setAnswerFalse,
  handleError,
  fetchRandomSound,
  fetchDetailsSound,
};
