import actionTypes from '../constants';
import initialState from '../initial-state';

const { ANSWER_TRUE } = actionTypes;

const reducer = (state = initialState, { type, payload }) => {
  const { score, initialScorePointsPerCategory } = state;

  switch (type) {
    case ANSWER_TRUE:
      return {
        ...state,
        payload,
        isAnswerCorrect: true,
        score: score + initialScorePointsPerCategory,
      };

    default:
      return state;
  }
};

export default reducer;
