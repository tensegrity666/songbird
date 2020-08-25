import actionTypes from '../constants';

const { DISABLE_BTN, ENABLE_BTN } = actionTypes;

const disable = () => ({ type: DISABLE_BTN });
const enable = () => ({ type: ENABLE_BTN });

export { enable, disable };
