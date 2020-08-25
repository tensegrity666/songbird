import actionTypes from './constants';
import initialState from './initial-state';

const { DISABLE_BTN, ENABLE_BTN } = actionTypes;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DISABLE_BTN:
      return state + 1;

    case ENABLE_BTN:
      return {
        ...state,
        value: payload,
      };

    default:
      return state;
  }
};

export default reducer;
