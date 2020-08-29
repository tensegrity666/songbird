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
  UPDATE_RANDOM_SOUND,
  UPDATE_SELECTED_ANSWER,
} = actionTypes;

const reducer = (state = initialState, { type, payload }) => {
  const { score, initialScorePointsPerCategory, activeCategory } = state;

  switch (type) {
    case ANSWER_TRUE:
      return {
        ...state,
        isAnswerCorrect: true,
        isNextLevelButtonDisabled: false,
        hasAnswer: true,
        score: score + initialScorePointsPerCategory,
      };

    case ANSWER_FALSE:
      return {
        ...state,
        hasWrongAnswer: true,
        isAnswerCorrect: false,
        hasAnswer: true,
        score: score - 1,
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
        isAnswerChecked: false,
        score,
      };

    case FETCH_RANDOM_SOUND:
      return {
        ...state,
        isContentLoading: false,
        hasError: false,
        randomAudioURL: payload.audioURL,
        randomRusName: payload.name,
        answerID: payload.id,
        randomPhoto: payload.link,
      };

    case UPDATE_RANDOM_SOUND:
      return {
        ...state,
      };

    case UPDATE_SELECTED_ANSWER:
      return {
        ...state,
        isDetailsLoading: true,
        selectedAnswer: Number(payload),
      };

    case HANDLE_ERROR_IN_DETAILS:
      return {
        ...state,
        isDetailsLoading: false,
        hasError: true,
      };

    case FETCH_DETAILS_SOUND:
      return {
        ...state,
        isDetailsLoading: false,
        hasError: false,
        isAnswerChecked: true,
        audioURL: payload.audioURL,
        rusName: payload.rusName,
        latinName: payload.latinName,
        rusDescription: payload.rusDescription,
        photo: payload.photo,
        anchor: payload.anchor,
      };

    default:
      return state;
  }
};

export default reducer;
