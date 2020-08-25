/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

import { getArrayOfNames } from '../../data';

const Answers = ({ onAnswer, categoryIndex, selectedBird }) => {
  const { answers, transparentize, button } = styles;
  const [namesList, setNamesList] = useState(getArrayOfNames(categoryIndex));
  const [bird, setBird] = useState(selectedBird);

  const buttons = namesList.map((name, index) => {
    return (
      <li
        key={`answer${index}`}
        className={`list-group-item d-flex justify-content-between align-items-center ${transparentize}`}>
        <button
          type="button"
          data-index={index}
          className={`btn btn-info ${button}`}
          onClick={(event) => {
            setBird(index);
            onAnswer(event);
          }}>
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

Answers.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  categoryIndex: PropTypes.number.isRequired,
  selectedBird: PropTypes.number,
};

Answers.defaultProps = {
  selectedBird: 0,
};

export default Answers;
