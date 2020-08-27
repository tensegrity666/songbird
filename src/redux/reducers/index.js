import actionTypes from '../constants';
import initialState from '../initial-state';

const { ANSWER_TRUE, ANSWER_FALSE, ALREADY_ANSWERED } = actionTypes;

const reducer = (state = initialState, { type }) => {
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

    case ALREADY_ANSWERED:
      return {
        ...state,
        hasAnswer: true,
      };

    default:
      return state;
  }
};

export default reducer;
