/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import styles from './index.module.css';
import { getArrayOfNames } from '../../data';
import store from '../../store';
import * as actions from '../../redux/actions';
import toggleClassName from './utils';

const Answers = ({ categoryIndex, selectedBird }) => {
  const { answers, transparentize, button } = styles;

  const { dispatch } = store;
  const { disable, enable } = bindActionCreators(actions, dispatch);

  const [namesList, setNamesList] = useState(getArrayOfNames(categoryIndex));

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
            toggleClassName(event);
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
  categoryIndex: PropTypes.number.isRequired,
  selectedBird: PropTypes.number,
};

Answers.defaultProps = {
  selectedBird: 0,
};

export default Answers;
