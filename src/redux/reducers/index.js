import actionTypes from '../constants';
import initialState from '../initial-state';

const { ANSWER_TRUE, ANSWER_FALSE, ANSWER_TRUE1 } = actionTypes;

const reducer = (state = initialState, { type }) => {
  const { score, initialScorePointsPerCategory, scorePointsIfWrong } = state;

  switch (type) {
    case ANSWER_TRUE1:
      return {
        ...state,
        isAnswerCorrect: true,
        isNextLevelButtonDisabled: false,
        score: score + initialScorePointsPerCategory,
      };

    case ANSWER_TRUE:
      return {
        score: 100,
      };

    case ANSWER_FALSE:
      return {
        ...state,
        isAnswerCorrect: false,
        score: score + scorePointsIfWrong,
      };

    default:
      return state;
  }
};

export default reducer;
