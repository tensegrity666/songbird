/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */

import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getArrayOfNames, getInfo } from '../../data';

import { fetchAudioDataDetails } from '../../services/xeno-canto-api/fetch-audio';

import store from '../../store';
import * as actions from '../../redux/actions';
import styles from './index.module.css';

const Answers = ({ activeCategory, isContentLoading, selectedAnswer }) => {
  const { answers, transparentize, button } = styles;

  const names = getArrayOfNames(activeCategory);

  const [namesList, setNamesList] = useState(names);

  const { dispatch } = store;
  const {
    setAnswerTrue,
    setAnswerFalse,
    updateSelectedAnswer,
  } = bindActionCreators(actions, dispatch);

  const request = useMemo(() => getInfo(activeCategory, selectedAnswer), [
    activeCategory,
    selectedAnswer,
  ]);

  useEffect(() => {
    setNamesList(() => getArrayOfNames(activeCategory));
    fetchAudioDataDetails(request);
  }, [activeCategory, request]);

  const onAnswer = (event) => {
    if (isContentLoading) {
      return;
    }

    const randomSoundId = document.querySelector('#randomSound').dataset.random;
    const checkedAnswerId = event.target.dataset.index;
    updateSelectedAnswer(checkedAnswerId);

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

const mapStateToProps = ({
  activeCategory,
  isContentLoading,
  selectedAnswer,
  isAnswerChecked,
}) => {
  return { activeCategory, isContentLoading, selectedAnswer, isAnswerChecked };
};

Answers.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  selectedAnswer: PropTypes.number,
  isContentLoading: PropTypes.bool.isRequired,
};

Answers.defaultProps = {
  selectedAnswer: null,
};

export default connect(mapStateToProps)(Answers);
