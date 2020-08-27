/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */

import React from 'react';

import Answers from '../answers';
import Details from '../details';

import store from '../../store';
import styles from './index.module.css';

const RowWrapper = () => {
  const { answersWrapper, button } = styles;

  const { isNextLevelButtonDisabled } = store.getState();

  return (
    <>
      <div className={answersWrapper}>
        <Answers />
        <Details />
      </div>
      <button
        type="button"
        className={`btn btn-primary btn-lg btn-block ${button}`}
        id="nextLevel"
        disabled={isNextLevelButtonDisabled}>
        Следующий уровень
      </button>
    </>
  );
};

export default RowWrapper;
