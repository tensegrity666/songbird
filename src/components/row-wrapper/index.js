/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */

import React from 'react';
import { connect } from 'react-redux';

import Answers from '../answers';
import Details from '../details';

import styles from './index.module.css';

const RowWrapper = ({ isNextLevelButtonDisabled }) => {
  const { answersWrapper, button } = styles;

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

const mapStateToProps = ({ isNextLevelButtonDisabled }) => {
  return { isNextLevelButtonDisabled };
};

export default connect(mapStateToProps)(RowWrapper);
