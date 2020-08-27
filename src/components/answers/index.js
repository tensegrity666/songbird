/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import { bindActionCreators } from 'redux';

import styles from './index.module.css';
import { getArrayOfNames } from '../../data';
import store from '../../store';
import * as actions from '../../redux/actions';
// import toggleClassName from './utils';

const Answers = () => {
  const { answers, transparentize, button } = styles;

  const { dispatch } = store;
  const { answerTrue } = bindActionCreators(actions, dispatch);

  const { activeCategory, isContentLoading } = store.getState();

  const [namesList, setNamesList] = useState(getArrayOfNames(activeCategory));

  const onAnswer = (event) => {
    if (isContentLoading) {
      return;
    }

    // const randomSoundId = document.querySelector('#randomSound').dataset.random;
    // const checkedAnswerId = event.target.dataset.index;

    // if (randomSoundId === checkedAnswerId) {
    //   setMainInfo({
    //     isCorrect: true,
    //   });

    //   unlockNextLevelButton();
    //   // eslint-disable-next-line no-console
    //   console.log('true!');
    // }

    answerTrue();
  };

  // const { isCorrect, isChecked, categoryIndex } = mainInfo;

  const buttons = namesList.map((name, index) => {
    return (
      <li
        key={`answer${index}`}
        className={`list-group-item d-flex justify-content-between align-items-center ${transparentize}`}>
        <button
          type="button"
          data-index={index}
          className={`btn btn-info ${button}`}
          onClick={onAnswer}
          // onClick={(event) => {
          //   toggleClassName(event);
          // }}
        >
          {name}
        </button>
      </li>
    );
  });

  return (
    <ul className={`list-group col-12 col-md-12 col-lg-3 ${answers}`}>
      {buttons}
    </ul>
  );
};

export default Answers;
