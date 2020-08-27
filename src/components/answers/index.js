/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getArrayOfNames } from '../../data';
import { setAnswerTrue, setAnswerFalse } from '../../redux/actions';

import styles from './index.module.css';
import store from '../../store';

const Answers = ({ activeCategory, isContentLoading }) => {
  const { answers, transparentize, button } = styles;

  const [namesList, setNamesList] = useState(getArrayOfNames(activeCategory));

  const onAnswer = (event) => {
    if (isContentLoading) {
      return;
    }

    const randomSoundId = document.querySelector('#randomSound').dataset.random;
    const checkedAnswerId = event.target.dataset.index;

    event.target.classList.remove('btn-info');

    if (randomSoundId === checkedAnswerId) {
      setAnswerTrue(event);
      // eslint-disable-next-line no-console
      console.log(store.getState());
    } else {
      setAnswerFalse(event);
      // eslint-disable-next-line no-console
      console.log(store.getState());
    }
  };

  const buttons = namesList.map((name, index) => {
    return (
      <li
        key={`answer${index}`}
        className={`list-group-item d-flex justify-content-between align-items-center ${transparentize}`}>
        <button
          type="button"
          data-index={index}
          className={`btn btn-info ${button}`}
          onClick={onAnswer}>
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

const mapStateToProps = ({ activeCategory, isContentLoading }) => {
  return { activeCategory, isContentLoading };
};

const mapDispatchToProps = {
  setAnswerTrue,
  setAnswerFalse,
};

Answers.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  isContentLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
