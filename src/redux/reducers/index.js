import actionTypes from '../constants';
import initialState from '../initial-state';

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

const updateDetails = (state, { type, payload }) => {
  switch (type) {
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

    case HANDLE_ERROR_IN_DETAILS:
      return {
        isContentLoading: false,
        hasError: true,
      };

    default:
      return state;
  }
};

const reducer = (state = initialState, { type, payload }) => {
  const {
    score,
    initialScorePointsPerCategory,
    scorePointsIfWrong,
    hasAnswer,
    activeCategory,
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

    case HANDLE_ERROR_IN_RANDOM:
      return {
        ...state,
        isContentLoading: false,
        hasError: true,
      };

    case NEXT_LEVEL:
      return {
        ...state,
        activeCategory: activeCategory + 1,
        isNextLevelButtonDisabled: true,
      };

    case RESTORE_ANSWERS:
      return {
        ...state,
        hasAnswer: false,
        isAnswerCorrect: null,
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

    case HANDLE_ERROR_IN_DETAILS:
      return {
        ...state,
        details: updateDetails(state, type),
      };

    case FETCH_DETAILS_SOUND:
      return {
        ...state,
        details: updateDetails(state, type),
      };

    default:
      return state;
  }
};

export default reducer;
