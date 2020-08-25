import actionTypes from '../constants';
import initialState from '../initial-state';

const { DISABLE_BTN, ENABLE_BTN } = actionTypes;

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case DISABLE_BTN:
      return {
        ...state,
        isButtonDisabled: true,
      };

    case ENABLE_BTN:
      return {
        ...state,
        isButtonDisabled: false,
      };

    default:
      return state;
  }
};

export default reducer;
