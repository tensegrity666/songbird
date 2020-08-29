/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getArrayOfNames } from '../../data';

import store from '../../store';
import * as actions from '../../redux/actions';
import styles from './index.module.css';

const Answers = ({ activeCategory, isContentLoading }) => {
  const { answers, transparentize, button } = styles;

  const t = getArrayOfNames(activeCategory);

  const [namesList, setNamesList] = useState(t);

  const { dispatch } = store;
  const { setAnswerTrue, setAnswerFalse, restoreAnswers } = bindActionCreators(
    actions,
    dispatch
  );

  useEffect(() => {
    setNamesList(() => getArrayOfNames(activeCategory));
  }, [activeCategory]);

  const onAnswer = (event) => {
    if (isContentLoading) {
      return;
    }

    const randomSoundId = document.querySelector('#randomSound').dataset.random;
    const checkedAnswerId = event.target.dataset.index;

    if (randomSoundId === checkedAnswerId) {
      setAnswerTrue(event);
    } else {
      setAnswerFalse(event);
    }
  };

  const buttons = namesList.map((name, index) => {
    return (
      <li
        key={`answer${index}`}
        className={`list-group-item d-flex justify-content-between align-items-center ${transparentize}`}>
        <button
          type="button"
          data-answers
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

Answers.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  isContentLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Answers);
