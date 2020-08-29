import actionTypes from '../constants';
import initialState from '../initial-state';

const {
  ANSWER_TRUE,
  ANSWER_FALSE,
  HANDLE_ERROR,
  FETCH_RANDOM_SOUND,
  FETCH_DETAILS_SOUND,
} = actionTypes;

const reducer = (state = initialState, { type, payload }) => {
  const {
    score,
    initialScorePointsPerCategory,
    scorePointsIfWrong,
    hasAnswer,
  } = state;

  switch (type) {
    case ANSWER_TRUE:
      return {
        ...state,
        isAnswerCorrect: true,
        isNextLevelButtonDisabled: false,
        score: hasAnswer ? score : score + initialScorePointsPerCategory,
        hasAnswer: true,
      };

    case ANSWER_FALSE:
      return {
        ...state,
        isAnswerCorrect: false,
        score: hasAnswer ? score - 1 : score + scorePointsIfWrong,
        hasAnswer: true,
      };

    case HANDLE_ERROR:
      return {
        ...state,
        isContentLoading: false,
        hasError: true,
      };

    case FETCH_RANDOM_SOUND:
      return {
        ...state,
        isContentLoading: false,
        hasError: false,
        audioURL: payload.audioURL,
        rusName: payload.name,
        latinName: payload.species,
        rusDescription: payload.description,
        answerID: payload.id,
        photo: payload.link,
      };

    case FETCH_DETAILS_SOUND:
      return {
        isContentLoading: false,
        hasError: false,
        isAnswerChecked: true,
        audioURL: payload.audioURL,
        rusName: payload.name,
        latinName: payload.species,
        rusDescription: payload.description,
        answerID: payload.id,
        photo: payload.link,
      };

    default:
      return state;
  }
};

export default reducer;
